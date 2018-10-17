<template>
  <div id="app">
    <comHeader></comHeader>
    <router-view/>
    <tabs v-if="isShow"></tabs>
  </div>
</template>

<script>
  import tabs from '@/components/tabs'
  import comHeader from '@/components/com-header'

  export default {
    name: 'App',
    components: {
      tabs,comHeader
    },
    computed: {
      isShow() {
        if(this.$route.name === 'index' || this.$route.name === 'notice' || this.$route.name === 'user') {
          return true
        }else {
          return false
        }
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
