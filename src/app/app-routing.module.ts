import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { RoutesSectionComponent } from './routes-section/routes-section.component';


const routes: Routes=[

  { path:'routesSection',component:RoutesSectionComponent},

  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },

  { path: 'signupWithFormArray', loadChildren: () => import('./signup-with-form-array/signup-with-form-array.module').then(m => m.SignupWithFormArrayModule) },

  { path: 'signupEducationDetails', loadChildren: () => import('./signup-education-details/signup-education-details.module').then(m => m.SignupEducationDetailsModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
