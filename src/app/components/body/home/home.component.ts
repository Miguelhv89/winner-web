import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  list_img = [
    { src: 'images/card_universitario.png', alt: 'Universitario' },
    { src: 'images/card_hasbro.png', alt: 'Hasbro' },
    { src: 'images/card_disney.png', alt: 'Disney' },
    { src: 'images/card_marvel.png', alt: 'Marvel' },
    { src: 'images/card_nickelodeon.png', alt: 'Nickelodeon' },
  ]

  list_img_brand = [
    { src: 'images/brand_bywin.png', alt: 'By Win' },
    { src: 'images/brand_onecare.png', alt: 'One Care' },
    { src: 'images/brand_nox.png', alt: 'Nox' },
  ]
}
