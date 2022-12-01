const { Schema, model } = require("mongoose");

const userSchema = require("./User");

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
    },
    medicalHistory: {
      type: String,
      required: true,
    },
    colour: {
      type: String,
    },
    image: {
      type: String, //find a way to upload the image file
      required: true,
    },
    comments: [commentSchema],
    dateCreated: { type: Date, default: Date.now },
    userLikes: [userSchema],
  },

  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const commentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  commentBody: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  dateCreated: { type: Date, default: Date.now },
});

petSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

module.exports = model("Pet", petSchema);
