const express = require('express');
const mongoose = require('mongoose'); // ORM for interacting with database (MongoDB)
const config = require('config');

const formData = require('./routes/api/formData');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const app = express();

// BodyParser Middleware
app.use(express.json());

// DB config
const db = config.get('mongoURI');

// Connect to MongoDB
mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Using Routes
// This means that every request to /api/formData will be directed to formData 
app.use('/api/formData', formData);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server started on port ${port}`))