import { LinkedListNodeConst, LinkedListNodeCallBack } from '@/types'
export default class LinkedListNode {
  public value: any
  public next: any | null

  /**
   * @param value: any
   * @param next: any | null default:null
   */
  constructor(value: LinkedListNodeConst['value'], next: any | null = null) {
    this.value = value
    this.next = next
  }

  /**
   * @param callback: LinkedListNodeCallBack
   * @return LinkedListNodeCallBack | LinkedListNodeConst["value"]
   */
  toString(callback: LinkedListNodeCallBack) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
