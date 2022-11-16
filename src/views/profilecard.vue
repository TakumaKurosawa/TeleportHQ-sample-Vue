<template>
  <div class="profilecard-container">
    <div class="profilecard-profilecard">
      <app-avatar></app-avatar>
      <app-datascontainer></app-datascontainer>
    </div>
  </div>
</template>

<script>
import AppAvatar from '../components/avatar'
import AppDatascontainer from '../components/datascontainer'

export default {
  name: 'Profilecard',
  components: {
    AppAvatar,
    AppDatascontainer,
  },
  metaInfo: {
    title: 'exported project',
  },
}
</script>

<style scoped>
.profilecard-container {
  min-height: 100vh;
}
.profilecard-profilecard {
  width: 100%;
  height: auto;
  display: flex;
  padding: 24px 40px;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 16px;
  background-color: var(--dl-color-default-blue);
}
@media(max-width: 479px) {
  .profilecard-profilecard {
    width: 479px;
  }
}
</style>
