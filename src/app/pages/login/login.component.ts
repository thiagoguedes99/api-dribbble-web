import { Component, OnInit } from '@angular/core';
import { User } from "app/model/user";
import { Router } from "@angular/router";
import { LoginService } from "app/pages/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  errorLogin: boolean = false;

  usuario: User = new User();

  constructor(private logar: LoginService, private rota: Router) { }

  ngOnInit() {
    this.logar.logOff();
  }

  login() {
    let resp =  this.logar.autenticar(this.usuario);

    if(resp) {
      this.rota.navigate(['/']);
    }
    else {
      this.errorLogin = true;
    }
  }

}
