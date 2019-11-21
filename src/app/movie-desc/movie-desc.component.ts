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
  
 

  ngOnInit() {
    this.getDataById();
    this.Todaysdate();
     this.myDateValue = new Date();


     this.registerForm = this.formBuilder.group({
      city: ['', Validators.required]
      
      
    });
    
    
  }

   computeDisplayValue() {
    console.log('#### ' + this.myDateValue);
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
  
    
    sessionStorage.setItem('key', JSON.stringify(this.selectedcity));
  }

  time()
  {
    
    sessionStorage.setItem('keytime', JSON.stringify(this.selectedtime));
    console.log(this.selectedtime+"sydsydysyddate")
  }

  

  SeatBooking()
  {
    this.submitted = true; 
    this.router.navigate(['seat']);

  }

  theater()
  {
    sessionStorage.setItem('keytheater',JSON.stringify(this.selectedtheater));
    console.log(this.selectedtheater+"ydfsdfsdfgsfgsf");
  }

}