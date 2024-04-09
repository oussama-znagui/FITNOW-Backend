import { createRouter, createWebHashHistory } from "vue-router";
import AddProgress from "../components/AddProgress.vue";
import ProgressList from "../components/ProgressList.vue";
import RegisterCompo from "../components/Auth/RegisterCompo.vue";
import LoginCompo from "../components/Auth/LoginCompo.vue";


const routes = [
  {
    name: "ProgressList",
    path: "/progress_list",
    component: ProgressList,
  },
  {
    name: "AddProgress",
    path: "/add_progress",
    component: AddProgress,
  },
  {
    name: "RegisterCompo",
    path: "/Register",
    component: RegisterCompo,
  },
  {
    name: "LoginCompo",
    path: "/Login",
    component: LoginCompo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
