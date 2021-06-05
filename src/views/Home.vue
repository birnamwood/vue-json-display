<script lang="tsx">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const message = ref("homeです");
    return () => (
      <div id="home">
        <h1>{message.value}</h1>
      </div>
    );
  },
});
</script>
