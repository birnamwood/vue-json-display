<script lang="tsx">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const message = ref("read-file");

    const readJson = (event: Event) => {
      console.log(event);
      var url = "http://localhost:8080/robots.txt";
      axios.get(url).then((data) => {
        console.log(data);
      });
    };
    return () => (
      <div id="read-json">
        <h1>{message.value}</h1>
        <input
          type="button"
          class="read-json-button"
          value="Read"
          onClick={readJson}
        />
      </div>
    );
  },
});
</script>
<style scoped lang="scss">
.read-json-button {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgba(0, 220, 0, 1);
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}
.styled:hover {
  background-color: rgba(0, 255, 0, 1);
}
.styled:active {
  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
    inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}
</style>
