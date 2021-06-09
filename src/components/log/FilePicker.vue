<script lang="tsx">
import { defineComponent } from "vue";
import { useStore } from "@/store/state";

export default defineComponent({
  setup() {
    // let json = reactive({
    //   data: [],
    // });
    const store = useStore();

    const loadFile = (event: Event) => {
      if (event.target == null) {
        return;
      }
      const input: HTMLInputElement = event.target as HTMLInputElement;
      if (!input.files?.length) {
        return;
      }
      let file: File = input.files[0];

      if (!file.type.match("json")) {
        alert("Jsonファイルを選択してください");
        return;
      }
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        let j: string = JSON.stringify(reader.result);
        let jh: string = JSON.parse(j);
        store.state.json = jh.split("\n");
      };
      return;
    };

    return () => (
      <div class="file-picker">
        <input type="file" onChange={loadFile} />
      </div>
    );
  },
});
</script>
