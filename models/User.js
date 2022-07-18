const { Schema, model} = require('mongoose');

// Create a Profile model that includes Username and email, array of thoughts and Uder's friend list.
const userSchema = new Schema(
    {
        username: { type: String, trim: true, required: true, unique: true },
        email: { 
            type: String, 
            require: true,  
            match: /.+\@.+\..+/,
            unique: true
        },
        thoughts: [
            { 
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Friend'
            }
        ]
    }
);

// const friendListSchema = new Schema({
//     username: { type: String, required: true },
//     email: { type: String, required: true }
// });

// const profileSchema = new Schema({
//     user: userSchema,
//     friends: [friendListSchema]
// });

// const Profile = model('Profile', profileSchema);

// // const handleError = (err) => console.error(err);

// const userData = { username: 'hobbz', email: 'hobbz12@email.com', thoughts: ["hello there", "I was just thinking..."] };
// const userFriendData = [
//     { username: "bobloblaw", email:"bll@email.com" },
//     { username: "biggieSmalls", email:"bigNsmall@email.com" },
// ];

// Profile.create(
//     { user: userData, friends: userFriendData },
//     (err, data) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log(data);
//     }
// );

const User = model('User', userSchema);

module.exports = User;