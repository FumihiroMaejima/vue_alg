import { CompareFunc } from '@/types/util'

export type LinkedListConst = CompareFunc

export type LinkedListCallBack = (value: any) => {}

export type LinkedListFindParam = {
  value: any
  callback: LinkedListCallBack
}
