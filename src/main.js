import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import router from "./router";
import App from "./App.vue";

createApp(App)
  .use(router)
  .mount("#app");
