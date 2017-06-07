import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';

import { EndPoints } from "app/providers/end-points";

@Injectable()
export class DribbbleServiceService extends EndPoints {


  constructor(private http: Http) {
    super();
   }

   getListShot() {
     return this.http.get(this.getURLShots())
              .map(res => res.json());             
   }

   getDetailShots(idShot: string) {
     return this.http.get(this.getShortDetail(idShot))
                     .map(res => res.json());
   }

   getComentsShots(idComents: string) {
     return this.http.get(this.getShotsComents(idComents))
                .map(res => res.json());
   }

   getLikeShots(idComents: string) {
     return this.http.get(this.getShotsLikes(idComents))
                     .map(res => res.json());
   }

   getUserProfile(id: string) {
     return this.http.get(this.getProfileUser(id))
                .map(res => res.json());
   }

  getUserShots(id: string){
    return this.http.get(this.getShotsUser(id))
              .map(res => res.json());
  }
  
}
