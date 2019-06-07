import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  submitted = false;
  loading = false;


  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.setform();

  }
  setform() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get lf() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
    this.loading = true;

    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }
    let data = this.loginForm.value;
    this.loginService.login(data).subscribe(
      response => {
        if (response.log == true) {
          localStorage.setItem("token",response.token);
          this.router.navigateByUrl('home');
        }
        else {
          this.setform();
          this.loading = false;
        }
      }
    );
  }
}
