const { User } = require("../../models");
const { UserInputError, AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../../utils/auth");

module.exports = {
    Query: {
        me: async (parent, args, context) => {
          if (context.user) {
            const user = await User.findOne({ _id: context.user._id });
            return user;
          }
        },
        users: async () => {
            return await User.find({})
            .populate('userPets')
            .populate('likedPets')
            .populate('messages');
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
    },
};