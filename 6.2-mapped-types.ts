type Props = 'prop1' | 'prop2' | 'prop3'
const a: Props = 'prop1'

type MappedProperties = {
  [P in Props]: P
}

type MappedProperties2<T> = {
  readonly [P in keyof T]-?: T[P];
}

type a = MappedProperties2<{a?: 'a1', b: 'b1'}>
const w: a = {a: null, b: 'b1'}


type ApiResponse<T> = {
  data: {
    [key: string]: T
    pagination: number
  }
  errors: string[]
}

let a: ApiResponse<number> = { data: {ADD: 1, pagination: 100}}

