<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';

import { store } from './data/store'

export default {
  nome: "App.vue",
  components: {
    PageHeader,
    PageMain,
    PageFooter
  },
  data() {
    return {
      store
    }

  },
  methods: {

  },
  mounted() {

  }
}
</script>

<template>
  <PageHeader />
  <PageMain />
  <PageFooter />
</template>

<style scoped lang="scss">
@use './styles/generic.scss' as *;
</style>
