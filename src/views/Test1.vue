<template>
  <div class="flex justify-center">
    <h1>This is an test1 page</h1>
    <p>test1</p>
    <p>test2</p>
    <p>test3</p>
    <p>test4</p>
    <p>test5</p>
    <p>test6</p>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
  <div class="flex justify-center">
    <p>test21</p>
    <p>test22</p>
    <p>test23</p>
    <p>test24</p>
    <p>test25</p>
    <p>test26</p>
  </div>
  <div class="flex flex-col sm:flex-row">
    <div>col or row 1</div>
    <div>col or row 2</div>
  </div>
  <div class="flex justify-center">
    <!-- xs:text-* と sm:text-* が共存される -->
    <button class="text-sm xs:text-base sm:text-sm">Button1</button>
    <button class="font-bold py-2 px-4 rounded">Button2</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    // HelloWorld
  }
})
export default class Test1 extends Vue {}
</script>
