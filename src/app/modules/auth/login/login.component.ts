import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnInit {
  showPassword = false;
  rememberMe = false;
  processing = false;
  loginFailed = false;
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    let rememberUser = localStorage.getItem('rememberUser');
    let oldUser = rememberUser? JSON.parse(rememberUser) : undefined;
    if (oldUser) {
      this.loginForm.setValue({
        email: oldUser.email,
        password: oldUser.password
      })
    }
  }
  
  get emailField() {
    return this.loginForm.controls.email;
  }

  get passwordField() {
    return this.loginForm.controls.password;
  }

  onSubmit() {
    this.loginFailed = false;
    this.processing = true;
    let input: any = this.loginForm.value;
    this.authService.login(input)
    .pipe(
      finalize(() => {
        this.processing = false;
      })
    )
    .subscribe(
      res => { 
        this.authService.saveCurrentUser(res.user);
        this.authService.saveToken(res.token);
        if (this.rememberMe) {
          localStorage.setItem('rememberUser', JSON.stringify(input))
        } else {
          localStorage.removeItem('rememberUser');
        }
        this.router.navigate(['/home']);
      },
      err => {
        this.loginFailed = true;
      }
    )
  }
}
