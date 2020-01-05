export function limitRandom(max, min) {
  return Math.floor(Math.random() * max) - min
}

export default function (length: number = 8): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const seedLength = alphabet.length
  let resultStr = ''

  for (let i = 0; i < length; i++) {
    resultStr += alphabet[limitRandom(seedLength, 0)]
  }

  return resultStr
}
