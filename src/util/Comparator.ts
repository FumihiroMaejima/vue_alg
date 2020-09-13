import { CompareFunc, CompareParam, DefaultCompareParam } from '@/types'

export default class Comparator {
  private compare: CompareFunc

  /**
   * @param compareFunc: (value1: any, value2: any) => {}
   */
  constructor(compareFunc: CompareFunc) {
    this.compare = compareFunc || Comparator.defaultCompareFunc
  }

  /**
   * Default compare function
   * @param value1: string | number
   * @param value2: string | number
   * @returns number
   */
  static defaultCompareFunc(
    value1: DefaultCompareParam['param1'],
    value2: DefaultCompareParam['param2']
  ) {
    if (value1 === value2) {
      return 0
    }

    return value1 < value2 ? -1 : 1
  }

  /**
   * Checks value is equal.
   * @param value1: any
   * @param value2: any
   * @return {boolean}
   */
  equal(value1: CompareParam['param1'], value2: CompareParam['param2']) {
    return this.compare(value1, value2) === 0
  }

  /**
   * Checks whether value1 is less than value2.
   * @param value1: any
   * @param value2: any
   * @return {boolean}
   */
  lessThan(value1: CompareParam['param1'], value2: CompareParam['param2']) {
    return this.compare(value1, value2) < 0
  }

  /**
   * Checks whether value1 is greater than value2.
   * @param value1: any
   * @param value2: any
   * @return {boolean}
   */
  greaterThan(value1: CompareParam['param1'], value2: CompareParam['param2']) {
    return this.compare(value1, value2) > 0
  }

  /**
   * Checks whether value1 is less than or equal to value2.
   * @param value1: any
   * @param value2: any
   * @return {boolean}
   */
  lessThanOrEqual(
    value1: CompareParam['param1'],
    value2: CompareParam['param2']
  ) {
    return this.lessThan(value1, value2) || this.equal(value1, value2)
  }

  /**
   * Checks if variable "a" is greater than or equal to "b".
   * @param value1: any
   * @param value2: any
   * @return {boolean}
   */
  greaterThanOrEqual(
    value1: CompareParam['param1'],
    value2: CompareParam['param2']
  ) {
    return this.greaterThan(value1, value2) || this.equal(value1, value2)
  }

  /**
   * Reverses the comparison order.
   */
  reverse() {
    const compareOriginal = this.compare
    this.compare = (value1, value2) => compareOriginal(value2, value1)
  }
}
