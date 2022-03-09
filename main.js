//Our main entry point for our application all it does is it imports vue and imports our app from the file called App.vue.
//so it says we wanna create an app and mount it and render its ID within index.html so it just serves as an entry point.
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
