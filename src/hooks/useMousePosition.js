import { ref, onMounted } from "vue";
function useMousePosition(initX = 13, initY = 13) {
  const x = ref(initX);
  const y = ref(initY);
  onMounted(() => {
    document.addEventListener("mousemove", function (e) {
      x.value = e.pageX;
      y.value = e.pageY;
    });
  });
  return { x, y };
}
export default useMousePosition;
