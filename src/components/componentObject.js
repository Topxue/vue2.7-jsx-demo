export default {
  data() {
    return {
      msg: "hello",
    };
  },
  created() {
    setTimeout(() => {
      this.msg = "hello world";
    }, 1000);
  },
  render() {
    return <h1>{this.msg}</h1>;
  },
};
