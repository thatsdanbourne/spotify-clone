<template>
  <div class="login">
    <img src="../assets/logos/01_RGB/02_PNG/Spotify_Logo_RGB_White.png" />
    <button @click="getSpotifyAuth">Login With Spotify</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import router from "../router";

export default {
  name: "Login",

  setup() {
    const store = useStore();

    const setAccessToken = (access_token) => store.dispatch("auth/setAccessToken", access_token);
    const setRefreshToken = (refresh_token) => store.dispatch("auth/setRefreshToken", refresh_token);

    const data = window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
      }, {});

    if (data.error) {
      console.log(data.error);
    } else if (data.access_token) {
      setAccessToken(data.access_token);
      router.push("/");
    }

    const getSpotifyAuth = () => {
      store.dispatch("auth/login");
    };

    return {
      setAccessToken,
      setRefreshToken,
      getSpotifyAuth
    };
  },
  // methods: {
  //   ...mapActions("auth", ["setAccessToken", "setRefreshToken"]),
  //   getSpotifyAuth() {
  //     store.dispatch("auth/login");
  //   },
  // },
  // created() {
  //   const data = window.location.hash
  //     .substring(1)
  //     .split("&")
  //     .reduce((initial, item) => {
  //       let parts = item.split("=");
  //       initial[parts[0]] = decodeURIComponent(parts[1]);

  //       return initial;
  //     }, {});

  //   if (data.error) {
  //     console.log(data.error);
  //   } else if (data.access_token) {
  //     this.setAccessToken(data.access_token);
  //     router.push("/");
  //   }
  // },
};
</script>

<style>
@import "./../css/login.css";
</style>
