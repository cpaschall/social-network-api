const { Schema, model } = require('mongoose');

const responseSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        text: {
            type: String,
            minLength: 15,
            maxLength: 500,
        },
    },
);

const Response = model('Response', responseSchema);

module.exports = Response;