import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  seat:string;
  no:number;

  Booking = [
    {
      no: "A1",
      status: "B"
    },
    {
      no: "A11",
      status: "B"
    },

    {
      no: "A2",
      status: "B"
    }

    ,{
      no: "A4",
      status: "A"
    }
   

  ];

  Seatbooked:any=[];

  Confirm:any=[];

  newArray:any=[];
  

  
  constructor() { }

  ngOnInit() {

    this.show();

    //this.change();

    

    
  }



  show()
  {
    for(var i=0;i<this.Booking.length;i++){
      if(this.Booking[i].status==='B')
      {
        var s=this.Booking[i].no;
         var val=document.getElementById(s).style.backgroundColor="red";
         var btn=<HTMLInputElement>document.getElementById(s);
         btn.disabled=true;
          console.log(s);
        //console.log(this.Booking[i].no);
      }

    }
  }

  // change()
  // {
  //   this.show();
  //   var val=document.getElementById('A1').style.backgroundColor = "red";
  //   var btn=<HTMLInputElement>document.getElementById('A1');
  //   btn.disabled=true;
  //   console.log(val);
  // }

  wait(event)
  {

          var target = event.target || event.srcElement || event.currentTarget;
          var idAttr = target.attributes.id;
          var value = idAttr.nodeValue;
          console.log(value+"value")

          this.Seatbooked.push(value);

      
          var background = document.getElementById(value)         .style.backgroundColor;

          console.log(background);


          if (background == "green") {
              document.getElementById(value).style.background = "yellow";
          } else {
              document.getElementById(value).style.background = "green";
     
          }



          
        
          
        

        
  
  }

  

  
  book()
  {

    for(var i=0;i<this.Seatbooked.length;i++)
    {

      var s=document.getElementById(this.Seatbooked[i]).style.backgroundColor;
      console.log(s+"value of s");
      if(s=="green")
      {

        this.Confirm.push(this.Seatbooked[i]);

      }
    }

    
    this.newArray = this.Confirm.filter((elem, i, arr) => {
    if (arr.indexOf(elem) === i) {
      return elem
  }
})

console.log(this.newArray);

 this.no=this.newArray.length;

    
  }

  

}