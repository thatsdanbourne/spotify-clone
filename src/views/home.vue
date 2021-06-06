<template>
  <div class="container">
    <div class="nav-main-container">
      <sidebar :playlists="playlists" />
      <div class="main-view-container">
        <top-bar />
        <router-view :playlists="playlists"/>
        <!-- <main-body :playlists="playlists" /> -->
      </div>
    </div>
    <play-bar />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import topBar from "../components/Header";
import sidebar from "../components/Sidebar";
import playBar from "../components/PlayBar";

export default {
  components: {
    topBar,
    sidebar,
    playBar,
  },

  setup() {
    const store = useStore();

    const playlists = ref([]);
    const getCurrentUserPlaylists = () =>
      store.dispatch("playlists/getCurrentUserPlaylists");
    const getPlaylists = () => {
      try {
        getCurrentUserPlaylists().then((r) => {
          playlists.value = r.data;
        });
      } catch (e) {
        console.log(e);
      }
    };

    getPlaylists();
    return {
      playlists,
      getCurrentUserPlaylists,
      getPlaylists,
    };
  },
};
</script>
