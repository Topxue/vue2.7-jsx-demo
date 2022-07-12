import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
import router from "./router";
import vuex from "vuex";
Vue.use(vuex);
const store = new vuex.Store({
  modules: {
    a: {
      namespaced: true,
      state: {
        moduleACount: 10,
      },
      mutations: {
        changeModuleAState(state, count) {
          state.moduleACount = count;
        },
      },
    },
  },
  state: {
    count: 0,
    inputValue: "",
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.count;
    },
    updateInputValue(state, value) {
      state.inputValue = value;
    },
  },
  actions: {
    asyncIncrement(context, payload) {
      setTimeout(() => {
        context.commit("increment", {
          count: payload.count,
        });
      }, 1000);
    },
  },
});
import { provide, reactive, ref } from "vue";

new Vue({
  router,
  store,
  setup() {
    const location = ref("china");
    const geolocation = reactive({
      longitude: 90,
      latitude: 135,
    });
    provide("location", location);
    provide("geolocation", geolocation);
    setTimeout(() => {
      location.value = "zzz";
    }, 1000);
  },
  render: (h) => h(App),
}).$mount("#app");
