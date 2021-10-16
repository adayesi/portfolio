import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PersonalPortFolioComponent } from './personal-port-folio/personal-port-folio.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RecentProjectsComponent } from './recent-projects/recent-projects.component';
import { RouterModule } from '@angular/router';
import { SkillRatingsComponent } from './skill-ratings/skill-ratings.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalPortFolioComponent,
    HeaderComponent,
    HomeComponent,
    RecentProjectsComponent,
    SkillRatingsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
