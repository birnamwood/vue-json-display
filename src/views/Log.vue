<script lang="tsx">
import { defineComponent, ref } from "vue";
import FilePicker from "@/components/log/FilePicker.vue"; // @ is an alias to /src
import LogView from "@/components/log/LogView.vue";

export default defineComponent({
  setup() {
    const message = ref("logです");
    return () => (
      <div class="log">
        <h1>{message.value}</h1>
        <FilePicker />
        <br />
        <LogView />
      </div>
    );
  },
});
</script>
