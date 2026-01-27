import "./assets/main.css";
import { Icon } from "@iconify/vue";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).component("Icon", Icon).mount("#app");
