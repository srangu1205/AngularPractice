import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-education-details',
  templateUrl: './signup-education-details.component.html',
  styleUrls: ['./signup-education-details.component.css']
})
export class SignupEducationDetailsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  educationForm = this.fb.group({
    bachelorsDegree: [''],
    masters: [''],
    grade: ['']  });

    onSubmit()
    {

    }

}
