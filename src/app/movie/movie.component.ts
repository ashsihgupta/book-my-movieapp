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
  Generes:any=['Drama','Comedy','Thriller','Action','Horror'];
  flag:boolean=false;  
  MovieArray:any=[];
  MovieFilter:any=[];
  GenereData:any=[];
  GenereFilter:any=[];
  sortoption :string;
  languageoption:string;
  genereoption:string;
  GenereFlag:boolean=false;
  

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
    this.flag=true;
    console.log(this.languageoption);
     this.MovieFilter=this.MovieArray.filter(data => data.language=== this.languageoption);
     console.log(this.MovieFilter);

  }

generechanged()
{
  this.GenereFilter=this.MovieArray.filter(obj =>(obj = obj.Genere.filter(ele => ele===this.genereoption)).length);
  console.log(this.GenereFilter);
  this.GenereFlag=true;
}



}