<script lang="tsx">
import { defineComponent } from "vue";
import MainMenu from "@/components/MainMenu.vue"; // @ is an alias to /src

export default defineComponent({
  setup() {
    return () => (
      <div id="main">
        <div id="main-menu-area">
          <MainMenu />
        </div>
        <div id="router-view-area">
          <router-view />
        </div>
      </div>
    );
  },
});
</script>
<style scoped>
#main-menu-area {
  background-color: blue;
  width: 100%;
  height: 60px;
  position: fixed;
}
#router-view-area {
  padding-top: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
