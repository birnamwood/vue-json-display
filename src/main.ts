import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store/state";

createApp(App).use(router).use(store, key).use(vuetify).mount("#app");
