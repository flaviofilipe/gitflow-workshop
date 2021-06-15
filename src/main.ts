import { Person } from './entities'
import { PersonStatusTypes } from './enums'

const person = new Person('Flavio', '123', PersonStatusTypes.INATIVO)

console.log(person.show())
