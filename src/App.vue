<template  lang="html">
  <div id="app">
    <img src="https://cdn.dribbble.com/users/2284868/screenshots/5033094/maui_sticker.png" :width="value*30" :height="value*20">
    <br>
    <v-btn large fab color="green"
        v-on:click="changeGreen">
      <v-icon color="white" v-if="greenState">brightness_1</v-icon>
      <v-icon color="white" v-if="!greenState">wb_incandescent</v-icon>
    </v-btn>

    <v-btn  large fab color="yellow"  
        v-on:click="changeYellow">
      <v-icon color="white" v-if="yellowState">brightness_1</v-icon>
      <v-icon color="white" v-if="!yellowState">wb_incandescent</v-icon>
    </v-btn>

    <v-btn  large fab color="red" 
        v-on:click="changeRed">
      <v-icon color="white" v-if="redState">brightness_1</v-icon>
      <v-icon color="white" v-if="!redState">wb_incandescent</v-icon>
    </v-btn>
    <br>


  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
    data:()=>{
      return{
        value: 1,
        greenState: 1,
        yellowState: 1,
        redState: 1
      }
    },
    methods:{
      changeGreen:function(){
      this.$socket.emit("switchGreen",this.greenState)
      this.greenState = !this.greenState
      },
      changeYellow: function(){
      this.$socket.emit("switchYellow",this.yellowState)
      this.yellowState = !this.yellowState
      },
      changeRed:function(){
      this.$socket.emit("switchRed",this.redState)
      this.redState = !this.redState
      }
    },
    sockets: {
        sensorData: function (data){
            this.value = parseInt(data)
        }
    },
}
</script>

<style scoped>
#green{
  background-color: green;
  width: 50;
  margin: 20;
}
#yellow{
  background-color: yellow;
  width: 50;
  margin: 20
}
#red{
  background-color: red;
  width: 50;
  margin: 20
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
