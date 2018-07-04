export class User {
    constructor(public name: string, public email: string, public password: string) {
    }

    matches(another: User): boolean {
        let b = another !== undefined && another.email === this.email && another.password === this.password
        console.log(b)
        return b
    }
}

export const users = {
    "neymar@cbf.com": new User('Neymar', 'neymar@cbf.com', '1010'),
    "coutinho@cbf.com": new User('Coutinho', 'coutinho@cbf.com', '1111')
}