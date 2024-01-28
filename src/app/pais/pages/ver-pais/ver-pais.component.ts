import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-pais',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './ver-pais.component.html',
  styleUrl: './ver-pais.component.css',
})
export class VerPaisComponent implements OnInit {
  public paisX!: Country;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _paisService: PaisService
  ) {}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params) => {
      this._paisService
        .getPaisPorCodigo(params['id'])
        .subscribe((data: Country) => {
          if (Array.isArray(data)) {
            // Si se recibe un array, toma el primer elemento
            this.paisX = data.length > 0 ? data[0] : null;
          } else {
            // Si ya es un objeto, simplemente asigna
            this.paisX = data;
          }
        });
    });
  }
}
