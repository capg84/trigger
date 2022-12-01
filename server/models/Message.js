const { Schema, model } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const messageSchema = new Schema({
  from: {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    fullName: String,
    read: { type: Boolean, default: false },
    dateReceived: { type: Date, default: Date.now },
  },
  to: {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    fullName: String,
    read: { type: Boolean, default: false },
  },
  messageText: {type: String, required: true},
  dateCreated: { type: Date, default: Date.now },
});

module.exports = model("Message", messageSchema);
