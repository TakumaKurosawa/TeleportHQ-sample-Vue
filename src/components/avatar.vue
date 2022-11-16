<template>
  <div class="avatar-container">
    <img :alt="avatar_alt" :src="avatar_src" class="avatar-avatar" />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    avatar_alt: {
      type: String,
      default: 'avatar1346',
    },
    avatar_src: {
      type: String,
      default: '/playground_assets/avatar1346-a6rml-200h.png',
    },
  },
}
</script>

<style scoped>
.avatar-container {
  display: flex;
  position: relative;
}
.avatar-avatar {
  width: 110px;
  height: 110px;
  position: relative;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 2px;
  margin-right: 32px;
}
</style>
