const router = require('express').Router();
const { model } = require('mongoose');
const { createFriend } = require('../../controllers/friendController');

router.route('/').post(createFriend);

module.exports = router;