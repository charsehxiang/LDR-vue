import Vue from 'vue'
import App from './App.vue'
import index from '../src/styles/main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
