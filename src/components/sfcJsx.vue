<!-- <template>
  <div>test</div>
</template> -->
<script>
export default {
  data() {
    return {
      msg: "i am sfc jsx",
    };
  },
  created() {
    setTimeout(() => {
      this.msg = "i am sfc jsxxxx";
    }, 1000);
  },
  render() {
    return <h1>{this.msg}</h1>;
  },
};
</script>
