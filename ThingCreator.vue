// this recieves the message props but it dosent know what the message is but expects it to be a string by being in qoutes or braces.
//frontend part of our code
<template>
  <div class="Thing-Creator">
    <h1>Thing Creator</h1>
    <label for="character-name">Character Name: </label>
    <input type="text" id="character-name" v-model="name" placeholder="Enter a name" /><br /><br />
    //allows people to create a class in a drop down list for their characters.
    <label for="professions-list">Character Professions: </label>
    <select id="professions-list" v-model="professions">
      <option value="cowboy">Cowboy</option>
      <option value="Greeny">Greeny</option>
      <option value="SpikeTooth">SpikeTooth</option>
      <option value="Bird">Bird</option>
      <option value="Animathe">Animathe</option>
      <option value="Samurai">Samurai</option>
      <option value="B3MaskGuy">B3MaskGuy</option>
      <option value="OranageBoomBoom">OranageBoomBoom</option>
    </select><br /><br />
    <button v-on:click="postCharacter">Create Character</button>
  </div>
</template>

<script>
import axios from "axios";


//adding a data function which returns an object again which enables players to create a character name.
export default {
  //in our router were creating a new character based on the moongose scheema and where in its body is a name and profession and making a post request and sending a post request and providing a name and profession that are both null.
  name: 'ThingCreator',
  data: function () {
      return {
          name: null,
          Professions: null
      }
  },
  methods: {
    postCharacter: function () {
      axios
          .post('http://localhost:3000/characters', {
              name: this.name,
              professions: this.professions
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
