<script lang="tsx">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const message = ref("logです");
    return () => <div class="log">{message.value}</div>;
  },
});
</script>