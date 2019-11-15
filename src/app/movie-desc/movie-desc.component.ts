import { Component, OnInit } from '@angular/core';
import {BookMyMovieService} from '../book-my-movie.service';
import { Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-movie-desc',
  templateUrl: './movie-dec.component.html',
  styleUrls: ['./movie-desc.component.css']
})
export class MovieDescComponent implements OnInit {

  constructor(private router:Router,private service:BookMyMovieService,private route: ActivatedRoute) { }

  SingleMovie:any=[];

  selectedate:string;
  selectedcity:string;
  selectedtime:string;

  MovieByTheatrer:any=[];

  ngOnInit() {
    this.getDataById();
  }

  getDataById()
  {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get("id"));
      this.SingleMovie=this.service.getMovieByID(id);
      console.log(this.SingleMovie.name+"THIS IS THE ID")
    })
  }

  city()
  {
    this.MovieByTheatrer=this.service.getTheater(this.selectedcity);
    console.log(this.selectedcity);
    console.log(this.MovieByTheatrer);
    this.service.city=this.selectedcity;
  }

  time()
  {
    this.service.time=this.selectedtime;
  }

  date()
  {
    this.service.date=this.selectedate;
  }

  SeatBooking()
  {
    this.router.navigate(['seat']);
  }

}