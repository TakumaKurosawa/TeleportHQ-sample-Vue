<template>
  <div class="datascontainer-datascontainer">
    <div class="datascontainer-jobcontainer">
      <span class="datascontainer-text helvetica-24Regular">
        <span>Overlay</span>
      </span>
      <img :alt="divider_alt" :src="divider_src" class="datascontainer-divider" />
      <span class="datascontainer-text2 helvetica-24Regular">
        <span>Designer</span>
      </span>
    </div>
    <span class="datascontainer-text4 helvetica-32Bold">
      <span>Mary Meyer</span>
    </span>
    <span class="datascontainer-text6 helvetica-24Regular">
      <span>2 years</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Datascontainer',
  props: {
    divider_alt: {
      type: String,
      default: 'divider1346',
    },
    divider_src: {
      type: String,
      default: '/playground_assets/divider1346-j0fd-200w.png',
    },
  },
}
</script>

<style scoped>
.datascontainer-datascontainer {
  width: 308px;
  display: flex;
  position: relative;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
}
.datascontainer-jobcontainer {
  width: 220px;
  display: flex;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  margin-bottom: 2px;
}
.datascontainer-text {
  color: rgba(0, 0, 0, 1);
  height: auto;
  align-self: auto;
  text-align: left;
  line-height: 30px;
  margin-right: 16px;
  margin-bottom: 0;
}
.datascontainer-divider {
  width: 8px;
  height: 8px;
  position: relative;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  margin-right: 16px;
}
.datascontainer-text2 {
  color: rgba(255, 255, 255, 1);
  height: auto;
  align-self: auto;
  text-align: left;
  line-height: 30px;
  margin-right: 0;
  margin-bottom: 0;
}
.datascontainer-text4 {
  color: var(--dl-color-default-textwhite);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: normal;
  margin-right: 0;
  margin-bottom: 2px;
}
.datascontainer-text6 {
  color: rgba(0, 0, 0, 1);
  height: auto;
  align-self: stretch;
  text-align: left;
  line-height: 30px;
  margin-right: 0;
  margin-bottom: 0;
}
@media(max-width: 479px) {
  .datascontainer-datascontainer {
    width: auto;
  }
}
</style>
