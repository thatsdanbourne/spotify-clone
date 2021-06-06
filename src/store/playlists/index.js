import axios from 'axios';

export default {
    namespaced: true,
    state: {
        playlists: []
    },
    getters: {
        getPlaylists: state => state.playlists
    },
    mutations: {
        SET_PLAYLISTS(state, playlists){
            state.playlists = playlists;
        }
    },
    actions: {
        async getCurrentUserPlaylists({commit, rootGetters}) {
            return new Promise((resolve, reject) => {
                axios.get(
                    `https://api.spotify.com/v1/me/playlists`,
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
                    commit('SET_PLAYLISTS', r.data);
                    resolve(r);
                })
                .catch(err => {
                    reject(err);
                });
            });
        },
        async getTracksForPlaylist({rootGetters}, playlistID) {
            return new Promise((resolve, reject) => {
                axios.get(
                    `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
                    {
                        headers: {
                            Authorization: `Bearer ${rootGetters['auth/getAccessToken']}`
                        },
                    }
                ).then(r => {
                    resolve(r);
                })
                .catch(err => {
                    reject(err);
                })
            })
        }
    }
}