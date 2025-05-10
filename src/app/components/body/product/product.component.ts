import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductfilterComponent } from './productfilter/productfilter.component';
import { ProductCardComponent, Product } from './product-card/product-card.component';
import { PaginationComponent } from './pagination/pagination.component';

export interface TagFilter {
  id: string;
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    FormsModule,
    CarouselComponent,
    ProductfilterComponent,
    ProductCardComponent,
    PaginationComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  searchTerm: string = '';

  tagFilters: TagFilter[] = [
    { id: 'nuevo', name: 'Nuevo', active: true },
    { id: 'disney', name: 'Disney', active: false },
    { id: 'marvel', name: 'Marvel', active: false },
    { id: 'hasbro', name: 'Hasbro', active: false },
  ];

  allProducts: Product[] = []; // Todos los productos cargados
  filteredProducts: Product[] = []; // Productos después de aplicar filtros y búsqueda
  paginatedProducts: Product[] = []; // Productos para la página actual

  // Paginación
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalFilteredItems: number = 0;

  // Filtros laterales
  activeSidebarFilters: any = {};

  constructor() { }

  ngOnInit(): void {
    // Carga de productos de prueba
    this.allProducts = Array.from({ length: 50 }, (_, i) => ({ // 50 productos de ejemplo
      id: `prod${i + 1}`,
      name: `Producto ${i + 1}`,
      imageUrl: undefined, // Dejar undefined para mostrar placeholder
      placeholderText: `P ${i + 1}`,
      infoLink: '#',
    }));
    this.applyAllFilters();
  }

  // Funcion cuando se escribe en la caja de texto de busqueda
  onSearchTermChange(): void {
    this.currentPage = 1;
    this.applyAllFilters();
  }

  // Cuando se filtran los tag de la parte superior derecha
  toggleTagFilter(tag: TagFilter): void {
    tag.active = !tag.active;
    this.currentPage = 1;
    this.applyAllFilters();
  }

  // Funcion de los filtros hechos desde la barra izquierda
  onSidebarFiltersChanged(filters: any): void {
    this.activeSidebarFilters = filters;
    this.currentPage = 1;
    this.applyAllFilters();
  }

  // Para esta etapa se esta haciendo el filtro o logica en esta parte
  // cuando defina esto se podra cambiar ya que quizas viene filtrado desde el backend
  applyAllFilters(): void {
    let products = [...this.allProducts];

    // 1. busqueda por la caja de texto
    if (this.searchTerm) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // 2. Filtros de tags
    const activeTags = this.tagFilters.filter(t => t.active).map(t => t.id);
    if (activeTags.length > 0) {
      // Esta lógica dependerá de cómo tus productos se relacionan con los tags
      // Ejemplo: si el producto tiene una propiedad 'tags: string[]'
      // products = products.filter(p => p.tags && activeTags.some(at => p.tags.includes(at)));
      // Por ahora, solo filtramos si 'nuevo' está activo y es el producto 1
      if (activeTags.includes('nuevo')) {
        products = products.filter(p => p.id === 'prod1' || Math.random() > 0.3); // Ejemplo aleatorio
      }
    }

    // 3. Aplicar filtros de la barra izquierda
    if (this.activeSidebarFilters.color && this.activeSidebarFilters.color.length > 0) {
      // Ejemplo: si el producto tiene una propiedad 'color: string'
      // Esto se definira cuando tengan la estructura de su servicio
      // products = products.filter(p => this.activeSidebarFilters.color.includes(p.color));
    }

    this.filteredProducts = products;
    this.totalFilteredItems = this.filteredProducts.length;
    this.updatePaginatedProducts();
  }

  onPageChanged(page: number): void {
    this.currentPage = page;
    this.updatePaginatedProducts();
  }

  updatePaginatedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }
}
