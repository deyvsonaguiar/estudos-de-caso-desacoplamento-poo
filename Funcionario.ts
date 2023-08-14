  import { IEmail } from './Email'

  class Funcionario {
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

  export { Funcionario }
