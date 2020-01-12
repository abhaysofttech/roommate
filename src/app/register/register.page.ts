import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { UserServiceService } from '../_service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  // styleUrls: ['./login/login.component.scss'],

})
export class RegisterPage implements OnInit {
  registerForm:FormGroup;
  loading = false;
  submitted = false;
  croppedImagepath: SafeResourceUrl;
  profilePicBase64: string;
  alertService: any;

  constructor(
    private formBuilder: FormBuilder,
    private _userServiceService:UserServiceService,
    private route:Router
  ) { }

  ngOnInit() {
    this.croppedImagepath = 'assets/imgs/blank-avatar.jpg';

    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      userGender: ['', Validators.required],
      dob: ['', Validators.required],
      phonenumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields

  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);

    this._userServiceService.register(this.registerForm.value)
    .subscribe(
      data => {
        console.log(data);
        this.route.navigate(['/'])
      }
      
    )
    

}
}
