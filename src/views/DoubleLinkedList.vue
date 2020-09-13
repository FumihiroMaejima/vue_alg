<template>
  <div class="container mx-auto">
    <h1>双方向リストアルゴリズム描画</h1>

    <h2>computed配列</h2>
    <ul v-for="(item, key) in arr3" :key="key">
      <li>{{ item }}</li>
    </ul>

    <div>
      <h2
        class="sticky top-0 z-10 block px-4 py-2 bg-green-400 text-white rounded"
      >
        カード
        <button
          class="mx-2  px-2 bg-orange-500 font-semibold text-white rounded hover:bg-orange-400 border-b-2 border-orange-700 hover:border-orange-500 focus:outline-none custom-buttom"
          @click="onApend"
        >
          apend
        </button>
        <button
          class="mx-2  px-2 bg-orange-500 font-semibold text-white rounded hover:bg-orange-400 border-b-2 border-orange-700 hover:border-orange-500 focus:outline-none custom-buttom"
          @click="onPrepend"
        >
          prepend
        </button>
        <button
          class="mx-2  px-2 bg-orange-500 font-semibold text-white rounded hover:bg-orange-400 border-b-2 border-orange-700 hover:border-orange-500 focus:outline-none custom-buttom"
          @click="onDelete"
        >
          delete
        </button>
        <button
          class="mx-2  px-2 bg-orange-500 font-semibold text-white rounded hover:bg-orange-400 border-b-2 border-orange-700 hover:border-orange-500 focus:outline-none custom-buttom"
          @click="onReverse"
        >
          reverse
        </button>
      </h2>
      <div class="flex my-4">
        <div class="flex-1 bg-gray-100"></div>
        <div class="flex-1 bg-gray-100">
          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">カードヘッダー</div>
              <p class="text-gray-700 text-base">
                カードコンテンツ カードコンテンツ カードコンテンツ
                カードコンテンツ カードコンテンツ
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span
                v-for="(item, key) in arr4"
                :key="key"
                class="static inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {{ item.value }}
                <span
                  class="absolute bottom-10 right-20 bg-orange-400 w-8 rounded-full py-1 px-4 flex items-center justify-center"
                >
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="flex-1 bg-gray-100"></div>
      </div>
    </div>

    <div>
      <h2
        class="sticky top-0 z-10 block px-4 py-2 bg-green-400 text-white rounded"
      >
        双方向リンクリスト
      </h2>
      <ul class="mx-6" v-for="(item, key) in arr4" :key="key">
        <li
          class="relative my-1 bg-blue-400 border-solid border-2 border-gray-600 rounded h-8 w-8 flex items-center justify-center text-white"
        >
          {{ item.value }}
          <span
            class="absolute bottom-0 left-0 bg-orange-400 rounded-full py-1 px-4 flex items-center justify-center"
          >
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import LinkedListPlugin from '@/plugins/dataStructures/doubleLinkedList/DoubleLinkedList.ts'

@Options({
  components: {
    // HelloWorld
  }
})
export default class DoubleLinkedList extends Vue {
  // data
  private arr1 = [1, 2, 3]
  private arr2 = [4, 5, 6]
  private listPlugin: LinkedListPlugin | null = null

  // computed
  public get arr3(): number[] {
    return this.arr1.concat(this.arr2)
  }

  public get arr4(): any {
    if (this.listPlugin) {
      return this.listPlugin.toArray()
    } else {
      return []
    }
  }

  // created
  created() {
    // プラグインの初期化
    this.listPlugin = new LinkedListPlugin(
      this.linkedListFunc(this.arr1, this.arr2)
    )

    // 配列の格納
    for (let i = 0; i <= 100; i++) {
      this.listPlugin.append(i)
    }

    // 配列化
    this.listPlugin.toArray()
    console.log('toArray: ' + this.listPlugin.toArray())

    // リストからの検索
    const test = this.listPlugin.find({
      value: 1,
      callback: this.linkedListCallback(55)
    })
    // リストからの検索結果
    console.log('created: ' + test)
  }

  // methods
  linkedListFunc(param1: any, param2: any): any {
    console.log('doubleLinkedListFunc: ' + param1 + '_' + param2)
  }

  linkedListCallback(value: any): any {
    console.log('doubleLinkedListCallback: ' + value)
  }

  onApend(): void {
    if (this.listPlugin) {
      const index = this.listPlugin.toArray().length
      this.listPlugin.append(index)
    }
  }

  onPrepend(): void {
    if (this.listPlugin) {
      const index = this.listPlugin.toArray().length
      this.listPlugin.prepend(index)
    }
  }

  onDelete(): void {
    if (this.listPlugin) {
      const index = this.listPlugin.toArray().length
      this.listPlugin.delete(index - 1)
    }
  }

  onReverse(): void {
    if (this.listPlugin) {
      this.listPlugin.reverse()
    }
  }
}
</script>
<style lang="scss" scoped>
.custom-buttom {
  &:active {
    border-bottom: solid 2px #fd9535;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }
}
</style>
