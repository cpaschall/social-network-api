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
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length
});

const User = model('User', userSchema);

module.exports = User;