const { ObjectId } = require('mongodb');
const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
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

// const Reaction = model('Reaction', reactionSchema);

// module.exports = Reaction;
module.exports = reactionSchema;