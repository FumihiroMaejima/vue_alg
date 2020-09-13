import { CompareFunc } from '@/types/util'

export type DoubleLinkedListConst = CompareFunc

export type DoubleLinkedListCallBack = (value: any) => {}

export type DoubleLinkedListFindParam = {
  value: any
  callback: DoubleLinkedListCallBack
}
