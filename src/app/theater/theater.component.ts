import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import {BookMyMovieService} from '../book-my-movie.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


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
  

  ngOnInit() {

    this.getData();
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

    doc.save('test.pdf');
  }






  getData()
  {
   

    

     this.city = sessionStorage.getItem('key');
     this.date = sessionStorage.getItem('keydate');
     this.time = sessionStorage.getItem('keytime');
     this.seat = JSON.parse(sessionStorage.getItem('keyseat'))
     

    
  }

  

}