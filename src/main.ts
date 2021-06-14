import { Person } from './entities'
import { PersonStatusTypes } from './enums'

const person = new Person('Flavio', '123', PersonStatusTypes.ATIVO)
person.status = PersonStatusTypes.INATIVO

console.log(person.show())
