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

  resp: boolean = false;

  usuario: User = new User();

  constructor(private logar: LoginService, private rota: Router) { }

  ngOnInit() {
    this.logar.logOff();
  }

  login() {
    this.resp =  this.logar.autenticar(this.usuario);

    if(this.resp) {
      this.rota.navigate(['/']);
    }
    else {
alert('não logoou');
    }
  }

}
