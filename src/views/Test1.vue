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
  <div class="flex justify-center">
    <button class="bg-blue-600 font-semibold text-white py-2 px-4 rounded">
      ボタン
    </button>
  </div>

  <div class="text-center mt-10">
    <p class="text-xs">text-xs</p>
    <p class="text-sm">text-sm</p>
    <p class="text-base">text-base</p>
    <p class="text-lg">text-lg</p>
    <p class="text-xl">text-xl</p>
    <p class="text-2xl">text-2xl</p>
    <p class="text-3xl">text-3xl</p>
    <p class="text-4xl">text-4xl</p>
    <p class="text-5xl">text-5xl</p>
    <p class="text-6xl">text-6xl</p>
  </div>

  <div class="text-center mt-10">
    <p class="font-hairline">font-hairline</p>
    <p class="font-thin">font-thin</p>
    <p class="font-light">font-light</p>
    <p class="font-normal">font-normal</p>
    <p class="font-medium">font-medium</p>
    <p class="font-semibold">font-semibold</p>
    <p class="font-bold">font-bold</p>
    <p class="font-extrabold">font-extrabold</p>
    <p class="font-black">font-black</p>
  </div>

  <div class="text-center mt-10">
    <p class="text-green-100">text-green-100</p>
    <p class="text-green-200">text-green-200</p>
    <p class="text-green-300">text-green-300</p>
    <p class="text-green-400">text-green-400</p>
    <p class="text-green-500">text-green-500</p>
    <p class="text-green-600">text-green-600</p>
    <p class="text-green-700">text-green-700</p>
    <p class="text-green-800">text-green-800</p>
    <p class="text-green-900">text-green-900</p>
  </div>

  <div class="text-center mt-10">
    <button class="bg-green-400 font-semibold text-white py-2 px-4 rounded">
      ボタン
    </button>
    <button
      class="bg-pink-400 mx-4 testbtn hover:bg-pink-500 focus:outline-none focus:shadow-outline"
    >
      ボタン
    </button>
    <button
      class="bg-cyan mx-4 testbtn hover:bg-pink-500 focus:outline-none focus:shadow-outline"
    >
      ボタン
    </button>
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
