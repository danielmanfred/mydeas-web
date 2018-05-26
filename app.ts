import {User, Level} from './user'
import {Admin} from './admin'
import * as _ from 'lodash'

console.log(_.pad("Plataforma Mydeas", 40, "="))

let arthur = new User('Arthur Dent')
arthur.showName()

let ford = new Admin()
ford.showName()

let acessarFuncionalidade = (admin: Level) => admin.level > 1
console.log(`O funcionário possui acesso? ${acessarFuncionalidade(ford) ? 'SIM' : 'Não'}`)