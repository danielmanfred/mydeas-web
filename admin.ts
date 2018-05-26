import {User, Level} from './user'

export class Admin extends User implements Level {
    level: number

    constructor() {
        super('Ford Prefect')
        this.level = 3
    }

    showName() {
        console.log(`Olá eu sou o administrador ${this.name}`)
    }
}