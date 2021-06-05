<template>
    <div class="playlist-container">
        <img class="playlist-image" :src="imageUrl" alt="playlist image">
        <h3 class="playlist-name"> {{ name }}</h3>
        <p class="playlist-desc" v-html="description"></p>
    </div>
</template>

<script>
export default {
    props: ['playlistID', 'name', 'description', 'imageUrl'],
    setup() {
        
    }
}
</script>

<style scoped>
@import "../css/playlist-panel.css";
</style>
