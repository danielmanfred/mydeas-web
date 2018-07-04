import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NewsComponent } from './project-detail/news/news.component';
import { NewsItemComponent } from './project-detail/news-item/news-item.component';
import { PartnersComponent } from './project-detail/partners/partners.component';
import { ApplyComponent } from './project-detail/apply/apply.component';
import { ApplySummaryComponent } from './project-detail/apply-summary/apply-summary.component';
import { LoginComponent } from './security/login/login.component';

import { ProjectCreatorSummaryComponent } from './project-creator-summary/project-creator-summary.component';
import { SharedModule } from './shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpSummaryComponent } from './sign-up-summary/sign-up-summary.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ApplyComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectComponent,
    ProjectDetailComponent,
    NewsComponent,
    NewsItemComponent,
    PartnersComponent,
    ApplySummaryComponent,
    LoginComponent,
    ProjectCreatorSummaryComponent,
    SignUpComponent,
    SignUpSummaryComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
