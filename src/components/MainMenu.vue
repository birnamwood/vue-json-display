<script lang="tsx">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const title = ref("Menu");
    return () => (
      <div id="main-menu">
        <v-card height="100vh">
          <v-card-title class="background-blue">
            <span class="headline">{title.value}</span>
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
.background-blue {
  background-color: blue;
  color: white;
}
.menu-item {
  background-color: #eeffff;
  a {
    color: gray;
    text-decoration: none;
  }
}
</style>
