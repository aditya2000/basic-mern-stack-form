/*
    Here, we have created the model for our database
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FormDataSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, 
    age: {
        type: Number,
        required: true
    }
});


module.exports = FormData = mongoose.model('formData', FormDataSchema)