enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound
}

console.log(StatusCodes)
console.log()
console.log('StatusCodes.Forbidden: ', StatusCodes.Forbidden)
console.log('StatusCodes[403]: ', StatusCodes[403])

enum Grades {
  silver = 'silver',
  gold = 'gold',
  pt = 'pt',
  trial = 'trial',
}

console.log('\n', Grades)


