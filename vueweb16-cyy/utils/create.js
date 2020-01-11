import Vue from 'vue'
import Notice from "@/components/Notice";

function create(component,props) {
    const vm = new Vue({
        render: h=> h(component,{props})
    }).$mount()
    document.body.appendChild(vm.$el)
    const comp = vm.$children[0]

    comp.remove = function() {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return comp
}
export default {
    install(Vue) {
        Vue.prototype.$notice = function(options) {
            return create(Notice,options)
        }
    }
}