import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupEducationDetailsRoutingModule } from './signup-education-details-routing.module';
import { SignupEducationDetailsComponent } from './signup-education-details.component';


@NgModule({
  declarations: [
    SignupEducationDetailsComponent
  ],
  imports: [
    CommonModule,
    SignupEducationDetailsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignupEducationDetailsModule { }
