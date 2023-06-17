import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RoutesSectionComponent } from './routes-section/routes-section.component';



@NgModule({
  declarations: [
    AppComponent,
    RoutesSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
