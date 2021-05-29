<script lang="tsx">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  setup() {
    let json = ref("");

    const loadFile = (event: Event) => {
      if (event.target == null) {
        return;
      }
      const input = event.target as HTMLInputElement;
      if (!input.files?.length) {
          return;
      }
      let file = input.files[0];

      if (!file.type.match("json")) {
        alert("Jsonファイルを選択してください");
        return;
      }
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (event: Event) => {
        json.value = JSON.stringify(reader.result);
      };
      return;
    };
    return () => (
      <div class="file-picker">
        <input type="file" onChange={loadFile} />
        <br />
        <span>{json.value}</span>
      </div>
    );
  },
});
</script>