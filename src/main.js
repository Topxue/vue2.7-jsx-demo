import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
Vue.use(vuex)
const store = new vuex.Store({
  modules: {
    a: {
      namespaced: true,
      state: {
        moduleACount: 10
      },
      mutations: {
        changeModuleAState(state, count) {
          state.moduleACount = count
        }
      }
    }
  },
  state: {
    count: 0,
    inputValue: ''
  },
  mutations: {
    increment(state, payload) {
      state.count+=payload.count
    },
    updateInputValue(state, value) {
      state.inputValue = value
    }
  },
  actions: {
    asyncIncrement(context, payload) {
      setTimeout(() => {
        context.commit('increment', {
          count: payload.count
        })
      }, 1000);
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
