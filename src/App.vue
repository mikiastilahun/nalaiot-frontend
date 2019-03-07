<template  lang="html">
  <div id="app">
    <img src="https://cdn.dribbble.com/users/2284868/screenshots/5033094/maui_sticker.png" :width="value*50" :value="height*30">
    <br>
    <v-btn large fab color="green" 
        @click="green = !green">
      <v-icon color="white" v-if="!green">brightness_1</v-icon>
      <v-icon color="white" v-if="green">wb_incandescent</v-icon>
    </v-btn>

    <v-btn  large fab color="yellow"  
        @click="yellow = !yellow">
      <v-icon color="white" v-if="!yellow">brightness_1</v-icon>
      <v-icon color="white" v-if="yellow">wb_incandescent</v-icon>
    </v-btn>

    <v-btn  large fab color="red" 
        @click="red = !red">
      <v-icon color="white" v-if="!red">brightness_1</v-icon>
      <v-icon color="white" v-if="red">wb_incandescent</v-icon>
    </v-btn>
    <br>


  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data: () => ({
    green: false,
    yellow: false,
    red: false,
    value: 0
  }),
  components: {
    HelloWorld
  },
  methods: {
    up() {
      this.value++;
    },
    down() {
      this.value--;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
