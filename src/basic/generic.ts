/**
 * 获取数组的第一个元素
 */
function shift<T>(arr: T[]): T {
  return arr[0]
}

shift(["1", "2"]) // 返回值类型是 string
shift([1, 2]) // 返回值类型是 number
shift([1, "2"]) // 返回值类型是 string | number

// --------------------------- //
// --------------------------- //
// --------------------------- //

function reverse<T>(items: T[]): T[] {
  const ret = []
  for (let i = items.length - 1; i >= 0; i--) {
    ret.push(items[i])
  }
  return ret
}

const sample = [1, 2, 3]
let reversed = reverse(sample)
