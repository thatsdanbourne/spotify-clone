<template>
  <div class="sidebar">
    <img src="../assets/logos/01_RGB/02_PNG/Spotify_Logo_RGB_White.png" />
    <div class="buttons-container">
      <button class="active">
        <i class="fas fa-home"></i>
        <span>Home</span>
      </button>
      <button>
        <i class="fas fa-search"></i>
        <span>Search</span>
      </button>
      <button>
        <i class="fas fa-cubes"></i>
        <span>Your Library</span>
      </button>
    </div>
    <div class="playlists">
      <span>Playlists</span>
      <div class="create-playlist-liked-songs">
        <button class="playlists-button">
          <div class="square-button-add">
            <i class="fas fa-plus"></i>
          </div>
          Create Playlist
        </button>
        <button class="playlists-button">
          <div class="square-button-liked">
            <i class="fas fa-heart"></i>
          </div>
          Liked Songs
        </button>
      </div>
    </div>
    <div class="user-playlists">
      <ul>
        <li v-for="(playlist, index) in playlists.items" :key="index">
          <a href="#">{{ playlist.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "sidebar",

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
  }

  // data() {
  //   return {
  //     playlists: [],
  //   };
  // },
  // methods: {
  //   ...mapActions("playlists", ["getCurrentUserPlaylists"]),
  //   async getPlaylists() {
  //     try {
  //       this.getCurrentUserPlaylists().then((r) => {
  //         this.playlists = r.data;
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   },
  // },
  // created() {
  //   this.getPlaylists();
  // },
};
</script>

<style scoped>
@import "../css/sidebar.css";
</style>
