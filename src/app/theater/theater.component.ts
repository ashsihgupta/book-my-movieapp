import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import {BookMyMovieService} from '../book-my-movie.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {
  @ViewChild('content', {static: false}) content: ElementRef;
  



  

  constructor(private service:BookMyMovieService) { }

  city:string;
  date:string;
  time:string;
  seat:any[];
  theater:string;
  movie:string;
  num:any;
  

  ngOnInit() {

    this.getData();
    this.num=Math.random().toString(36).substr(2, 5); 
  }
 public downloadPDF() {
    const doc = new jsPDF();



    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save(this.num+'.pdf');
  }






  getData()
  {
   

    

     this.city = JSON.parse(sessionStorage.getItem('key'));
     this.date = JSON.parse(sessionStorage.getItem('keydate'));
     this.time = JSON.parse(sessionStorage.getItem('keytime'));
     this.seat = JSON.parse(sessionStorage.getItem('keyseat'));
     this.theater=JSON.parse(sessionStorage.getItem('keytheater'));
     this.movie=JSON.parse(sessionStorage.getItem('movie'));

     

    
  }

 

  

}