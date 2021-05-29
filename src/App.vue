<script lang="tsx">
import { defineComponent } from "vue";
import MainMenu from "@/components/MainMenu.vue"; // @ is an alias to /src

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div id="main" class="container">
        <div id="main-menu-area">
          <MainMenu />
        </div>
        <div id="router-view-area">
          <router-view />
        </div>
      </div>
    )
  }
});
</script>
<style scoped>
.container {
  display: flex;
}
#main-menu-area {
  width: 20vh;
  height: 100vh;
}
#router-view-area {
  width: 80vh;
  height: 100vh;
}
</style>