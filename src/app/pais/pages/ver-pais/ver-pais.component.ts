import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  standalone: true,
  imports: [],
  templateUrl: './ver-pais.component.html',
  styleUrl: './ver-pais.component.css',
})
export class VerPaisComponent implements OnInit {
  constructor(
    private _activateRoute: ActivatedRoute,
    private _paisService: PaisService
  ) {}

  ngOnInit(): void {
    this._activateRoute.params
      .pipe(switchMap(({ id }) => this._paisService.getPaisPorCodigo(id)))
      .subscribe((response) => {
        console.log(response);
      });

    /*this._activateRoute.params.subscribe(({ id }) => {
      console.log(id);
      this._paisService.getPaisPorCodigo(id).subscribe((pais) => {
        console.log(pais);
      });
    });*/
  }
}
