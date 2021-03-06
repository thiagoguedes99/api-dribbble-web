import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';

import { EndPoints } from 'app/providers/end-points';
import { User } from 'app/model/user';

@Injectable()
export class DribbbleServiceService extends EndPoints {


  constructor(private http: Http) {
    super();
   }

   getListShot() {
     return this.http.get(this.getURLShots())
                     .map(res => res.json())
                     .catch(this.handleError);
   }

   getDetailShots(idShot: string) {
     return this.http.get(this.getShortDetail(idShot))
                     .map(res => res.json())
                     .catch(this.handleError);
   }

   getComentsShots(idComents: string) {
     return this.http.get(this.getShotsComents(idComents))
                     .map(res => res.json())
                     .catch(this.handleError);
   }

   getLikeShots(idComents: string) {
     return this.http.get(this.getShotsLikes(idComents))
                     .map(res => res.json())
                     .catch(this.handleError);
   }

   getUserProfile(id: string) {
     return this.http.get(this.getProfileUser(id))
                     .map(res => res.json())
                     .catch(this.handleError);
   }

  getUserShots(id: string) {
    return this.http.get(this.getShotsUser(id))
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  getAutenticacao(usuario: User): boolean {
    let validacao: boolean = false;

    for (let item of this.loginsValidos) {
      if (usuario.nome == item.nome && usuario.senha == item.senha) {
        validacao = true;
      }
    }
    return validacao;
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if(error instanceof Response){
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);

      errMsg = `${error.status} - ${error.statusText || ''} - ${err}`;
    }
    else{
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
