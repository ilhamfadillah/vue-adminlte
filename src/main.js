// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/** Import Javascript */
import '@/assets/js/jquery-ui.min.js'
import '@/assets/js/adminlte.min.js'

/** Import CSS */
import '@/assets/css/all.min.css'
import '@/assets/css/tempusdominus-bootstrap-4.min.css'
import '@/assets/css/adminlte.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
