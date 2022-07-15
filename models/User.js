const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, require: true }
});

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

User.create(
    {
        username: 'user1',
        email: 'user1@email.com'
    },
    (err) => (err ? handleError(err) : console.log('Created new document'))
);

module.exports = User;