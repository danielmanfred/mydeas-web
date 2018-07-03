import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders } from '@angular/core'
import { RadioComponent } from './radio/radio.component';
import { CommonModule } from '@angular/common';

import { ProjectCreatorService } from './../project-creator/project-creator.service';
import { ApplyService } from '../project-detail/apply/apply.service';
import { ProjectService } from '../projects/projects.service';
import { LoginService } from '../security/login/login.service';
import { UserService } from './user.service';

@NgModule({
    declarations: [InputComponent, RadioComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, CommonModule, FormsModule, ReactiveFormsModule]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ProjectCreatorService, ApplyService, ProjectService, LoginService, UserService]
        }
    }
}