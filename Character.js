//eschema middle man between database and frontend
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    //requires a name for the character in order to be mapped onto the server properly.
    //both are strings and both are required.
    name: {
    type: String,
    required: true
    },
    professions: {
        type: String,
        Require: true
    }
});

module.exports = mongoose.model('Character', characterSchema);