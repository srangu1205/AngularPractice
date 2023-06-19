import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupEducationDetailsComponent } from './signup-education-details.component';

const routes: Routes = [{ path: '', component: SignupEducationDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupEducationDetailsRoutingModule { }
