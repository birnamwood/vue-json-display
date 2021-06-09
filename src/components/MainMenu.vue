<script lang="tsx">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const title = ref("MyTools");
    return () => (
      <div id="main-menu">
        <div id="main-menu-title">
          <router-link to="home">{title.value}</router-link>
        </div>
        <div id="main-menu-items">
          <router-link to="log" class="main-menu-item">
            Log
          </router-link>
          <router-link to="weather" class="main-menu-item">
            Weather
          </router-link>
          <router-link to="read-file" class="main-menu-item">
            ReadFile
          </router-link>
        </div>
      </div>
    );
  },
});
</script>
<style scoped lang="scss">
#main-menu {
  display: flex;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  padding: 1rem;
}
#main-menu-title {
  a {
    color: white;
    text-decoration: none;
    font-size: 20px;
  }
}
#main-menu-items {
  margin-left: auto;
  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
}
.main-menu-item {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
