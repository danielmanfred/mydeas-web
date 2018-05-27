import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    arthur = {
        name: 'Arthur Dent',
        email: 'arthurdent@gmail.com',
        gender: 'M',
        isAdmin: false
    }

    ford = {
        name: 'Ford Prefect',
        email: 'fordprefect@gmail.com',
        isAdmin: true
    }

    trillian = {
        name: 'Trillian',
        email: 'trillian@gmail.com',
        gender: 'F',
        isAdmin: false
    }
}