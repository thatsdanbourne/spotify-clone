<template>
    <div class="playlist-container">
        <img class="playlist-image" :src="imageUrl" alt="playlist image">
        <h3 class="playlist-name"> {{ name }}</h3>
        <p class="playlist-desc" v-html="descriptionText"></p>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
    props: ['playlistID', 'name', 'description', 'imageUrl', 'owner'],
    setup(props) {
        const descriptionText = ref("");
        descriptionText.value = props.description === "" ? `by ${props.owner}` : props.description

        return {
            descriptionText
        }
    }
}
</script>

<style scoped>
@import "../css/playlist-panel.css";
</style>
