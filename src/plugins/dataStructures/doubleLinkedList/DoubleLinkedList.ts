import DoubleLinkedListNode from './DoubleLinkedListNode'
import Comparator from '@/util/Comparator'
import {
  DoubleLinkedListConst,
  DoubleLinkedListCallBack,
  DoubleLinkedListFindParam
} from '@/types'

/* 中身は未実装 */

export default class DoubleLinkedList {
  private head: DoubleLinkedListNode | null
  private tail: DoubleLinkedListNode | null
  private compare: Comparator

  /**
   * @param func: DoubleLinkedListConst
   */
  constructor(func: DoubleLinkedListConst) {
    this.head = null
    this.tail = null

    this.compare = new Comparator(func)
  }

  /**
   * @param value: any
   * @return DoubleLinkedList
   */
  prepend(value: any) {
    // Make new node to be a head.
    const newNode = new DoubleLinkedListNode(value, this.head)

    if (this.head) {
      this.head.previous = newNode
    }
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  /**
   * @param value: any
   * @return DoubleLinkedList
   */
  append(value: any) {
    const newNode = new DoubleLinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    // Attach new node to the end of linked list.
    if (this.tail !== null) {
      this.tail.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
    }

    return this
  }

  /**
   * @param value: any
   * @return DoubleLinkedListNode
   */
  delete(value: any) {
    if (!this.head) {
      return null
    }

    let deletedNode = null
    let currentNode = this.head

    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deletedNode = currentNode

        if (deletedNode === this.head) {
          this.head = deletedNode.next

          if (this.head) {
            this.head.previous = null
          }
          if (deletedNode === this.tail) {
            this.tail = null
          }
        } else if (deletedNode === this.tail) {
          this.tail = deletedNode.previous
          if (this.tail !== null) {
            this.tail.next = null
          }
        } else {
          const previousNode = deletedNode.previous
          const nextNode = deletedNode.next

          previousNode.next = nextNode
          nextNode.previous = previousNode
        }
      }
      currentNode = currentNode.next
    }
    return deletedNode
  }

  /**
   * @param params: object
   * @param params.value: any
   * @param params.callback: function
   * @return DoubleLinkedListNode
   */
  find(params: DoubleLinkedListFindParam) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head

    while (currentNode) {
      // If callback is specified then try to find node by callback.
      if (params.callback && params.callback(currentNode.value)) {
        return currentNode
      }

      // If value is specified then try to compare by value..
      if (
        params.value !== undefined &&
        this.compare.equal(currentNode.value, params.value)
      ) {
        return currentNode
      }

      currentNode = currentNode.next
    }
    return null
  }

  /**
   * @return DoubleLinkedListNode
   */
  deleteTail() {
    if (!this.tail) {
      return null
    }
    const deletedTail = this.tail

    if (this.head === this.tail) {
      // There is only one node in linked list.
      this.head = null
      this.tail = null

      return deletedTail
    }

    if (this.tail.previous !== null) {
      this.tail = this.tail.previous
      if (this.tail !== null) {
        this.tail.next = null
      }
    }

    return deletedTail
  }

  /**
   * @return DoubleLinkedListNode
   */
  deleteHead() {
    if (!this.head) {
      return null
    }

    const deletedHead = this.head

    if (this.head.next !== null) {
      this.head = this.head.next
      if (this.head !== null) {
        this.head.previous = null
      }
    } else {
      this.head = null
      this.tail = null
    }

    return deletedHead
  }

  /**
   * @param values: any[]
   * @return DoubleLinkedList
   */
  fromArray(values: any[]) {
    values.forEach((value) => this.append(value))

    return this
  }

  /**
   * @return DoubleLinkedListNode[]
   */
  toArray() {
    const nodes = []

    let currentNode = this.head
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  /**
   * @param callback: function
   * @return string
   */
  toString(callback: DoubleLinkedListCallBack) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString()
  }

  /**
   * @returns DoubleLinkedList
   */
  reverse() {
    let currNode = this.head
    let prevNode = null
    let nextNode = null

    while (currNode) {
      // Store next node.
      nextNode = currNode.next
      prevNode = currNode.previous

      currNode.next = prevNode
      currNode.previous = nextNode

      prevNode = currNode
      currNode = nextNode
    }

    this.tail = this.head
    this.head = prevNode

    return this
  }
}
