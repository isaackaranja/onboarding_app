// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import vuetify from '@/plugins/vuetify' // path to vuetify export

// new Vue({
//   vuetify,
//   render: h=>h(App)
// }).$mount('#app')

// Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   vuetify,
//   components: { App,},
//   template: '<App/>'
// })

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  components: { App,},
  template: '<App/>',
  data: () => ({
    select: ['Vuetify', 'Programming'],
    items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],
    model: ['Vuetify'],
    search: null,
  }),

  watch: {
    model (val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop())
      }
    },
  },
})
