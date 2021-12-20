<template>
  <div>
    <p>Title here below:</p>
    <h2 v-if="properties.showTitle">{{ properties.title }}</h2>
  </div>
</template>
<script>
export default {
  computed: {
    properties() {
      return this.component.getParameters();
    },
  },
  props: ['component', 'page']
}
</script>