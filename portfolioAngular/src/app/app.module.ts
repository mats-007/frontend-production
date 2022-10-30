import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SocialNetworksComponent } from './components/socialNetworks/social-networks/social-networks.component';
import { AboutMeComponent } from './components/aboutMe/about-me/about-me.component';
import { ExperienciaComponent } from './components/experiencia/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponentComponent } from './components/footer/footer-component/footer-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialNetworksComponent,
    AboutMeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponentComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
