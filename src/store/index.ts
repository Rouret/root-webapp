import { createStore } from "vuex";
import authStore from "./modules/auth/auth.module";
import VuexPersistence from "vuex-persist";
import osStore from "./modules/os/os.module";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ["authStore"],
});

export default createStore({
  modules: {
    authStore,
    osStore,
  },
  plugins: [vuexLocal.plugin],
});
