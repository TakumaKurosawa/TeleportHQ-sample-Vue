<template>
  <div class="form-checkbox-form-checkbox">
    <div class="form-checkbox-assets-check-box">
      <img
        :alt="Rectangle950_alt"
        :src="Rectangle950_src"
        class="form-checkbox-rectangle950"
      />
      <img
        :alt="Lv1icondone_alt"
        :src="Lv1icondone_src"
        class="form-checkbox-lv1icondone"
      />
    </div>
    <span class="form-checkbox-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'FormCheckbox',
  props: {
    Lv1icondone_alt: {
      type: String,
      default: 'Lv1icondoneI319',
    },
    Lv1icondone_src: {
      type: String,
      default: '/playground_assets/lv1icondonei319-8v4e.svg',
    },
    Rectangle950_alt: {
      type: String,
      default: 'Rectangle950I319',
    },
    text: {
      type: String,
      default: '月',
    },
    Rectangle950_src: {
      type: String,
      default: '/playground_assets/rectangle950i319-a15f-200h.png',
    },
  },
}
</script>

<style scoped>
.form-checkbox-form-checkbox {
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: transparent;
  margin-right: 24px;
}
.form-checkbox-assets-check-box {
  width: 24px;
  height: 24px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  margin-right: 8px;
}
.form-checkbox-rectangle950 {
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  position: absolute;
  border-color: transparent;
  border-radius: 4px;
}
.form-checkbox-lv1icondone {
  top: 4px;
  left: 4px;
  width: 16px;
  height: 16px;
  position: absolute;
}
.form-checkbox-text {
  color: var(--dl-color-gray-90);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Noto Sans JP;
  font-weight: 400;
  line-height: 24px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
</style>
