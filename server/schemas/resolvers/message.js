const { User, Pet, Message } = require("../../models");
const { UserInputError, AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../../utils/auth");

module.exports = {
    Query: {
        messages: async (parent, { from }, { user }) => {

            if (!user) {
                throw new AuthenticationError('Unauthenticated')
            }
      
            const otherUser = await User.findOne({
            where: { fullname: from },
            })
            if (!otherUser) {
                throw new UserInputError('User not found')
            }
      
            const fullnames = [user.fullname, otherUser.fullname]
      
            const messages = await Message.findAll({
            where: {
                from: { [Op.in]: fullnames },
                to: { [Op.in]: fullnames },
            },
            order: [['dateCreated', 'DESC']],
            })
      
            return messages
        }, 
    },
    Mutation: {
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
                return  message 
            }
        },
    },
};