//basically says we need the dotenv dependacy 
//even more backend stuff and backend config
require('dotenv').config();
const express = require('express');
const server = express();
// basically says that it requires cors
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
//basically says if when the database turns on and theirs an error return it to the console for debug.
db.on('error', (error) => console.error(error));
// basically says when it turns on and connects successfully then send the message to the debug console.
db.once('open', () => console.log('connected to database!'));

//were gonna be parsing the json from the html to the client and to the server.
server.use(express.json());
//basically says the server requires cors
server.use(cors());

// basically says whenever someone navigates to the localhost 3000/characters URL we want to use the characters file to determine what happens.
const router = require('./characters');
server.use('/characters', router);

//basically says to the server hey you listen on port 3000 and respond with a messages that says Server Started.
server.listen(3000, () => console.log("Server Started!"));