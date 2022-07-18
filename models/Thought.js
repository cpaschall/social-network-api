const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now,
        },
        text: {
            type: String,
            minLength: 15,
            maxLength: 500,
        },
        username: {
            type: String,
            required: true
        },
        responses: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Response'
            },
        ]
    },
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought; 
