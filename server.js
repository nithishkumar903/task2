const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// MongoDB Connection
mongoose.connect('mongodb+srv://nithish79930:lHbd4ZpP6x8Js1XC@cluster0.ijvftzk.mongodb.net/money?retryWrites=true&w=majority', {
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
