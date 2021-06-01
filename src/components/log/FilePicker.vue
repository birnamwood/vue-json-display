<script lang="tsx">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    let json = reactive({
      data: [],
    });

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
      reader.onload = () => {
        let j = JSON.stringify(reader.result);
        let jh = JSON.parse(j);
        json.data = jh.split("\n");
      };
      return;
    };

    return () => (
      <div class="file-picker">
        <input type="file" onChange={loadFile} />
        <br />
        <div class="data-area">
          {json.data.map((j) => {
            return (
              <span>
                {j}
                <br />
              </span>
            );
          })}
        </div>
      </div>
    );
  },
});
</script>

<style scoped lang="scss">
.data-area {
  width: 100%;
}
</style>