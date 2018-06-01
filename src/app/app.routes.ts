import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    }
]