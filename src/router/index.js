import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import GridSystem from "@/views/GridSystem.vue";
import Breakpoints from "@/views/Breakpoints.vue";
import Typography from "@/views/Typography.vue";
import Tables from "@/views/Tables.vue";
import Forms from "@/views/Forms.vue";
import Buttons from "@/views/Buttons.vue";
import Icons from "@/views/Icons.vue";
import FloatingToast from "@/views/FloatingToast.vue";

Vue.use(VueRouter)

const routes = [{
  path: "/",
  name: "Dashboard",
  component: Dashboard
}, {
  path: "/grid-system",
  name: "GridSystem",
  component: GridSystem
}, {
  path: "/breakpoints",
  name: "BreakPoints",
  component: Breakpoints
}, {
  path: "/typography",
  name: "Typography",
  component: Typography
}, {
  path: "/tables",
  name: "Tables",
  component: Tables
}, {
  path: "/forms",
  name: "Forms",
  component: Forms
}, {
  path: "/buttons",
  name: "Buttons",
  component: Buttons
}, {
  path: "/icons",
  name: "Icons",
  component: Icons
}, {
  path: "/floating-toast",
  name: "FloatingToast",
  component: FloatingToast
}]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router;
