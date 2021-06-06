<template>
  <div class="top-bar">
      <div class="back-forward-buttons">
        <button><i class="fas fa-chevron-left"></i></button>
        <button><i class="fas fa-chevron-right"></i></button>
      </div>
      <div v-if="currentUser" class="user-widget">
        <img :src="currentUser.images[0].url" alt="" />
        <div>{{ currentUser.display_name }}</div>
      </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from '@vue/reactivity';

export default {
  setup() {
    const store = useStore();

    const currentUser = ref(null);
    const getCurrentUser = () => store.dispatch("user/getCurrentUser");
    const getUser = () => {
      getCurrentUser().then((r) => {
        currentUser.value = r.data;
      });
    };

    getUser();

    return {
      currentUser,
      getCurrentUser,
      getUser,
    };
  },
};
</script>

<style scoped>
@import "../css/header.css";
</style>
