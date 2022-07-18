const { Friend, User } = require('../models');

module.exports = {
    createFriend(req, res) {
        Friend.create(req.body)
        .then((friend) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { friends: friend._id } },
                { new: true }
            );
        })
        .then((user) => 
        !user
        ? res
            .status(404)
            .json({ message: 'Friend created but no user found with that ID' })
        : res.json('added Friend to friend list')
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
};