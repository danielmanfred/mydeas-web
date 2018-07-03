import { SignUpSummaryComponent } from './sign-up-summary/sign-up-summary.component';
import { ProjectCreatorSummaryComponent } from './project-creator-summary/project-creator-summary.component';
import { LoginComponent } from './security/login/login.component';
import { ApplySummaryComponent } from './project-detail/apply-summary/apply-summary.component';
import { ApplyComponent } from './project-detail/apply/apply.component';
import { PartnersComponent } from './project-detail/partners/partners.component';
import { NewsComponent } from './project-detail/news/news.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
    },
    {
        path: 'login',
        component: LoginComponent
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
            },
            {
                path: 'apply',
                component: ApplyComponent
            }
        ]
    },
    {
        path: 'apply-summary',
        component: ApplySummaryComponent
    },
    {
        path: 'project-creator-summary',
        component: ProjectCreatorSummaryComponent
    },
    {
        path: 'project-creator',
        loadChildren: './project-creator/project-creator.module#ProjectCreatorModule'
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'sign-up-summary',
        component: SignUpSummaryComponent
    }
]