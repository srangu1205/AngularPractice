import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { RoutesSectionComponent } from './routes-section/routes-section.component';


const routes: Routes=[

  { path:'routesSection',component:RoutesSectionComponent},

  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
