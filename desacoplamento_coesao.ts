
//criação de interface para quem precisar utilizar a classe e-mail
export interface IEmail {
  email: string

  atualizarEmail(email: string): void
}
export class Funcionario {
  nome: string
  id: number
  email: IEmail

  constructor(nome: string, id: number, email: IEmail) {
    this.nome = nome
    this.id = id
    this.email = email
  }

  iniciarJornada() {
    //TODO - método a ser implementado
  }

  concluirJornada() {
    //TODO - método a ser implementado
  }
}

//classe que implementa a interface IEmail 
export class Email implements IEmail {
  email: string
  
  constructor(email: string) {
    this.email = email
  }

  getValue() {
    return this.email
  }

  setValue(email: string) {
    this.email = email
  }

  atualizarEmail(novoEmail: string): void {
    this.validarEmail(novoEmail)
    this.setValue(novoEmail)
  }

  private validarEmail(email: string) {
    if(email.length === 0) throw new Error('E-mail não pode estar vazio')
    if(!email.includes('@')) throw new Error('E-mail inválido')
  }

}