import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators } from '@angular/forms';
import { PersonalInformation } from '../BusinessModels/personalInformation';
import { BaseModel } from '../BusinessModels/BaseModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-with-form-array',
  templateUrl: './signup-with-form-array.component.html',
  styleUrls: ['./signup-with-form-array.component.css']
})
export class SignupWithFormArrayComponent implements OnInit {

private personalInfo: PersonalInformation=new PersonalInformation();  
private baseModel : BaseModel =new BaseModel();
  constructor(private fb:FormBuilder,private router:Router) 
  { }

  ngOnInit(): void {
  }
  singupForm2 = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  onSubmit() {
   this.personalInfo=Object.assign(this.personalInfo,this.singupForm2.value)
   console.log(this.personalInfo);
   this.baseModel.personalInfo=this.personalInfo;
   this.router.navigate(['/signupEducationDetails']);
  }
}
