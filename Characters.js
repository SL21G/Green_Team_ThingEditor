const express = require('express');
const router = express.Router();
const Character = Require('./Character');
//the browser makes a get request to the endpoint and when it made the request our server went into the router and performes a async request and tries to find anything that matches our character description.

router.get('/', async (req, res,) => {
     try{
        //when we run the async function is run that it will it will try find the const characters and awaits the mongoose scheema and we want to send a json response of those character and await any errors that may araise.
       const characters = await Character.find();
       res.json(characters);
       //The Famous catch block ive just tried for the first time ever 
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.post('/', async (req, res,) => {
    const character = new Character({
        name: req.body.name,
        professions: req.body.professions
    });
    try { 
        //basically says save the character to the database
        const newCharacter = await character.save();
        // This is our Post Method
        // basicaly makes a new character and responds with 201 if not error 400
        res.status(201).json(newCharacter);
    }   catch (err) {
        res.status(400).json({message: err});
    }
})

 module.exports = router;
 //basically just ports over the server directory.
 // all of our routing is here.
