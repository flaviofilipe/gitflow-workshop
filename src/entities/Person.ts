import { PersonStatusTypes } from '../enums'

type PersonShow = {
  name: string
  cpf: string
  status: PersonStatusTypes
}

export class Person {
  private readonly _name: string
  private readonly _cpf: string
  private _status: PersonStatusTypes

  constructor(name: string, cpf: string, status: PersonStatusTypes) {
    this._name = name
    this._cpf = cpf
    this._status = status
  }

  show(): PersonShow {
    return {
      name: this.name,
      cpf: this.cpf,
      status: this.status
    }
  }

  set status(status: PersonStatusTypes) {
    this._status = status
  }

  get name(): string {
    return this._name
  }

  get cpf(): string {
    return this._cpf
  }

  get status(): PersonStatusTypes {
    return this._status
  }
}
