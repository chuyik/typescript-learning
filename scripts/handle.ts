async function createPerson (options: object): Promise<IPerson> {
  const person = {
    name: 'Tom',
    age: 1,
    ...options,
  }

  console.log('person: ', person)

  return person
}

createPerson({
  name: 'Tom'
})
