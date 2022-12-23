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
import MyComponent from "./components/MyComponent";
import Banner from "./components/Banner";
import SharedBanner from "./components/SharedBanner";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => {
    return {
      configuration: {
        path: `${window.location.pathname}${window.location.search}`,
        endpoint: 'https://sandbox-sales02.bloomreach.io/delivery/site/v1/channels/getting-started/pages',
        httpClient: axios,
      },
      mapping: {Content, MyComponent, Banner, SharedBanner}
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
