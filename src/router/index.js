import { createRouter, createWebHistory } from 'vue-router';
import store from './../store';

import Login from '../views/login.vue';
import Home from '../views/home.vue';
import Playlists from '../components/MainBody.vue';
import PlaylistSongs from '../components/PlaylistSongs.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login",
            name: 'Login',
            component: Login
        }, 
        {
            path: '/',
            redirect: '/home/playlists'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: 'playlists',
                    component: Playlists,
                    props: {
                        playlists: Array
                    }
                },
                {
                    path: 'playlists/:playlistID',
                    name: 'playlistSongs',
                    component: PlaylistSongs
                }
            ]
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