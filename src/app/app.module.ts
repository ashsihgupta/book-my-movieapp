import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MovieComponent } from './movie/movie.component';
import { BookMyMovieService } from './book-my-movie.service';
import { TheaterComponent } from './theater/theater.component';
import { MovieDescComponent } from './movie-desc/movie-desc.component';
import { RoutingModule } from './routing/routing.module';
import { SeatComponent } from './seat/seat.component';
import { PipePipe } from './pipe.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {DatePipe} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {LoginGuard} from './login/login.guard';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,RoutingModule,  ReactiveFormsModule,Ng2SearchPipeModule,BrowserAnimationsModule,BsDatepickerModule.forRoot()],
  declarations: [ AppComponent, HelloComponent, MovieComponent, TheaterComponent, MovieDescComponent, SeatComponent, PipePipe, LoginComponent, RatingComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BookMyMovieService,DatePipe,LoginGuard]
})
export class AppModule { }
