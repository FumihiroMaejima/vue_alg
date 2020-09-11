import { DoubleLinkedListNodeConst, DoubleLinkedListNodeCallBack } from '@/types'

export default class DoubleLinkedListNode {
  public value: any
  public next: any | null
  public previous: any | null

  /**
   * @param value: any
   * @param next: any | null default:null
   * * @param previous: any | null default:null
   */
  constructor(
    value: DoubleLinkedListNodeConst['value'],
    next: DoubleLinkedListNodeConst['next'] = null,
    previous: DoubleLinkedListNodeConst['previous'] = null
  ) {
    this.value = value
    this.next = next
    this.previous = previous
  }

  /**
  * @param callback: DoubleLinkedListNodeCallBack
  * @return DoubleLinkedListNodeCallBack | DoubleLinkedListNodeCallBack['value']
  */
  toString(callback: DoubleLinkedListNodeCallBack) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
