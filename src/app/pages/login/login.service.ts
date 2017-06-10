import { Injectable } from '@angular/core';
import { DribbbleServiceService } from "app/providers/dribbble-service.service";
import { User } from "app/model/user";

@Injectable()
export class LoginService {

  constructor(private service: DribbbleServiceService) { }

  autenticar(usuario: User): boolean {
    if (this.service.getAutenticacao(usuario)) {
      sessionStorage.setItem('userLogged', 'true');

      return true
    } else {
      return false;      
    }
  }

  logOff() {
    sessionStorage.setItem('userLogged', 'false');
  }

}
