const { Schema } = require("mongoose");

const inboxSchema = new Schema({
    inboxParticipants: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    }],
    lastMessage: String,
    lastSentUserId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
  });
  
  module.exports = inboxSchema;