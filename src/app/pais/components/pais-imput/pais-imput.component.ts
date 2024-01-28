import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-imput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pais-imput.component.html',
  styleUrl: './pais-imput.component.css',
})
export class PaisImputComponent implements OnInit {
  termino: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }
  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
