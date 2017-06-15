import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DribbbleServiceService } from 'app/providers/dribbble-service.service';
import { PaginarService } from 'app/shared/paginacao/paginar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [PaginarService]
})
export class ProfileComponent implements OnInit {

  private id: string;
  public userProfile: any;
  public userShots: any[] = [];
  public userShotsView: any;
  public show: boolean = false;

  private readonly qtdPorPagina: number = 4;
  private pagina: number;

  constructor(private url: ActivatedRoute, private service: DribbbleServiceService, private paginarService: PaginarService) { }

  ngOnInit() {
    this.pagina = 1;
    this.id = this.url.snapshot.params['id'];

    this.service.getUserProfile(this.id).subscribe(resp => this.userProfile = resp);
    this.service.getUserShots(this.id).subscribe(resp => {
                                      this.userShots = resp;
                                      this.showComponents();
                                      this.paginar(this.pagina);
                                    });

  }

  showComponents() {
    this.show = true;
  }

  paginar($event: any) {
    this.pagina = $event - 1;
    this.userShotsView = this.paginarService.listar(this.pagina, this.qtdPorPagina, this.userShots);
	}

}
