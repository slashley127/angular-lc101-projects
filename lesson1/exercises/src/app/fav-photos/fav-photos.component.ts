import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'A Few of My Favorite Anime Characters!';
  image1 = 'http://demonewspaper.com/images/characters/reki-kyan-203204.jpg';
  image2 = 'https://assets.puzzlefactory.pl/puzzle/395/415/original.jpg';
  image3 = 'https://i1.sndcdn.com/artworks-XR3BCI0yj370kXL5-Em8yIQ-t500x500.jpg';

  constructor() { }

  ngOnInit() {
  }

}