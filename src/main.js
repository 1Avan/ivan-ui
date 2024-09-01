import Vue from 'vue'
import App from './App.vue'

import ivanButton from '@/components/button.vue'
import ivanDialog from '@/components/dialog.vue'
import ivanInput from '@/components/input.vue'

Vue.config.productionTip = false
Vue.component(ivanButton.name,ivanButton)
Vue.component(ivanDialog.name,ivanDialog)
Vue.component(ivanInput.name,ivanInput)

new Vue({
  render: h => h(App)
}).$mount('#app')
