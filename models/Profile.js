const mongoose = require('mongoose');

// Create a Profile model that includes Username and email, array of thoughts and Uder's friend list.
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, require: true }
});

const friendListSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true }
});

const profileSchema = new mongoose.Schema({
    user: userSchema,
    friends: [friendListSchema]
});

const Profile = mongoose.model('Profile', profileSchema);

// const handleError = (err) => console.error(err);

const userData = { username: 'hobbz', email: 'hobbz12@email.com' };
const userFriendData = [
    { username: "bobloblaw", email:"bll@email.com" },
    { username: "biggieSmalls", email:"bigNsmall@email.com" },
];

Profile.create(
    { user: userData, friends: userFriendData },
    (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
    }
);

module.exports = Profile;