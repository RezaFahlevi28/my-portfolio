import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const ProjectDetail = () => import("@/views/ProjectDetail.vue");
const ProjectsView = () => import("@/views/ProjectsView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/projects/:slug",
    name: "project-detail",
    component: ProjectDetail,
    props: true,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
