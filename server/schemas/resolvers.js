const { User, Pet, Message } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });
        return user;
      }
    },
    pets: async () => {
        return Pet.find();
    },
  
    pet: async (parent, { petId }) => {
        return Pet.findOne({ _id: petId });
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
    aboutMe: async (parent, { id, description }) => {
        // Find and update the matching User using the destructured args
        return await User.findOneAndUpdate(
          { _id: id }, 
          { description },
          // Return the newly updated object instead of the original
          { new: true }
        );
    },
    savePet: async (parent, { pet }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { likedPets: pet } },
          { new: true }
        );
        return updatedUser;
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
    addPet: async (parent, { input }) => {
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
    sendMessage: async (parent, { userId, messageText }) => {
        return User.findOneAndUpdate(
          { _id: userId },
          { $push: { messages: { messageText } } },
          { new: true }
        );
    },
  },
};

module.exports = resolvers;