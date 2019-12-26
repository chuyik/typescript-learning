interface Length {
  length?: number
}

function size<T extends Length>(arg: T): number {
  return arg.length
}

size([])

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
