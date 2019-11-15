import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieComponent} from '../movie/movie.component';
import {MovieDescComponent} from '../movie-desc/movie-desc.component'
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: MovieComponent },
      { path: 'movie/:id', component: MovieDescComponent },
      
      
      
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class RoutingModule { }