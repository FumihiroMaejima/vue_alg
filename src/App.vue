<template>
  <section>
    <global-header />
    <router-view />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import GlobalHeader from '@/components/_global/GlobalHeader.vue'

@Options({
  components: {
    GlobalHeader
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
