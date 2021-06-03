<template>
  <div class="container">
    <div class="nav-main-container">
      <sidebar />
      <main-body />
    </div>
    <play-bar />
  </div>
</template>

<script>
import sidebar from '../components/Sidebar';
import mainBody from '../components/MainBody';
import playBar from '../components/PlayBar';
export default {
    components: {
        sidebar,
        mainBody,
        playBar
    }
}
</script>