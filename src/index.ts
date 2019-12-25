console.clear()

// import "./enum"
import "./interface"

type Exclude2<T, U> = T extends U ? never : T

// 相当于: type A = 'a'
type A = Exclude2<"x" | "a", "b" | "y" | "z">

console.log("aas!!!!!...")
