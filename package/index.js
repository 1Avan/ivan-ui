//导入整个包的入口

import ivanButton from './button.vue'
import ivanDialog from './dialog.vue'
import ivanInput from './input.vue'

const components = [
    ivanButton,
    ivanDialog,
    ivanInput
]
const install = (Vue)=>{
    //全局注册所有组件
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}
if(typeof window != 'undefined' && window.Vue){
    install(window.Vue)
}

export default{
    install
}

