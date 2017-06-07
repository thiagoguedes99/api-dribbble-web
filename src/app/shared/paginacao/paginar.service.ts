import { Injectable } from '@angular/core';

@Injectable()
export class PaginarService {

  constructor() { }

  listar(pagina: number, qtdPorPagina: number, listaTotal: any): any {

    let listaParcial: any[] = [];

    for (let i = ( pagina * qtdPorPagina ); i < (pagina * qtdPorPagina + qtdPorPagina); i++) {
      if (i >= listaTotal.length) {
        break;        
      }
      listaParcial.push(listaTotal[i]);
    }

    return listaParcial;
  }

  log(coisa: string) {
    console.log(coisa);
  }

}
