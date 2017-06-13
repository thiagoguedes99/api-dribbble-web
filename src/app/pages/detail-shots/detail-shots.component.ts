import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DribbbleServiceService } from 'app/providers/dribbble-service.service';

@Component({
  selector: 'app-detail-shots',
  templateUrl: './detail-shots.component.html',
  styleUrls: ['./detail-shots.component.css']
})
export class DetailShotsComponent implements OnInit {

   private id: string;
   private detailShort: any;
   private coments: any;
   private likes: any;
   public show: boolean = false;

  constructor(private url: ActivatedRoute, private service: DribbbleServiceService) { }

  ngOnInit() {
    this.id = this.url.snapshot.params['id'];

    this.service.getDetailShots(this.id).subscribe(res => {
      this.detailShort = res;
      this.show = true});

    this.service.getComentsShots(this.id).subscribe(res => {
      this.coments = res;
    console.log(this.coments)});

    this.service.getLikeShots(this.id).subscribe(res => {
      this.likes = res;
    console.log(this.likes)});

  }


}
