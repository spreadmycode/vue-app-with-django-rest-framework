<template>
  <div id="app">
    <Tweet />
  </div>
</template>

<script>
import Tweet from "./components/Tweet.vue";

export default {
  name: "App",
  components: {
    Tweet,
  },
};
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
