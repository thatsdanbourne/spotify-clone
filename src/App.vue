<template>
  <!-- <div class="container">
    <div class="nav-main-container">
      <sidebar />
      <main-body />
    </div>
    <play-bar />
  </div> -->
  <router-view />
</template>

<script>
// import Sidebar from "./components/Sidebar.vue";
// import MainBody from "./components/MainBody.vue";
// import PlayBar from "./components/PlayBar.vue";

export default {
  name: "App",
  // components: {
  //   Sidebar,
  //   MainBody,
  //   PlayBar
  // },
};
</script>

<style>
@import "./css/app.css";
</style>