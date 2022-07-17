// const { ObjectId } = require('mongoose').Types;
const User = require('../models/User');

module.exports = {
    // get all users
    getUsers(req, res) {
        User.find()
        .populate('thoughts')
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    // get one user
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId })
        // .populate('thoughts')
        .select('-__v')
        .populate('thoughts')
        .then((user) => 
        !user 
        ? res.status(404).json({ message: 'No user with that ID' }) 
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },
};