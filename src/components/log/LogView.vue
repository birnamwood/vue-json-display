<script lang="tsx">
import { defineComponent } from "vue";
import { useStore } from "@/store/state";

export default defineComponent({
  setup() {
    const store = useStore();

    return () => (
      <div class="log-view">
        {store.state.json &&
          store.state.json.map((j: string) => {
            return (
              <span>
                {j}
                <br />
              </span>
            );
          })}
      </div>
    );
  },
});
</script>

<style scoped lang="scss">
.log-view {
  width: 100%;
}
</style>
