<script lang="tsx">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  setup() {
    let result = ref([]);

    const loadFile = (event: Event) => {
      let file = event.target.files[0];
      if (!file.type.match("json")) {
        alert("Jsonファイルを選択してください");
        return;
      }
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = onLoad;
      return;
    };
    const onLoad = (event: Event) => {
      // let obj = JSON.parse(event.target.result);
      // result.value = obj.toString();
      result.value = JSON.stringify(event.target.result);
      console.log(result.value);
    };
    return () => (
      <div class="file-picker">
        <input type="file" onChange={loadFile} />
        <br />
        <span>{result.value}</span>
      </div>
    );
  },
});
</script>