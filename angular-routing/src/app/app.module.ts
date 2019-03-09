import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';
import { CodeEvalutionModule } from './code-evalution/code-evalution.module';
import { JavabrainsModule } from './javabrains/javabrains.module';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    PageNotFoundComponent,
    SettingsProfileComponent,
    SettingsContactComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CodeEvalutionModule,
    JavabrainsModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
