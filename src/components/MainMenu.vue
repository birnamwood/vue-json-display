<script lang="tsx">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const title = ref("Menu");
    return () => (
      <div id="main-menu">
        <v-card height="100vh">
          <v-card-title class="menu-title">
            <router-link to="home">{title.value}</router-link>
          </v-card-title>
          <v-card-title class="menu-item">
            <router-link to="home">Home</router-link>
          </v-card-title>
          <v-card-title class="menu-item">
            <router-link to="log">Log</router-link>
          </v-card-title>
        </v-card>
      </div>
    );
  },
});
</script>
<style scoped lang="scss">
.menu-title {
  background-color: blue;
  a {
    color: white;
    text-decoration: none;
  }
}
.menu-item {
  background-color: #eeffff;
  a {
    color: gray;
    text-decoration: none;
  }
}
</style>
