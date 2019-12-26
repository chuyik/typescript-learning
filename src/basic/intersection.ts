function extend<T, U>(first: T, second: U): T & U {
  const result = <T & U>{}
  for (let id in first) {
    ;(<T>result)[id] = first[id]
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      ;(<U>result)[id] = second[id]
    }
  }

  return result
}

const obj = extend({ a: "hello" }, { b: 42 })

// 现在 x 拥有了 a 属性与 b 属性
const a = obj.a
const b = obj.b
