<template>
  <div class="container mx-auto">
    <h1>アルゴリズム描画</h1>

    <h2>computed配列</h2>
    <ul v-for="(item, key) in arr3" :key="key">
      <li>{{ item }}</li>
    </ul>

    <div>
      <h2
        class="sticky top-0 z-10 block px-4 py-2 bg-green-400 text-white rounded"
      >
        リンクリスト
      </h2>
      <ul class="mx-6" v-for="(item, key) in arr4" :key="key">
        <li
          class="relative my-1 bg-blue-400 border-solid border-2 border-gray-600 rounded h-8 w-8 flex items-center justify-center text-white"
        >
          {{ item.value }}
          <span
            class="absolute bottom-0 right-0 bg-orange-400 rounded-full h-2 w-2 flex items-center justify-center"
          >
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import LinkedListPlugin from '@/plugins/dataStructures/linkedList/LinkedList.ts'

@Options({
  components: {
    // HelloWorld
  }
})
export default class LinkedList extends Vue {
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

    this.listPlugin.prepend(55)
    this.listPlugin.append(100)

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
    console.log('linkedListFunc: ' + param1 + '_' + param2)
  }

  linkedListCallback(value: any): any {
    console.log('linkedListCallback: ' + value)
  }
}
</script>
