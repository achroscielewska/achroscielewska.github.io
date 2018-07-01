import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService) { }

  login(formData: NgForm) {
    this.authService.login(formData.value.email, formData.value.password)
  }

  singup(formData: NgForm) {
    this.authService.singup(formData.value.email, formData.value.password)
  }
}
