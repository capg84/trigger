const { Schema } = require("mongoose");

const inboxSchema = new Schema({
    lastMessage: String,
    inboxParticipants: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    }],
    lastSentUser: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
  });
  
  module.exports = inboxSchema;