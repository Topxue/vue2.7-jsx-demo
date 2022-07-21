<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const count = ref(0);
    const refH1 = ref(null);
    onMounted(() => {
      console.log(refH1.value);
      refH1.value.value = "hello world";
    });
    setTimeout(() => {
      count.value = 12;
    }, 1000);
    return () => (
      <div>
        <h1>{count ? <span>11</span> : <span>22</span>}</h1>
        <input ref={refH1} type="text"></input>
      </div>
    );
  },
};
</script>
