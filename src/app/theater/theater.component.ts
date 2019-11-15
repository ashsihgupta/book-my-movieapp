import { Component, OnInit } from '@angular/core';
import {BookMyMovieService} from '../book-my-movie.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {

  constructor(private service:BookMyMovieService) { }

  city:string;
  date:string;
  time:string;
  seat:any[];

  ngOnInit() {

    this.getData();
  }

  getData()
  {
    this.city=this.service.city;
    this.date=this.service.date;
    this.time=this.service.time;
    this.seat=this.service.seat;

    console.log(this.city+"ticket");
  }

}