import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PersonalPortFolioComponent } from './personal-port-folio/personal-port-folio.component';
import { RecentProjectsComponent } from './recent-projects/recent-projects.component';
import { SkillRatingsComponent } from './skill-ratings/skill-ratings.component';

const routes: Routes = [
  {path: "personal-port-folio", component: PersonalPortFolioComponent},
  {path: "header", component: HeaderComponent },
  {path: "home", component: HomeComponent},
  {path: "recent-projects", component: RecentProjectsComponent},
  {path: "contact", component: ContactComponent},
  {path: "skill-ratings", component: SkillRatingsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
