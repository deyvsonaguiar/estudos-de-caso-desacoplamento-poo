
export class Funcionario {
  nome: string
  id: number
  email: Email

  constructor(nome: string, id: number, email: string) {
    this.nome = nome
    this.id = id
    this.email = new Email(email)
  }

  iniciarJornada() {
    //TODO - método a ser implementado
  }

  concluirJornada() {
    //TODO - método a ser implementado
  }
}


export class Email {
  private _value: string
  
  constructor(email: string) {
    this._value = email
  }

  getValue() {
    return this._value
  }

  toString() {
    return this._value
  }

  atualizarEmail(novoEmail: string) {
    this.validarEmail(novoEmail)
    this._value = novoEmail
  }

  validarEmail(email: string) {
    if(email.length === 0) throw new Error('E-mail não pode estar vazio')
    if(!email.includes('@')) throw new Error('E-mail inválido')
  }

}