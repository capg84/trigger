const { User, Pet, Message } = require("../models");
const { UserInputError, AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { populate } = require("../models/Pet");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
        .populate('userPets')
        .populate('likedPets')
        .populate('messages')
        .populate({
          path: 'messages',
          populate: 'from'
        })
        return user;
      }
    },
    users: async () => {
        return await User.find({})
        .populate('userPets')
        .populate('likedPets')
        .populate('messages');
    },
    pets: async () => {
      return Pet.find().populate('userLikes').sort({dateCreated: -1});
    },
  
    pet: async (parent, { petId }) => {
      return Pet.findOne({ _id: petId });
    },
    getmessages: async (parent, { from }, context) => {
      if (!context.user) {
        throw new AuthenticationError('invalid token')
      }
  
      const otherUser = await User.findOne({ _id: from })
      if (!otherUser) {
        throw new UserInputError('User not found')
      }

      const messages = await Message.find({})
      .populate('from')
      .populate('to')
      .sort({dateCreated: -1})
  
      return messages;
    },
    userPets: async () => {
      return Pet.find();
    },
    likedPets: async () => {
      return Pet.find();
    },
    userLikes: async () => {
      return User.find();
    }, 
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { fullname, email, password }) => {
      const user = await User.create({ fullname, email, password });
      const token = signToken(user);
      return { token, user };
    },
    aboutMe: async (parent, { description, city, country }, context) => {
        // Find and update the matching User using the destructured args
        return await User.findOneAndUpdate(
          { _id: context.user._id }, 
          { description },
          { city },
          { country },
          // Return the newly updated object instead of the original
          { new: true }
        );
    },
    savePet: async (parent, { pet }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { likedPets: pet } },
          { new: true }
        );
        pet.userLikes.push(user._id);
        pet.save();
        return user;
      }
    },
    removeLikedPet: async (parent, { petId }, context) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { likedPets: { petId: petId } } },
        { new: true }
      );
      return updatedUser;
    },
    addPet: async (parent, { input }, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
              { _id: context.user._id },
              { $addToSet: { userPets: input } },
              { new: true }
            );
            return updatedUser;
        }
    },
    updatePet: async (parent, { petId, input }) => {
        // Find and update the matching Pet using the destructured args
        return await Pet.findOneAndUpdate(
          { _id: petId }, 
          { ...input },
          // Return the newly updated object instead of the original
          { new: true }
        );
    },
    removePet: async (parent, { petId }) => {
        return Pet.findOneAndDelete({ _id: petId });
    },
    addComment: async (parent, { petId, commentId }) => {
        return Pet.findOneAndUpdate(
          { _id: petId },
          { $push: { comments: { _id: commentId } } },
          { new: true }
        );
    },
    removeComment: async (parent, { petId, commentId }) => {
        return Pet.findOneAndUpdate(
          { _id: petId },
          { $pull: { comments: { _id: commentId } } },
          { new: true }
        );
    },
    sendMessage: async (parent, { to, messageText }, context) => {
        if (context.user) {
            const recipient = await User.findOne({ _id: to });
            if(!recipient) {
                throw new UserInputError ('User not found');
            } else if (recipient._id === context.user._id) {
                throw new UserInputError ('you cannot message yourself')
            }
            if(messageText.trim() === '') {
                throw new UserInputError ('Message is empty');
            }
            const message = await Message.create({
                messageText,
                to,
                from: context.user._id
            })
            recipient.messages.push(message._id);
            recipient.save();
            return message;
        }
    },
  },
};

module.exports = resolvers;