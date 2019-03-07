<template>
  <div id="app">
    <img alt="Vue logo" :width="value*20" :height="value*20" src="./assets/logo.png">
    <h1>{{value}} cm</h1>
    <h1> this is a text </h1>
    <div id="green">
       <button v-on:click="changeGreen">Switch</button>
    </div>

    <div id="yellow">
       <button v-on:click="changeYellow">Switch</button>
    </div>

    <div id="red">
       <button v-on:click="changeRed">Switch</button>
    </div>
   
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
