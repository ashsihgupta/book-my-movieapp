import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }
private range: Array<number> = [1, 2, 3, 4, 5,6,7,8,9,10];
 @Input() private rate: number;

  ngOnInit() {
  }

}