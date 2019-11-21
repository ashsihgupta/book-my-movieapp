import { Component, OnInit } from '@angular/core';

import {BookMyMovieService} from '../book-my-movie.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  
 searchText;
  Languagedata:any=['Hindi','English'];

  MovieArray:any=[];
  sortoption :string;
  languageoption:string;
  genereoption:string;
  

  constructor(private service:BookMyMovieService,private router:Router) { }

  ngOnInit() {

    this.getMovies();
    
  }

  getMovies()
  {

    
    sessionStorage.setItem
    ('sortoption', JSON.stringify(this.languageoption));
  
    this.MovieArray=this.service.getMovies()

    //console.log(JSON.parse(sessionStorage.getItem('sortoption')));
   

  }

  getMovieById(id:any)
  {
    this.router.navigate(['movie',id]);
    console.log(id+"in the com")

  }

  languagechanged()
  {
    console.log(this.languageoption);

  }

}