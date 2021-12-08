<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br-page :configuration="configuration" :mapping="mapping">
      <main>
        <br-component component="main"/>
      </main>
    </br-page>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";
import Content from "./components/Content";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => {
    return {
      configuration: {
        endpoint: 'https://kenan.bloomreach.io/delivery/site/v1/channels/getting-started/pages',
        httpClient: axios,
      },
      mapping: {'Content': Content}
    };
  }
}
</script>

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
