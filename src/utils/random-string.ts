export function limitRandom(max, min) {
  return Math.random() * (max - min) + min
}

export default function (length: number = 8): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const seedLength = alphabet.length
  let resultStr = ''

  for (let i = 0; i < length; i++) {
    resultStr += alphabet[Math.floor(limitRandom(seedLength, 0))]
  }

  return resultStr
}
