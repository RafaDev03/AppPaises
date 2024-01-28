import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pais-tabla',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pais-tabla.component.html',
  styleUrl: './pais-tabla.component.css',
})
export class PaisTablaComponent {
  @Input('pais') countries: Country[] = [];
}
