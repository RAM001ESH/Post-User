import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageServices } from 'src/app/shared/app.global';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  private _lstLogin: any[] = [];

  public FrmEntry = new FormGroup({
    UserName: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required])
  })

  constructor(private _srvHttp: HttpClient, private _router: Router) { }

  btnLogin() {
    // setTimeout(() => this._router.navigate(['/admin/dashboard']), 2000)
    this._srvHttp.get('http://localhost:3000/login').subscribe({
      next: (res: any) => {
        this._lstLogin = res;
        const frmEntry = this.FrmEntry.value;
        const IsUser = this._lstLogin.some((E) => (E.userName == frmEntry.UserName) && (E.password == frmEntry.Password))
        if (IsUser) {
          MessageServices.message('Login Successfully', 'success', 2000, 'bottom-end');
          setTimeout(() => this._router.navigate(['/admin/dashboard']), 2000)
        }
        else MessageServices.message('Invalid Username and Password', 'error', 2500, 'bottom-end');
      }
    });
  }
}
