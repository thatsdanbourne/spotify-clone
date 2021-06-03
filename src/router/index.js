import { createRouter, createWebHistory } from 'vue-router';
import store from './../store';

import Login from '../views/login.vue';
import Home from '../views/home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login",
            name: 'Login',
            component: Login
        }, {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (!store.getters["auth/getAccessToken"] && to.name !== "Login") {
        next('/login');
    }

    next();
});

export default router;