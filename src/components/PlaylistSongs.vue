<template>
  <div class="playlist-songs-container">
    <ul class="song-list">
      <li class="song-item" v-for="t in tracks.items" :key="t.track.id">{{ t.track.name }}</li>
    </ul>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const tracks = ref([]);

    const getTracksForPlaylist = () =>
      store.dispatch("playlists/getTracksForPlaylist", route.params.playlistID);

    const getTracks = () => {
      try {
        getTracksForPlaylist().then((r) => {
          tracks.value = r.data;
        });
      } catch (e) {
        console.log(e);
      }
    };

    getTracks();
    return {
      tracks,
      getTracksForPlaylist,
      getTracks,
    };
  },
};
</script>

<style scoped>
@import "../css/playlist-songs.css";
</style>

