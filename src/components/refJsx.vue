<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    setTimeout(() => {
      count.value = 12;
    }, 1000);
    return {
      count,
    };
  },
  render(h) {
    return <h1>{this.count ? <span>11</span> : <span>22</span>}</h1>;
  },
};
</script>
