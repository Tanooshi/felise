import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import {ObserveVisibility} from 'vue-observe-visibility'

createApp(App).directive('observe-visibility', {
    beforeMount: (el, binding, vnode) => {
      vnode.context = binding.instance;
      ObserveVisibility.bind(el, binding, vnode);
    },
    update: ObserveVisibility.update,
    unmounted: ObserveVisibility.unbind,
  }).mount('#app')
