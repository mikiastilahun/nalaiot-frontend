import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from "vue-socket.io"
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";


Vue.config.productionTip = false
Vue.use(new VueSocketIO({
    debug:true,
    connection: "172.20.10.2:3001",
}))

Vue.use(Vuetify);
new Vue({
  render: h => h(App)
}).$mount("#app");
