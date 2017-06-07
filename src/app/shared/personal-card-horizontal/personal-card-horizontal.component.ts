import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'personal-card-horizontal-component',
  templateUrl: './personal-card-horizontal.component.html',
  styleUrls: ['./personal-card-horizontal.component.css']
})
export class PersonalCardHorizontalComponent implements OnInit {

  @Input() user;

  constructor() { }

  ngOnInit() {
  }

}
