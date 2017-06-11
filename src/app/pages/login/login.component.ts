import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from "app/model/user";
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

  constructor(private logar: LoginService) { }

  ngOnInit() {
    this.logar.logOff();
  }

  login() {
    let resp =  this.logar.autenticar(this.usuario);

    if(resp) {
      
    }
    else {
      this.errorLogin = true;
    }
  }

}
