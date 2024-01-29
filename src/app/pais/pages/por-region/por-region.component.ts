import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { PaisTablaComponent } from '../../components/pais-tabla/pais-tabla.component';

@Component({
  selector: 'app-por-region',
  standalone: true,
  imports: [CommonModule, PaisTablaComponent],
  templateUrl: './por-region.component.html',
  styleUrl: './por-region.component.css',
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  countries: Country[] = [];

  constructor(private _paisService: PaisService) {}

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.countries = [];
    this._paisService.buscarPaisesPorRegion(region).subscribe((data) => {
      console.log(data);
      this.countries = data;
    });
  }

  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
