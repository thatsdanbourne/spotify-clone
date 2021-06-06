<template>
  <div class="main-body">
    <div class="playlist-grid">
      <playlist-panel v-for="p in playlists.items" :key="p.id" :playlistID="p.id" :name="p.name" :description="p.description" :imageUrl="p.images[0].url" :owner="p.owner.display_name"/>
      <!-- <playlist-panel :id="playlists.items[0].id" :name="playlists.items[0].name" :description="playlists.items[0].description" :imageUrl="playlists.items[0].images[0].url"/> -->
    </div>
  </div>
</template>

<script>
import PlaylistPanel from '../components/PlaylistPanel';

export default {
  name: "main-body",
  props: ["playlists"],
  components: {
    PlaylistPanel
  },
};
</script>

<style scoped>
@import "../css/main-body.css";
</style>