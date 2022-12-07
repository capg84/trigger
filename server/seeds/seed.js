const db = require('../config/connection');
const { User, Pet, Message } = require('../models');

const userData = require('./userData.json');
const petData = require('./petData.json');

db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Pet.deleteMany({});
  await Message.deleteMany({});

  // bulk create each model
  const users = await User.create(userData);
  const pets = await Pet.create(petData);

  for (newPet of pets) {
    // randomly add each pet to a user liked pets
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.likedPets.push(newPet._id);
    await tempUser.save();

    // reference user liked pets on pet model
    newPet.userLikes.push(tempUser._id);
    await newPet.save();

    // randomly add a user to each pet
    const tempuser = users[Math.floor(Math.random() * users.length)];
    newPet.owner = tempuser._id;
    await newPet.save();

    // reference Pet on user model, too
    tempuser.userPets.push(newPet._id);
    await tempuser.save();
  }

  console.log('all done!');
  process.exit(0);
});
