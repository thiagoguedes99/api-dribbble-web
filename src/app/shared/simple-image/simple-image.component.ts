import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'simple-image',
  templateUrl: './simple-image.component.html',
  styleUrls: ['./simple-image.component.css']
})
export class SimpleImageComponent implements OnInit {

  @Input() image;

  constructor() { }

  ngOnInit() {
  }

}
