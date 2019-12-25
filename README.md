## TypeScript 从入门到精通

# 主要目标

- TypeScript 使用入门
- 介绍 TypeScript 普通类型
- 介绍 TypeScript 高级类型
- 介绍 TypeScript 泛型的用法

# 介绍

1. TypeScript 具有类型系统，是 JavaScript 的超集
2. 业界有很多项目用 TypeScript 开发，包括：

- Web 框架：angular / mobx
- UI：ant-design / Grafana
- 游戏框架：Babylon.js / egret
- 服务器框架：nest.js / deno / typeorm
- App 框架：ionic / NativeScript
- IDE: VSCode

3. IDE 对 TypeScript 支持很友好，包括智能提示和依赖自动导入
4. 支持类型校验、枚举、泛型、注解、接口

# 使用入门

## Hello World

1. 安装依赖

```bash
yarn add typescript ts-node
```

2. 创建以下文件：

- index.ts
- tsconfig.json

3. 测试运行

```bash
npx ts-node index.ts
```

4. 编译成 JavaScript

```bash
tsc index.ts
```

# 基本类型

## 原始类型

```ts
const num: number = 123
function identity(num: number): number {
  return num
}
```

## 数组

```ts
let boolArray: boolean[]
```

## 接口

```ts
interface Name {
  first: string
  second: string
}

let name: Name
name = {
  first: "John",
  second: "Doe"
}
```

接口变量可以通过重复声明来扩展

```ts
interface Point {
  x: number
  y: number
}

interface Point {
  z: number
}

let myPoint: Point = {
  x: 1,
  y: 2,
  z: 3
}

console.log(myPoint.z)
```

## 特殊类型

any

any 类型在 TypeScript 类型系统中占有特殊的地位。它提供给你一个类型系统的「后门」,TypeScript 将会把类型检查关闭。在类型系统里 any 能够兼容所有的类型（包括它自己）。因此，所有类型都能被赋值给它，它也能被赋值给其他任何类型。

void

```ts
function log(message: string): void {
  console.log(message)
}
```

泛型

```ts
function reverse<T>(items: T[]): T[] {
  const toreturn = []
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i])
  }
  return toreturn
}

const sample = [1, 2, 3]
let reversed = reverse(sample)

console.log(reversed) // 3, 2, 1

// Safety
reversed[0] = "1" // Error
reversed = ["1", "2"] // Error

reversed[0] = 1 // ok
reversed = [1, 2] // ok
```

## 联合类型

```ts
function formatCommandline(command: string[] | string) {
  let line = ""
  if (typeof command === "string") {
    line = command.trim()
  } else {
    line = command.join(" ").trim()
  }

  // Do stuff with line: string
}
```

```ts
var myType: string[] | string | number | boolean
//myType类型可以是字符串数组、字符串、数字、布尔值
myType = "type"
myType = ["a", "b", "c"]
myType = 100
myType = false

//不可以是其他类型
myType = function() {} //报错
```

## 交叉类型

在 JavaScript 中， extend 是一种非常常见的模式，在这种模式中，你可以从两个对象中创建一个新对象，新对象会拥有着两个对象所有的功能。交叉类型可以让你安全的使用此种模式：

```ts
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

const x = extend({ a: "hello" }, { b: 42 })

// 现在 x 拥有了 a 属性与 b 属性
const a = x.a
const b = x.b
```

## 元祖类型

JavaScript 并没有支持类似于元组的支持。开发者通常只能使用数组来表示元组，但是 TypeScript 类型系统支持它。使用 :[typeofmember1, typeofmember2] 能够为元组添加类型注解，元组可以包含任意数量的成员，以下例子演示了元组：

```ts
let nameNumber: [string, number]

// Ok
nameNumber = ["Jenny", 221345]

// Error
nameNumber = ["Jenny", "221345"]

// 将其与 TypeScript 中的解构一起使用：
let nameNumber: [string, number]
nameNumber = ["Jenny", 322134]

const [name, num] = nameNumber
```

## 类型别名

TypeScript 提供使用类型注解的便捷语法，你可以使用 type SomeName = someValidTypeAnnotation 的语法来创建别名：

```ts
type StrOrNum = string | number

// 使用
let sample: StrOrNum
sample = 123
sample = "123"

// 会检查类型
sample = true // Error
```

与接口不同，你可以为任意的类型注解提供类型别名（在联合类型和交叉类型中比较实用），下面是一些能让你熟悉语法的示例。

```ts
type Text = string | { text: string }
type Coordinates = [number, number]
type Callback = (data: string) => void
```

## 类型守护

类型守护是一种错误提示机制。
JavaScript 一个常用的方式就是使用 typeof 或者 instanceof 来在运行时检查一个表达式的类型。TypeScript 现在可在 if 区域块中理解这种情况。

```ts
var x: any = {}
if (typeof x === "string") {
  console.log(x.splice(3, 1)) //提示错误信息
}
```

## 命名空间

```ts
namespace Utility {
  export function log(msg) {
    console.log(msg)
  }
  export function error(msg) {
    console.log(msg)
  }
}

// usage
Utility.log("Call me")
Utility.error("maybe")
```

namespace 关键字通过 TypeScript 编译后，与我们看到的 JavaScript 代码一样：

```js
;(function(Utility) {
  // 添加属性至 Utility
})((Utility || Utility = {}))
```

# 高级类型

## in 可以遍历枚举类型

```ts
type Keys = "a" | "b"
type Obj = { [p in Keys]: any } // -> { a: any, b: any }
```

## infer

在条件类型语句中, 可以用 infer 声明一个类型变量并且对它进行使用，
我们可以用它获取函数的返回类型， 源码如下：

```ts
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any
```

其实这里的 infer R 就是声明一个变量来承载传入函数签名的返回值类型, 简单说就是用它取到函数返回值的类型方便之后使用。

## 捕获变量的类型 typeof

你可以通过 typeof 关键字告诉编译器，某变量的类型与其他类型相同，如下所示：

```ts
let foo = 123
let bar: typeof foo // 'bar' 类型与 'foo' 类型相同（在这里是： 'number'）

bar = 456 // ok
bar = "789" // Error: 'string' 不能分配给 'number' 类型
```

## 捕获类成员的类型

与捕获变量的类型相似，你仅仅是需要声明一个变量用来捕获到的类型：

```ts
class Foo {
  foo: number // 我们想要捕获的类型
}

declare let _foo: Foo

// 与之前做法相同
let bar: typeof _foo.foo
```

## 捕获键的名称

keyof 操作符能让你捕获一个类型的键。例如，你可以使用它来捕获变量的键名称，在通过使用 typeof 来获取类型之后：

```ts
const colors = {
  red: "red",
  blue: "blue"
}

type Colors = keyof typeof colors

let color: Colors // color 的类型是 'red' | 'blue'
color = "red" // ok
color = "blue" // ok
color = "anythingElse" // Error
```
