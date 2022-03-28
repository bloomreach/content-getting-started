<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br-page :configuration="configuration" :mapping="mapping">
      <main>
        <br-component component="main"/>
      </main>
    </br-page>
  </div>
</template>

<script>
import axios from "axios";
import Content from "./components/Content";
import MyComponent from "./components/MyComponent";

export default {
  name: 'App',
  components: {
  },
  data: () => {
    return {
      configuration: {
        path: `${window.location.pathname}${window.location.search}`,
        endpoint: 'https://trial-vquwseqc.bloomreach.io/delivery/site/v1/channels/getting-started/pages',
        httpClient: axios,
      },
      mapping: {Content, MyComponent}
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
