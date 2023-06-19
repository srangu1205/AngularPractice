import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupWithFormArrayComponent } from './signup-with-form-array.component';

const routes: Routes = [{ path: '', component: SignupWithFormArrayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupWithFormArrayRoutingModule { }
