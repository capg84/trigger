const { User, Pet, Message } = require("../models");
const { UserInputError, AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const collect = require("collect.js");

const resolvers = {
  Query: {
    // Get a User(me) dashboard when signed in
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
    // get all users
    users: async () => {
        return await User.find({})
        .populate('userPets')
        .populate('likedPets')
        .populate('messages')
        .populate({
          path: 'messages',
          populate: 'from'
        });
    },
    // get all pets
    pets: async () => {
      return Pet.find({})
      .populate('userLikes')
      .populate('owner')
      .sort({dateCreated: -1});
    },
    // get a single pet
    pet: async (parent, { petId }) => {
      return Pet.findOne({ _id: petId })
      .populate('owner')
      .populate('comments')
    },
    // get messages from a particular user when signed in
    getmessages: async (parent, { from }, context) => {
      if (!context.user) {
        throw new AuthenticationError('invalid token')
      }
  
      const otherUser = await User.findOne({ _id: from })
      if (!otherUser) {
        throw new UserInputError('User not found')
      }
      const myId = context.user._id;
      const userIds = [myId, otherUser._id]

      const messages = await Message.find({
        from: {$in: userIds},
        to: {$in: userIds}
      })
      .populate('from')
      .populate('to')
      .sort({dateCreated: -1})
  
      return messages;
    },
    // get user's pets
    userPets: async () => {
      return await Pet.find();
    },
    // get user's liked pets
    likedPets: async () => {
      return await Pet.find();
    },
    // get users that liked a pet
    userLikes: async () => {
      return await User.find();
    },
    // get all messages
    messages: async(parent, args, context) => {
      const myId = context.user._id;
      return await Message.find({to: myId
        // $or: [{from: myId}, {to: myId}]
      })
      .populate('from')
      .sort({dateCreated: -1});
      const collection = collect(allMessages);
      groupmessage = collection.groupBy('from');  
      const grouped = groupmessage.all();
      console.log('group:', grouped);

      return {allMessages};
    }, 
  },
  Mutation: {
    // login user
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
    // add a new user
    addUser: async (parent, { fullname, email, password }) => {
      const user = await User.create({ fullname, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // update user information when signed in
    aboutMe: async (parent, { ...userInput }, context) => {
        // Find and update the matching User using the destructured args
        return await User.findOneAndUpdate(
          { _id: context.user._id }, 
          { ...userInput },
          // Return the newly updated object instead of the original
          { new: true }
        );
    },
    // like a pet when signed in
    savePet: async (parent, { petId }, context) => {
      if (context.user) {
        const pet = await Pet.findOne({_id: petId})
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { likedPets: petId } },
          { new: true }
        );
        pet.userLikes.push(user._id);
        pet.save();
        return user;
      }
    },
    // remove a liked pet or a user pet when signed in
    removeLikedPet: async (parent, { petId }, context) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { likedPets: { petId: petId } } },
        { new: true }
      );
      return updatedUser;
    },
    // add a pet when signed in
    addPet: async (parent, { ...petInput }, context) => {
        if (context.user) {
          const user = await User.findOne({_id: context.user._id});
          const petInfo = await Pet.create({
            ...petInput,
            owner: user
          })
          user.userPets.push(petInfo._id);
          user.save();
          return petInfo;
        }
    },
    // update pet details with additional information when signed in
    updatePet: async (parent, { petId, ...input }, context) => {
        // Find and update the matching Pet using the destructured args
        if(context.user) {
          return await Pet.findOneAndUpdate(
            { _id: petId }, 
            { ...input },
            // Return the newly updated object instead of the original
            { new: true }
          );
        }
    },
    // remove a pet when signed in
    removePet: async (parent, { petId }, context) => {
      if (context.user) {
        return Pet.findOneAndDelete({ _id: petId });
      }
    },
    // add a comment when signed in
    addComment: async (parent, { petId, commentBody }, context) => {
      if (context.user) {
        return Pet.findOneAndUpdate(
          { _id: petId },
          { $addToSet: { comments: { commentBody } } },
          { new: true, runValidators: true }
        );
      }
    },
    // remove a comment when signed in
    removeComment: async (parent, { petId, commentId }, context) => {
      if (context.user) {
        return Pet.findOneAndUpdate(
          { _id: petId },
          { $pull: { comments: { _id: commentId } } },
          { new: true }
        );
      }
    },
    // send a message to a user
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