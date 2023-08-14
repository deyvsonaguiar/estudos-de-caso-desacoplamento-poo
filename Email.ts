export interface IEmail {
  email: string

  atualizarEmail(email: string): void
}

class Email implements IEmail {
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
    if (email.length === 0) throw new Error('E-mail não pode estar vazio')
    if (!email.includes('@')) throw new Error('E-mail inválido')
  }

}

export { Email }