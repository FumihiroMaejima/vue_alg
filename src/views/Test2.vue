<template>
  <div class="bg-blue-500 lg:bg-green-500">
    <header class="container mx-auto text-white">
      <div class="flex justify-between items-center">
        <h1 class="text-4xl font-semibold md:text-xl">Header</h1>
        <div class="md:hidden">
          <button>
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <ul class="md:flex md:justify-center">
          <li class="border-b md:border-none">
            <a href="#" class="block px-8 py-2 hover:bg-blue-600 rounded">
              test項目1
            </a>
          </li>
          <li class="border-b md:border-none">
            <a href="#" class="block px-8 py-2 hover:bg-blue-600 rounded">
              test項目2
            </a>
          </li>
          <li class="border-b md:border-none">
            <a href="#" class="block px-8 py-2 hover:bg-blue-600 rounded">
              test項目3
            </a>
          </li>
          <li class="border-b md:border-none">
            <a href="#" class="block px-8 py-2 hover:bg-blue-600 rounded">
              test項目4
            </a>
          </li>
          <li class="border-b md:border-none">
            <div class="ml-4 my-2">
              <a
                href="#"
                class="px-4 py-2 bg-orange-500 hover:bg-orange-400 rounded-full"
              >
                test項目5
              </a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
    // HelloWorld
  }
})
export default class Test2 extends Vue {}
</script>
