import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupWithFormArrayRoutingModule } from './signup-with-form-array-routing.module';
import { SignupWithFormArrayComponent } from './signup-with-form-array.component';


@NgModule({
  declarations: [
    SignupWithFormArrayComponent
  ],
  imports: [
    CommonModule,
    SignupWithFormArrayRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignupWithFormArrayModule { }
