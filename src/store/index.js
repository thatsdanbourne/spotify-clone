import Vuex from 'vuex';
import auth from './auth';
import playlists from './playlists';
import user from './user';

const store = Vuex.createStore({
    modules: {
        auth,
        playlists,
        user
    },
    devtools: true
});

export default store;