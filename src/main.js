import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import GSignInButton from 'vue-google-signin-button'
import router from './router'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VueAxios, axios)

Vue.use(GSignInButton)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
