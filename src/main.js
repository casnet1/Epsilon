import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

import VueSweetalert2 from 'vue-sweetalert2';
 

 


//import 'sweetalert2/src/sweetalert2.scss'
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.config.productionTip = false

Vue.use(VueSweetalert2);
Vue.use(Chartkick.use(Chart))
Vue.use(VueRouter);


const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
