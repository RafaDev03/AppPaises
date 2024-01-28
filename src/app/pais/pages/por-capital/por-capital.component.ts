import { Component, Output } from '@angular/core';
import { PaisImputComponent } from '../../components/pais-imput/pais-imput.component';
import { PaisTablaComponent } from '../../components/pais-tabla/pais-tabla.component';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { error } from 'console';

@Component({
  selector: 'app-por-capital',
  standalone: true,
  imports: [PaisImputComponent, PaisTablaComponent],
  templateUrl: './por-capital.component.html',
  styleUrl: './por-capital.component.css',
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  countries: Country[] = [];

  constructor(private _paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this._paisService.buscarPorCapital(termino).subscribe(
      (response) => {
        this.countries = response;
        console.log(response);
      },
      (error) => {
        this.hayError = true;
        this.countries = [];
      }
    );
  }
  sugerencias() {
    this.hayError = false;
  }
}
