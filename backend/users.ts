export class User {
    constructor(public name: string, public email: string, public password: string) {
    }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users = {
    "neymar@cbf.com": new User('Neymar', 'neymar@cbf.com', 'ramyen'),
    "coutinho@cbf.com": new User('Coutinho', 'coutinho@cbf.com', 'ohnituoc')
}