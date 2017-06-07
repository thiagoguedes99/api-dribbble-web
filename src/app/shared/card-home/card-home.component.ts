import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {
    
  @Input() shot: any;
  //myShort: any;

  constructor(private rota: Router) {

  }

  ngOnInit() {

  }
}
