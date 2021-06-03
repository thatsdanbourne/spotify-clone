import axios from 'axios';

export default {
    namespaced: true,
    state: {
        currentUser: null
    },
    getters: {
        getCurrentUser: state => state.currentUser
    },
    mutations: {
        SET_CURRENT_USER(state, user){
            state.currentUser = user;
        }
    },
    actions: {
        getCurrentUser({ commit, rootGetters }){
            return new Promise((resolve, reject) => {
                axios.get(
                    `https://api.spotify.com/v1/me`,
                    {
                        headers: {
                            Authorization: `Bearer ${rootGetters['auth/getAccessToken']}`
                        },
                        params: {
                            limit: 50,
                            offset: 0
                        }
                    }
                )
                .then(r => {
                    commit('SET_CURRENT_USER', r.data);
                    resolve(r);
                })
                .catch(err => {
                    reject(err);
                });
            });
        }
    }
}