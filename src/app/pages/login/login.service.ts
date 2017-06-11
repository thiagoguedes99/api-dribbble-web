import { Injectable } from '@angular/core';
import { DribbbleServiceService } from "app/providers/dribbble-service.service";
import { User } from "app/model/user";

@Injectable()
export class LoginService {

  constructor(private service: DribbbleServiceService) { }

  autenticar(usuario: User): boolean {
    let sec = this.service.getAutenticacao(usuario);

    if (sec) {
      sessionStorage.setItem('userLogged', 'on');

      return true
    } else {
      return false;      
    }
  }


  logOff() {
    sessionStorage.setItem('userLogged', 'off');
  }

}
