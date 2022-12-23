<template>
  <div style="background-color: grey; color: white; padding: 10px; position: relative">
    <br-manage-content-button :content="document" />
    <h2>{{ content.title }}</h2>
    <div v-html="content.text.value"></div>
    <img :src="imageSrc"/>
    <p><a :href=link>{{content.ctalabel}}</a></p>
  </div>
</template>
<script>
export default {
  computed: {
    document() {
      return this.page?.getContent(this.component.getProperties()?.document);
    },
    content() {
      return this.document?.getData();
    },
    imageSrc() {
      return this.page?.getContent(this.content.image)?.getOriginal()?.getUrl();
    },
    link() {
      return this.page?.getContent(this.content.ctalink)?.getUrl();
    },
  },
  props: ['component', 'page']
}
</script>