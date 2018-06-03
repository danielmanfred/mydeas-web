import { PartnersComponent } from './project-detail/partners/partners.component';
import { NewsComponent } from './project-detail/news/news.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
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
    },
    {
        path: 'projects/:id',
        component: ProjectDetailComponent,
        children: [
            {
                path: '',
                redirectTo: 'news',
                pathMatch: 'full'
            },
            {
                path: 'news',
                component: NewsComponent
            },
            {
                path: 'partners',
                component: PartnersComponent
            }
        ]
    }
]