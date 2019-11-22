import { Component, OnInit } from '@angular/core';
import {BookMyMovieService} from '../book-my-movie.service';
import { Router,ActivatedRoute,ParamMap} from '@angular/router';
import {DatePipe} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-movie-desc',
  templateUrl: './movie-dec.component.html',
  styleUrls: ['./movie-desc.component.css']
})
export class MovieDescComponent implements OnInit {

  constructor(private router:Router,private service:BookMyMovieService,private route: ActivatedRoute,private DatePipe:DatePipe,private formBuilder: FormBuilder) { }

  SingleMovie:any=[];

 
  selectedcity:string;
  selectedtime:string;
  selectedtheater:string;
   submitted = false;

  MovieByTheatrer:any=[];

  minDate=new Date();
  maxDate=new Date();

   myDateValue: Date;
   registerForm: FormGroup;
   selected:boolean = false;
   selectedc:boolean = false;
   selectedt:boolean = false;
   selectedd:boolean = false;
   selectedth:boolean = false;
  
 

  ngOnInit() {
    this.getDataById();
    this.Todaysdate();
     this.myDateValue = new Date();
    

     
    
    
  }

   computeDisplayValue() {
    console.log('#### ' + this.myDateValue);
    this.selectedd=true;
    sessionStorage.setItem('keydate', JSON.stringify(this.myDateValue));
  }


  Todaysdate()
  {

    
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.minDate.getDate() + 7);
    console.log(this.maxDate);

    //this.maxDate.setDate(this.minDate.getDate() + 7);



    }

  getDataById()
  {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get("id"));
      this.SingleMovie=this.service.getMovieByID(id);
      console.log(this.SingleMovie.name+"THIS IS THE ID")
      

      for(var i=0;i<this.SingleMovie.length;i++)
      {


          sessionStorage.setItem('movie', JSON.stringify(this.SingleMovie[i].name));
      }
      
    })
  }

  city()
  {
    this.MovieByTheatrer=this.service.getTheater(this.selectedcity);
    console.log(this.selectedcity);
    console.log(this.MovieByTheatrer);
    this.selectedc=true;
    
    sessionStorage.setItem('key', JSON.stringify(this.selectedcity));
  }

  time()
  {
    
    sessionStorage.setItem('keytime', JSON.stringify(this.selectedtime));
    console.log(this.selectedtime+"sydsydysyddate");
    this.selectedt=true;
  }

  

  SeatBooking()
  {
    this.router.navigate(['seat']);

  }

  theater()
  {
    this.selectedth=true;
    sessionStorage.setItem('keytheater',JSON.stringify(this.selectedtheater));
    console.log(this.selectedtheater+"ydfsdfsdfgsfgsf");
  }

}