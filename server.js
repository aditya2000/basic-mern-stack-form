const express = require('express');
const bodyParser = require('body-parser'); // body parser is used for reading data sent through the post request
const mongoose = require('mongoose'); // ORM for interacting with database (MongoDB)


const formData = require('./routes/api/formData');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Using Routes
// This means that every request to /api/formData will be directed to formData 
app.use('/api/formData', formData);

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server started on port ${port}`))