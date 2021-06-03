<template>
  <div class="main-body">
    <div class="top-bar">
      <div class="back-forward-buttons">
        <button><i class="fas fa-chevron-left"></i></button>
        <button><i class="fas fa-chevron-right"></i></button>
      </div>
      <div v-if="currentUser" class="user-widget">
        <img :src="currentUser.images[0].url" alt="">
        <div>{{ currentUser.display_name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "main-body",
  data() {
    return {
      currentUser: null,
    };
  },
  methods: {
    ...mapActions("user", ["getCurrentUser"]),
    getUser() {
      this.getCurrentUser().then((r) => {
        this.currentUser = r.data;
      });
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style scoped>
@import "../css/main-body.css";
</style>