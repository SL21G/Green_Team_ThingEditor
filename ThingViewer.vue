// this recieves the message props but it dosent know what the message is but expects it to be a string by being in qoutes or braces.
<template>
  <div class="Thing-Viewer">
    <h1>Thing Viewer</h1>
    //basically says i want you to iterate over this object which is initally equal to null but when this component is mounted it runs the get characters funtion which makes an axios get request and responds and the data of the response is stored in the characters variable so for every character in this characters variable i want you to display their name and their profession.
    <p v-for="(character, index) in characters" v-bind:key="index">{{character.name}} is a {{character.profession}}</p>
    <button v-on:click="getCharacters">Refresh Characters</button>
  </div>
</template>

<script>
export default {
  name: 'ThingViewer',
  props: {
    //props should expect a array called characters.
      characters: Array
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
