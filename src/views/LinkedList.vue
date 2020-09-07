<template>
  <div class="container mx-auto">
    <h1>アルゴリズム描画</h1>
    <p>アルゴリズム描画</p>

    <h2>配列1</h2>
    <ul v-for="(item, key) in arr1" :key="key">
      <li>{{ item }}</li>
    </ul>

    <h2>配列2</h2>
    <ul v-for="(item, key) in arr2" :key="key">
      <li>{{ item }}</li>
    </ul>

    <h2>computed配列</h2>
    <ul v-for="(item, key) in arr3" :key="key">
      <li>{{ item }}</li>
    </ul>

    <h2>プラグイン配列</h2>
    <ul v-for="(item, key) in arr4" :key="key">
      <li>{{ item.value }}</li>
    </ul>
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
    for (let i = 0; i < this.arr1.length; i++) {
      this.listPlugin.append(this.arr1[i])
    }
    // 配列化
    this.listPlugin.toArray()
    console.log('toArray: ' + this.listPlugin.toArray())

    const test = this.listPlugin.find({
      value: 1,
      callback: this.linkedListCallback(55)
    })
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
