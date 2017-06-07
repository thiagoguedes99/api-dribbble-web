import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css']
})
export class PersonalCardComponent implements OnInit {

  @Input() profile;

  constructor() { }

  ngOnInit() {
  }

}
