import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MovieComponent } from './movie/movie.component';
import { BookMyMovieService } from './book-my-movie.service';
import { TheaterComponent } from './theater/theater.component';
import { MovieDescComponent } from './movie-desc/movie-desc.component';
import { RoutingModule } from './routing/routing.module';
import { SeatComponent } from './seat/seat.component';
import { PipePipe } from './pipe.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,RoutingModule],
  declarations: [ AppComponent, HelloComponent, MovieComponent, TheaterComponent, MovieDescComponent, SeatComponent, PipePipe ],
  bootstrap:    [ AppComponent ],
  providers: [BookMyMovieService]
})
export class AppModule { }
