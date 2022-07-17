import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./views/HomePage.vue";
import AboutMe from "./views/AboutMe.vue";
import SkillsList from "./views/SkillsList.vue";
import ExperienceList from "./views/ExperienceList.vue";
import CertificatesList from "./views/CertificatesList.vue";
import ProjectsList from "./views/ProjectsList.vue";

import SampleProject from "./views/projects/SampleProject.vue";
import UserAuth from "./views/projects/UserAuth.vue";
import CartList from "./views/projects/CartList.vue";
import ProductList from "./views/projects/ProductList.vue";
import ShopAdmin from "./views/projects/ShopAdmin.vue";

import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: HomePage,
    },
    {
      path: "/about",
      component: AboutMe,
    },
    {
      path: "/experience",
      component: ExperienceList,
    },
    {
      path: "/skills",
      component: SkillsList,
    },
    {
      path: "/certificates",
      component: CertificatesList,
    },
    {
      path: "/projects",
      component: ProjectsList,
    },
    {
      path: "/projects/SampleProject",
      component: SampleProject,
      children: [
        {
          path: "",
          component: ProductList,
        },
        {
          path: "auth",
          name: "auth",
          meta: { requiresUnauth: true },
          component: UserAuth,
        },
        {
          path: "cart",
          name: "cart",
          meta: { requiresAuth: true },
          component: CartList,
        },
        {
          path: "admin",
          name: "admin",
          meta: { requiresAuth: true },
          component: ShopAdmin,
        },
      ],
    },
  ],
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({name: 'auth'});
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next({name: 'products'});
  } else {
    next();
  }
});

export default router;
