import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieComponent} from '../movie/movie.component';
import {MovieDescComponent} from '../movie-desc/movie-desc.component'
import { RouterModule } from '@angular/router';
import {SeatComponent} from '../seat/seat.component';
import {TheaterComponent} from '../theater/theater.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: MovieComponent},
       { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'movie/:id', component: MovieDescComponent },
      { path: 'seat', component: SeatComponent },
      { path: 'ticket', component: TheaterComponent },

      
      
      
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class RoutingModule { }