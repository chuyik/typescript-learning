declare const JParticles: object

declare function globalFn(param: string): string

declare namespace jQuery {
  const version: number
  function ajax(options: object): any
}

interface IPerson {
  name: string
  age: number
  sex?: 'male' | 'female'
}

interface IObjectAny {
  [key: string]: any
}

type GlobalType = 0 | 1 | 2

