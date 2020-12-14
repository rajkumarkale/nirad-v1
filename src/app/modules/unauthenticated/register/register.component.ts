import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;          // Form for this module
  public firstNameFormControl: FormControl;          // FormControl for firstName field
  public lastNameFormControl: FormControl;   // FormControl for lastName field
  public businessEmailIdFormControl: FormControl;      // FormControl for businessEmailId field
  public companyNameFormControl: FormControl;      // FormControl for company field
  public contactNumberFormControl: FormControl;       // FormControl for contact field
  public termPolicyFormControl: FormControl;       // FormControl for termPolicy field
  public errorMessage: any;
  public firstNameError: string;
  public lastNameError: string;
  public businessEmailError: string;
  public companyNameError: string;
  public contactNumberError: string;
  private valueChangeSubscription: Subscription;   // Form change event listener

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.InitForm();
  }

  public InitForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      businessEmailId: [ '' , [Validators.required, Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{3,4})$/)]],
      companyName: ['', [Validators.required]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      termPolicy: false,
    });
    this.firstNameFormControl = (this.registerForm.get('firstName') as FormControl);
    this.lastNameFormControl = (this.registerForm.get('lastName') as FormControl);
    this.businessEmailIdFormControl = (this.registerForm.get('businessEmailId') as FormControl);
    this.companyNameFormControl = (this.registerForm.get('companyName') as FormControl);
    this.contactNumberFormControl = (this.registerForm.get('contactNumber') as FormControl);
    this.valueChangeSubscription = this.registerForm.valueChanges.subscribe((formValue: any) => {
        this.firstNameError = this.firstNameFormControl.dirty && this.firstNameFormControl.errors ? 'This field is required.' : '';
        this.lastNameError = this.lastNameFormControl.dirty && this.lastNameFormControl.errors ? 'This field is required.' : '';
        this.companyNameError = this.companyNameFormControl.dirty && this.companyNameFormControl.errors ? 'This field is required.' : '';
        if (this.contactNumberFormControl.dirty){
          if (this.contactNumberFormControl.errors?.required){
            this.contactNumberError = 'This field is required';
          }else if (this.contactNumberFormControl.errors?.pattern){
            this.contactNumberError = 'Please enter valid contact details.';
          }else{
            this.contactNumberError = '';
          }
        }
        if (this.businessEmailIdFormControl.dirty){
          if (this.businessEmailIdFormControl.errors?.required){
            this.businessEmailError = 'This field is required';
          }else if (this.businessEmailIdFormControl.errors?.pattern){
            this.businessEmailError = 'Please enter valid email.';
          }else{
            this.businessEmailError = '';
          }
        }
    });
  }

  public onFormSubmit(){
    this.router.navigate(['unauthenticated/register/verify-email']);
    console.log(this.registerForm.value);
  }
}
