<template>
  <div>
    <componentObject />
    <sfcJsx />
    <jsxComponent />
  </div>
</template>
<script>
import componentObject from "./../components/componentObject.js";
import sfcJsx from "./../components/sfcJsx.vue";
import jsxComponent from "./../components/refJsx.vue";

export default {
  components: {
    jsxComponent,
    sfcJsx,
    componentObject,
  },
};
</script>
