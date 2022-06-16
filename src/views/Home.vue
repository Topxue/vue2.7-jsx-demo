<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>{{ count }}</h1>
    <h1 @click="$store.commit('a/changeModuleAState', 100)">
      {{ $store.state.a }}
    </h1>
    <input v-model="inputValue" type="text" />
    <h1>{{ $store.state.inputValue }}</h1>
    <!-- <button @click="$store.commit('increment')">add</button> -->
    <button @click="asyncIncrement({ count: 3 })">add</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["count"]),
    inputValue: {
      get() {
        return this.$store.state.inputValue;
      },
      set(newVal) {
        this.$store.commit("updateInputValue", newVal);
      },
    },
  },
  components: {
    HelloWorld,
  },
  methods: {
    ...mapMutations(["increment"]),
    ...mapActions(["asyncIncrement"]),
    // add() {
    //   console.log(this.$store)
    //   this.$store.commit('increment', {count: 2})
    //   console.log(this.$store.state.count)
    // }
  },
};
</script>
