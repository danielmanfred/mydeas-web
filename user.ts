class User {
    constructor(public name: string) {}

    showName() {
        console.log(`Olá eu sou ${this.name}`)
    }
}

interface Level {
    level: number
}

export {User, Level}