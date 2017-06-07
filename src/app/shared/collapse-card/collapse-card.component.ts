import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapse-card',
  templateUrl: './collapse-card.component.html',
  styleUrls: ['./collapse-card.component.css']
})
export class CollapseCardComponent implements OnInit {

  @Input() coments;
  @Input() likes;
  
  constructor() { }

  ngOnInit() {
  }

}
