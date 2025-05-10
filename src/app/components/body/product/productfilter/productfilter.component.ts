import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para ngModel
// Se crean interfaces de pruebas
export interface FilterOption {
  id: string | number;
  name: string;
  checked: boolean;
  description?: string;
}

export interface FilterGroup {
  key: string;
  groupName: string;
  options: FilterOption[];
}

@Component({
  selector: 'app-productfilter',
  imports: [CommonModule, FormsModule],
  templateUrl: './productfilter.component.html',
  styleUrl: './productfilter.component.css'
})
export class ProductfilterComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  appliedFiltersDisplay: { group: string, name: string }[] = [
    { group: 'Categoría', name: 'Perfumería' },    
    { group: 'Cantidad', name: '250ml' },
    { group: 'Público', name: 'Niños' },
  ];

  filterGroups: FilterGroup[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filterGroups = [
      {
        key: 'label',
        groupName: 'Label',
        options: [
          { id: 'label1', name: 'Label', description: 'Description', checked: true },
          { id: 'label2', name: 'Label', description: 'Description', checked: false },
          { id: 'label3', name: 'Label', description: 'Description', checked: true },
        ]
      },
      {
        key: 'color',
        groupName: 'Color',
        options: [
          { id: 'azul', name: 'Azul', checked: true },
          { id: 'rojo', name: 'Rojo', checked: true },
          { id: 'blanco', name: 'Blanco', checked: false },
        ]
      },
      {
        key: 'cantidad',
        groupName: 'Cantidad',
        options: [
          { id: '250ml', name: '250 ml', checked: true },
          { id: '120ml', name: '120 ml', checked: true },
          { id: '50ml', name: '50 ml', checked: false },
        ]
      }
    ];
  }

  // Se dispara al hacer cambios de estado de los checkbox, obtiene solo los filtros con check true
  onFilterChange(): void {
    const activeFilters: any = {};
    this.appliedFiltersDisplay = [];
    this.filterGroups.forEach(group => {
      activeFilters[group.key] = group.options
        .filter(option => option.checked)
        .map(option => {
          this.appliedFiltersDisplay.push({ group: group.groupName, name: option.name })
          return option.id;
        });
    });
    // Se emite la lista para poder hacer el filtrado en el componente padre product.component
    this.filtersChanged.emit(activeFilters);
  }

  // Logica cuando se quita un tag de los filtros que se encuentran en la parte superior
  // Se envia el indice por si mas adelante es necesario
  removeAppliedFilter(filterToRemove: { group: string, name: string }, index: number): void {    
    this.filterGroups.forEach(group => {
      group.options.forEach(option => {
        if (option.name === filterToRemove.name) {
          option.checked = false;
        }
      });
    });
    this.onFilterChange();
  }
}
