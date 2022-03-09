//HTML AND STYLE here
//button is creating a button with text 
// it basically connects these two files by basically saying hey from app.vue im gonna pass you to whats called a props which is the message im sending to you which is welcome to your view.js application.
<template>
  <div id="app">
    <button v-on:click="toggle='thing-viewer'; getCharacters()">View all characters</button>
    <button v-on:click="toggle='thing-creator'">Create a character</button>
    //refrencing the component
    <ThingViewer v-show="toggle==='thing-viewer'" !characters="characters"/>
    <ThingCreator v-show="toggle==='thing-creator'"/>
  </div>
</template>

//this is where we define our logic and components for our web application.
<script>
import ThingViewer from './components/ThingViewer.vue'
import ThingCreator from "./components/ThingCreator.vue"
import axios from "axios"

export default {
  name: 'App',
  components: {
      ThingViewer,
      ThingCreator
  },
  //creating a function called data which will return and object.
  //is anything that needs to be stored thats local to the app which needs to be used at some point.
  data: function() {
      return {
          toggle:"thing-viewer",
          characters: null
      }    
  },
  methods: {
      getCharacters: function () {
          axios
              .get('https://localhost:3000/characters')
              .then(response => (this.characters = response.data))
      }
  },
  mounted: function () {
      this.getCharacters();
  }
}
</script>

//this is just where we put the CSS for our web application
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
