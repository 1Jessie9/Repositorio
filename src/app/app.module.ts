import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import {register} from 'swiper/element/bundle';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
register();
@NgModule({
    declarations: [
        AppComponent,
        AboutmeComponent,
        HomeComponent,
        SkillsComponent,
        ProjectsComponent,
        ContactComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class AppModule { }
