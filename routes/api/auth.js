const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../routes/middleware/auth');


// User Data Model
const User = require('../../models/User');

// @route POST api/auth
// @desc Authenticate users
router.post('/', (req, res) => {
    const { email, password } = req.body;

    // Basic Validation
    if(!email || !password) {
        return res.status(400).json({
            msg: 'Please enter all fields'
        })
    }

    // Check for existing user
    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User does not exists'})
            
            // Validate Password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid Credential'})

                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'), 
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;

                            res.json({
                                token, 
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                })
        })
});


// @route GET api/auth/user
// @desc get user data
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
})

module.exports = router;