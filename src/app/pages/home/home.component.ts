import { Component, OnInit } from '@angular/core';

import { DribbbleServiceService } from 'app/providers/dribbble-service.service';
import { PaginarService } from 'app/shared/paginacao/paginar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'homePage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PaginarService]
})
export class HomeComponent implements OnInit {

  listShots: any[] = [];
  listShotsView: any[] = [];
  public show: boolean = false;

  private readonly qtdPorPagina: number = 6;
  private pagina: number;


  constructor(private service: DribbbleServiceService, private paginarService: PaginarService, private rota: Router) { }

  ngOnInit() {

      this.pagina = 1;
      this.service.getListShot()
                  .subscribe(resp =>{
                     this.listShots = resp;
                    this.show = true;
                    this.paginar(this.pagina);
                  });
  }

  paginar($event: any) {
		this.pagina = $event - 1;
		this.listShotsView = this.paginarService.listar(this.pagina, this.qtdPorPagina, this.listShots);
	}

}
