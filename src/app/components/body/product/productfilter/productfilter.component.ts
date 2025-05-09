import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para ngModel

export interface FilterOption {
  id: string | number;
  name: string;
  checked: boolean;
  description?: string; // Para los labels con descripción
}

export interface FilterGroup {
  key: string; // ej: 'label', 'color', 'cantidad'
  groupName: string;
  options: FilterOption[];
  type: 'checkbox' | 'radio';
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
    { group: 'Categoría', name: 'Perfumería' }, // Ejemplo de filtro activo
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
        type: 'checkbox',
        options: [
          { id: 'label1', name: 'Label', description: 'Description', checked: true },
          { id: 'label2', name: 'Label', description: 'Description', checked: false },
          { id: 'label3', name: 'Label', description: 'Description', checked: true },
        ]
      },
      {
        key: 'color',
        groupName: 'Color',
        type: 'checkbox',
        options: [
          { id: 'azul', name: 'Azul', checked: true },
          { id: 'rojo', name: 'Rojo', checked: true },
          { id: 'blanco', name: 'Blanco', checked: false },
        ]
      },
      {
        key: 'cantidad',
        groupName: 'Cantidad',
        type: 'checkbox',
        options: [
          { id: '250ml', name: '250 ml', checked: true },
          { id: '120ml', name: '120 ml', checked: true },
          { id: '50ml', name: '50 ml', checked: false },
        ]
      }
      // Añade más grupos de filtros
    ];
  }

  onFilterChange(): void {
    const activeFilters: any = {};
    this.filterGroups.forEach(group => {
      activeFilters[group.key] = group.options
        .filter(option => option.checked)
        .map(option => option.id);
    });
    this.filtersChanged.emit(activeFilters);
    // Aquí también podrías actualizar `appliedFiltersDisplay` basado en los `activeFilters`
  }

  removeAppliedFilter(filterToRemove: { group: string, name: string }, index: number): void {
    this.appliedFiltersDisplay.splice(index, 1);
    // Aquí deberías desmarcar el checkbox correspondiente en `filterGroups` y llamar a `onFilterChange`
    // Esto requiere una lógica más compleja para mapear `filterToRemove` de vuelta a `filterGroups`
    // Ejemplo simplificado:
    this.filterGroups.forEach(group => {
      group.options.forEach(option => {
        if (option.name === filterToRemove.name /* && group.groupName === filterToRemove.group (si tienes el groupName) */) {
          option.checked = false;
        }
      });
    });
    this.onFilterChange();
  }
}
