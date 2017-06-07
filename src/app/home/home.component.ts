import { Component, OnInit } from '@angular/core';

import { DribbbleServiceService } from "app/providers/dribbble-service.service";
import { PaginarService } from "app/shared/paginacao/paginar.service";

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


  constructor(private service: DribbbleServiceService, private paginarService: PaginarService) { }

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
    this.paginarService.log("home component");
	}

  


  /*listarParcial(pagina: number, qtdPorPagina: number): Veiculo[] {
		let storage: string = sessionStorage['veiculos'];
		let veiculos: Veiculo[] = storage ? JSON.parse(storage) : [];
		
    let veiculosParcial: Veiculo[] = [];
		for (let i = ( pagina * qtdPorPagina ); i < (pagina * qtdPorPagina + qtdPorPagina); i++) {
			if (i >= veiculos.length) {
				break;
			}
			veiculosParcial.push(veiculos[i]);
		}
		return veiculosParcial;
  }*/



}
