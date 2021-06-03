const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientID = '056ace41c7644fd89433bf63f50558c3';
const redirectUri = "http://localhost:8080/login";
const scopes = [
    'user-read-private',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-library-read',
    'user-read-currently-playing',
];

export default {
    namespaced: true,
    state: {
        accessToken: "",
        refreshToken: ""
    },
    mutations: {
        SET_ACCESS_TOKEN(state, token) {
            state.accessToken = token;
        },
        SET_REFRESH_TOKEN(state, token) {
            state.refreshToken = token;
        }
    },
    actions: {
        login(){
            window.location.href = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`;       
        },
        setAccessToken({commit}, token) {
            commit('SET_ACCESS_TOKEN', token);
        },
        setRefreshToken({commit}, token) {
            commit('SET_REFRESH_TOKEN', token);
        }
    },
    getters: {
        getAccessToken: state => state.accessToken,
        getRefeshToken: state => state.refreshToken
    }

}