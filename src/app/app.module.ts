import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NewsComponent } from './project-detail/news/news.component';
import { NewsItemComponent } from './project-detail/news-item/news-item.component';
import { PartnersComponent } from './project-detail/partners/partners.component';
import { ApplyComponent } from './project-detail/apply/apply.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';

import { ProjectService } from './projects/projects.service';
import { ApplyService } from './project-detail/apply/apply.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ApplyComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectComponent,
    ProjectDetailComponent,
    NewsComponent,
    NewsItemComponent,
    PartnersComponent,
    InputComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProjectService, ApplyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
