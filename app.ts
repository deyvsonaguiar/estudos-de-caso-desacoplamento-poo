import { Email } from "./Email"
import { Funcionario } from "./Funcionario"

const funcionario1 = new Funcionario('Deyvson Aguiar', 1, new Email('deyvsonaguiar@mail.com'))
console.log(funcionario1)
funcionario1.email.atualizarEmail('novoemail@mail.com')
console.log(`Seu novo email é: ${funcionario1.email.email}`)