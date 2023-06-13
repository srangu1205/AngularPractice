import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { RoutesSectionComponent } from './routes-section/routes-section.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes=[

  { path:'routesSection',component:RoutesSectionComponent},
  { path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
