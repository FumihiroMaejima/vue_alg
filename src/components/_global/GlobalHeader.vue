<template>
  <div class="bg-blue-500 lg:bg-green-500">
    <header class="container mx-auto text-white">
      <div class="flex justify-between items-center">
        <h1 class="text-4xl font-semibold md:text-xl">{{ header }}</h1>
        <div class="md:hidden">
          <button @click="isOpen = !isOpen">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-show="!isOpen"
                d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
              />
              <path
                v-show="isOpen"
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="md:block">
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
import { headerName } from '@/config/index.json'

@Options({
  components: {}
})
export default class GlobalHeader extends Vue {
  // data
  private header = headerName
  private isOpen = false
}
</script>
