import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PaisTablaComponent } from '../../components/pais-tabla/pais-tabla.component';
import { PaisImputComponent } from '../../components/pais-imput/pais-imput.component';

@Component({
  selector: 'app-por-pais',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    PaisTablaComponent,
    PaisImputComponent,
  ],
  templateUrl: './por-pais.component.html',
  styleUrl: './por-pais.component.css',
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  countries: Country[] = [];
  paisesSugeridos: Country[] = [];
  constructor(private _paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this._paisService.buscarPais(this.termino).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => {
        this.hayError = true;
        this.countries = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    //TODO : Crear sugerencias

    this._paisService.buscarPais(termino).subscribe((data) => {
      this.paisesSugeridos = data.splice(0, 3);
    });
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
