const { Schema, model } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const messageSchema = new Schema({
  messageText: {type: String, 
    required: true,
  },
  read: { 
    type: Boolean, 
    default: false,
  },
  dateCreated: { 
    type: Date, 
    default: Date.now,
    get: (date) => moment(date).format('DD MMM YYYY [at] hh:mm a'), 
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Message", messageSchema);
