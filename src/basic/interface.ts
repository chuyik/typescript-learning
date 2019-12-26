interface Name {
  first: string
  second: string
}

let myname: Name
myname = {
  first: "John",
  second: "Doe"
}

// --------------------------- //
// --------------------------- //
// --------------------------- //

interface Math {
  randomId(): void
}

Math.randomId = () =>
  Math.random()
    .toString(36)
    .substring(2)

// console.log(Math.randomId())
