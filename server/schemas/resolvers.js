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
    updateUser: async (parent, { id, description }) => {
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
  },
};

module.exports = resolvers;