import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private baseUrl: string = 'https://restcountries.com/v3.1';

  constructor(private _httpClient: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${termino}`;
    return this._httpClient.get<Country[]>(url);
  }

  buscarPorCapital(termino: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${termino}`;
    return this._httpClient.get<Country[]>(url);
  }
  getPaisPorCodigo(id: string): Observable<Country> {
    const url = `${this.baseUrl}/alpha/${id}`;
    return this._httpClient.get<Country>(url);
  }
}