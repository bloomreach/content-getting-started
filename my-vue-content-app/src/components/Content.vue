<template>
  <div>
    <div>
      <h1>{{ document.title }}</h1>
      <p>{{ document.introduction }}</p>
      <div v-if="document.content" v-html="page.rewriteLinks(page.sanitize(document.content.value))"/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    document() {
      return this.page.getDocument().getData();
    },
  },
  props: ['component', 'page']
}

</script>