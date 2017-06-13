import { Injectable, EventEmitter } from '@angular/core';
import { DribbbleServiceService } from 'app/providers/dribbble-service.service';
import { User } from 'app/model/user';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  enviarValidacao = new EventEmitter();


  constructor(private service: DribbbleServiceService, private rota: Router) { }

  autenticar(usuario: User): boolean {
    let sec = this.service.getAutenticacao(usuario);

    if (sec) {
      sessionStorage.setItem('userLogged', 'on');
      this.enviarValidacao.emit('on');
      this.rota.navigate(['/']);

      return true
    } else {
      return false;      
    }
  }


  logOff() {
    sessionStorage.setItem('userLogged', 'off');
    this.enviarValidacao.emit('off');
  }

}
