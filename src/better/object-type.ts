/**
 * 示例 A
 */
interface IOptionsA {
  suffix: string
  purchaseAt: () => boolean
}

function myPackageA(options: IOptionsA) {
  options.purchaseAt()
  return 'OK'
}

myPackageA({
  suffix: 'mySuffix',
  purchaseAt(): boolean {
    return true
  }
})

/**
 * 示例 B，期望
 */
/*
interface IOptionsB {
  suffix: string
  [key: string]: () => boolean
}

function myPackageB(options: IOptionsB) {
  options.purchaseAt()
  return 'OK'
}

myPackageB({
  suffix: 'suffix',
  purchaseAt() {
    return true
  },
  boughtAt() {
    return true
  }
})
*/

/**
 * 示例 B, 真实写法
 */
interface IOptionsC {
  suffix: string
  [key: string]: Function | string
  // [key: string]: unknown
  // [key: string]: any
}

function myPackageC(options: IOptionsC) {
  (options.purchaseAt as Function)()

  if (typeof options.boughtAt === 'function') {
    options.boughtAt()
  }

  return 'OK'
}

myPackageC({
  suffix: 'suffix',
  purchaseAt() {
    return true
  },
  boughtAt() {
    return true
  }
})
