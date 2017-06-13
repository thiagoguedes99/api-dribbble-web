import { DribbbleServiceService } from './providers/dribbble-service.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/pages/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent implements OnInit {

  mostraMenu: boolean = true;
    
  constructor(private service: DribbbleServiceService, private login: LoginService) {}

  ngOnInit(): void {
      /*this.login.enviarValidacao.subscribe(valor =>{
                                      if (valor == 'on') {
                                        this.mostraMenu = true;
                                        alert('entrou no if');                                 
                                      } else {
                                        this.mostraMenu = false; 
                                        alert('entrou no false');                                   
                                      }
                                    });*/
    } // end ngOnInit

}
