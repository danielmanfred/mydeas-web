import { SharedModule } from './../shared/shared.module';
import { ProjectCreatorComponent } from './project-creator.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    {
        path: '',
        component: ProjectCreatorComponent
    }
]

@NgModule({
    declarations: [ProjectCreatorComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class ProjectCreatorModule {

}