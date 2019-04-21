const express = require('express');
const router = express.Router();
const auth = require('../../routes/middleware/auth');

// Form Data Model
const FormData = require('../../models/formData');

// @route GET api/formData
// @desc Get all data
router.get('/', (req, res) => {
    FormData.find()
        .then(items => res.json(items))
});

// @route POST api/formData
// @desc Post all data
router.post('/', auth, (req, res) => {
    const newData = new FormData({
        name: req.body.name,
        age: req.body.age
    });

    newData.save()
    .then(data => res.json(data));
});


module.exports = router;