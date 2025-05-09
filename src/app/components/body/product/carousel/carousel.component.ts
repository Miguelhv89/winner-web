import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface CarouselProduct {
  id: string;
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  carouselId = 'productCarousel';
  featuredProducts: CarouselProduct[] = [];

  constructor() { }

  ngOnInit(): void {
    this.featuredProducts = [
      { id: 'promo1', name: 'Producto Destacado 1', imageUrl: 'images/banner.png' },
      { id: 'promo2', name: 'Producto Destacado 2', imageUrl: 'images/banner.png' },
      { id: 'promo3', name: 'Producto Destacado 3', imageUrl: 'images/banner.png' }
    ];
  }
}
