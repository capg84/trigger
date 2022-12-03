const { User, Pet, Message } = require("../../models");
const { UserInputError, AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../../utils/auth");

module.exports = {
    Query: {
        pets: async () => {
            return Pet.find();
        },
      
        pet: async (parent, { petId }) => {
            return Pet.findOne({ _id: petId });
        },
    },
    Mutation: {
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
    },
};