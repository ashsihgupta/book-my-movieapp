import { Injectable } from '@angular/core';

@Injectable()
export class BookMyMovieService {

  constructor() {

    sessionStorage.setItem
    ('moviearray', JSON.stringify(this.MovieApi));
   }

  MovieApi=[
    {
      "id":1,
      "name":"Gabbar",
      "Rating":7.1,
      "img":"https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/423049326.jpg",
      "Description":"Gabbar creates a vigilante military network to eliminate corrupt officials. As pressure mounts on the police to find out who is responsible for the killings, a special investigator is summoned to track them down.",
      "Budget": "2 billion INR",
      "Releasedate": "December 30, 2019 ",
      "Genere":["Action","Drama"],
      "language":"Hindi"
    },

    {
      "id":2,
      "name":"Raees",
      "Rating":6.8,
      "img":"https://rukminim1.flixcart.com/image/704/704/jnc2bgw0/poster/x/e/q/medium-bollywood-movie-wall-poster-raees-hd-quality-poster-original-imafayzncextczkb.jpeg?q=70",
      "Description":"Threat looms over bootlegger Raees Alam and his business after ACP Majmudar decides to get the better of him. In order to survive and keep his trade thriving, Raees must overcome these obstacles.",
      "Budget": "1.27 billion INR",
      "Releasedate": "November 2, 2019",
      "Genere":["Action","Drama"],
      "language":"Hindi"
    },

    {
      "id":3,
      "name":"Drishyam",
      "Rating":8.2,
      "img":"https://www.filmibeat.com/ph-big/2015/07/drishyam-poster_143694542700.jpg",
      "Description":"Desperate measures are taken by a man who tries to save his family from the dark side of the law, after they commit an unexpected crime.",
      "Budget": "2 billion INR",
      "Releasedate": "October 2, 2019",
      "Genere":["Action"],
      "language":"Hindi"
    },

    {
      "id":4,
      "name":"Bajrangi Bhaijaan",
      "Rating":8,
      "img":"https://www.comingtrailer.com/images/poster/Bajrangi-Bhaijaan2.jpg",
      "Description":"A young mute girl from Pakistan loses herself in India with no way to head back. A devoted man with a magnanimous spirit undertakes the task to get her back to her motherland and unite her with her family.",
      "Budget": "970 Crore INR",
      "Releasedate": "October 22, 2019",
      "Genere":["Action","Comedy"],
      "language":"Hindi"
    },

    {
      "id":5,
      "name":"Bharat",
      "Rating":6.1,
      "img":"https://beparlak.com/wp-content/uploads/2019/04/img_20190415_1823339119561779093957508.jpg",
      "Description":"An eight-year-old boy makes a vow to his father that he will keep his family together no matter what happens, a promise that he works hard to keep over the next 60 years of his life.",
      "Budget": "389 Crore INR",
      "Releasedate": "October 12, 2019",
      "Genere":["Action","Comedy"],
      "language":"Hindi"
    },

    {
      "id":6,
      "name":"Dangal",
      "Rating":8,
      "img":"https://v3k9p8g4.stackpathcdn.com/blog/wp-content/uploads/2018/05/Dangall-Movie-Poster-425x567.jpg",
      "Description":"After his failure at winning a gold medal for the country, Mahavir Phogat vows to realize his dreams by training his daughters for the Commonwealth Games despite societal pressures.",
      "Budget": "340 million INR",
      "Releasedate": "December 2, 2019",
      "Genere":["Action","Drama","Comedy"],
      "language":"Hindi"
    },

    {
      "id":7,
      "name":"Batigul Meter Chalu",
      "Rating":6.8,
      "img":"https://www.imagesgyan.com/wp-content/uploads/2018/08/bati-gul-meter-phalu-poster.jpg",
      "Description":"A lawyer takes up the case when an electricity company massively increases prices.",
      "Budget": "662 million INR",
      "Releasedate": "October 2, 2019",
      "Genere":["Action","Drama"],
      "language":"Hindi"
    },

    {
      "id":8,
      "name":"World War Z",
      "Rating":7,
      "img":"https://bloody-disgusting.com/wp-content/uploads/2013/05/world_war_z_ver4_xlg.jpg",
      "Description":"When former U.N. investigator Gerry Lane (Brad Pitt) and his family get stuck in urban gridlock, he senses that it's no ordinary traffic jam. His suspicions are confirmed when, suddenly, the city erupts into chaos. A lethal virus, spread through a single bite, is turning healthy people into something vicious, unthinking and feral. As the pandemic threatens to consume humanity, Gerry leads a worldwide search to find the source of the infection and, with luck, a way to halt its spread.",
      "Budget": "55 Crore INR",
      "Releasedate": "December 12, 2019",
      "Genere":["Action","Thriller"],
      "language":"English"
    },

    {
      "id":9,
      "name":"Kahaani2",
      "Rating":6.6,
      "img":"https://www.comingtrailer.com/images/poster/Kahaani-2-Durga-Rani-Singh.jpg",
      "Description":"A woman saves a little girl from an abusive household, however, her act of salvation puts her at odds with the law.",
      "Budget": "55 Crore INR",
      "Releasedate": "December 12, 2019",
      "Genere":["Action","Thriller"],
      "language":"Hindi"
    },

    {
      "id":10,
      "name":"IT Chapter 2",
      "Rating":6.8,
      "img":"https://wallpapercave.com/wp/wp4326219.jpg",
      "Description":"Defeated by members of the Losers' Club, the evil clown Pennywise returns 27 years later to terrorize the town of Derry, Maine, once again. Now adults, the childhood friends have long since gone their separate ways. But when people start disappearing, Mike Hanlon calls the others home for one final stand. Damaged by scars from the past, the united Losers must conquer their deepest fears to destroy the shape-shifting Pennywise -- now more powerful than ever.",
      "Budget": "450 Millon USD",
      "Releasedate": "December 12, 2019",
      "Genere":["Action","Thriller","Horror"],
      "language":"English"
    },

    {
      "id":11,
      "name":"300 Rise Of Empire",
      "Rating":7.7,
      "img":"https://casuck53.files.wordpress.com/2013/02/300_movie_poster_by_beyondwonderwall.png",
      "Description":"In 480 B.C. a state of war exists between Persia, led by King Xerxes (Rodrigo Santoro), and Greece. At the Battle of Thermopylae, Leonidas (Gerard Butler), king of the Greek city state of Sparta, leads his badly outnumbered warriors against the massive Persian army. Though certain death awaits the Spartans, their sacrifice inspires all of Greece to unite against their common enemy.",
      "Budget": "450 Millon USD",
      "Releasedate": "December 31, 2019",
      "Genere":["Action","Thriller"],
      "language":"English"
    },

    {
      "id":12,
      "name":"The Women In Black 2",
      "Rating":7.7,
      "img":"https://dtvimages.hs.llnwd.net/e1//db_photos/movies/AllPhotosAPGI/11019831/11019831_aa.jpg",
      "Description":"During World War II, the London bombings force schoolteachers Eve Parkins (Phoebe Fox) and Jean Hogg (Helen McCrory) to evacuate a group of children to Crythin Gifford. When the refugees take shelter at Eel Marsh House, Eve soon comes to realize that they are not alone. The longer they remain there, the more the house's evil spirit threatens the children. With the help of a pilot (Jeremy Irvine), Eve tries to protect the children and uncover the truth behind the Woman in Black.",
      "Budget": "450 Millon USD",
      "Releasedate": "December 31, 2019",
      "Genere":["Action","Horror"],
      "language":"English"
    },


  ];

  Theaters=[
    {
      "id":1,
      "city":"Pune",
      "theater":["Xion","I-max","Central"]
    },

    {
      "id":2,
      "city":"Mumbai",
      "theater":["Cinipolis","Joker","Central"]
    },

    {
      "id":3,
      "city":"Delhi",
      "theater":["Jantar-Mantar","I-max","Central"]
    },

    {
      "id":4,
      "city":"Chandigarh",
      "theater":["Pvr","I-max","Unversity Road"]
    },

    ];

  MovieData:any=[];

  SingleMovieData:any=[];

  SelectedTheaterByCity:any=[];

 

  confirmBooking:any=[];

  getMovies()
  {

    for(var i=0;i<this.MovieApi.length;i++)
    {
      console.log(1);
      this.MovieData.push(this.MovieApi[i]);
      console.log(this.MovieData[0]);
    }

    return this.MovieData;

  }


  getMovieByID(id:any)
  {
    

    this.SingleMovieData=this.MovieApi.filter(data => data.id=== id);

    return this.SingleMovieData;
  }

  getTheater(name:any)
  {

    this.SelectedTheaterByCity=this.Theaters.filter(data => 
    data.city=== name);

    return this.SelectedTheaterByCity;
    
  }

}