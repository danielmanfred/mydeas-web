import { ProjectService } from './projects/projects.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
import { PartnersComponent } from './project-detail/partners/partners.component'


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectComponent,
    ProjectDetailComponent,
    NewsComponent,
    NewsItemComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
