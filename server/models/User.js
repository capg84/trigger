const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    city: {
      type: String
    },
    country: {
      type: String
    },
    description: {
      type: String,
    },
    userPets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Pet',
      },
    ],
    likedPets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Pet',
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message',
      },
    ],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("likedCount").get(function () {
  return this.likedPets.length;
});

userSchema.virtual("messageCount").get(function () {
  return this.messages.length;
});

module.exports = model("User", userSchema);
