function fail(message: string): never {
  throw new Error(message)
}

// let foo: never = 123 // 赋值会报错

let str: string = (true as never) as string

// console.log("str: ", str)
