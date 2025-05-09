import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Product {
  id: string | number;
  name: string;
  imageUrl?: string;
  placeholderText?: string;
  infoLink?: string;
}

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
}
