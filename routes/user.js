const express = require('express');
const router = express.Router();

const User = require('../models/User');

//@route   GET /
//@desc    Get all users
//@access  Private for admin
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error('No users exist');
    res.json(users);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// @route DELETE user/:id
// @desc remove user
// @access private for admin
router.delete('/:id', async (req, res) => {
    try {
        const userWillRemove = await User.findById(req.params.id);
        if (!userWillRemove) {
            throw Error('No user found!');
        };

        const removed = await userWillRemove.remove();
        if (!removed) {
            throw Error('Error occured when removing user!');
        }

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
            success: false
        });
    }
});

module.exports = router;