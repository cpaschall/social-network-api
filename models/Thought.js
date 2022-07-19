const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

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
        // reactions: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Reaction'
        //     },
        // ]
        reactions: [Reaction],
    },
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought; 
