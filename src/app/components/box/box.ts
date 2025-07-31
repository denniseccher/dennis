import { Component, Input } from '@angular/core';

@Component({
  selector: 'den-box',
  standalone: true,
  templateUrl: './box.html',
  styleUrl: './box.scss',
  host: {
    // Applica le classi statiche e quelle di Tailwind direttamente qui
    'class': 'box bg-pink-400 rounded-3xl flex justify-center items-center',
    
    // Associa gli stili CSS alle proprietà della classe del componente
    '[style.grid-column]': 'gridColumnStyle',
    '[style.grid-row]': 'gridRowStyle'
  }
})
export class Box {
  @Input({ required: true }) width!: number;
  @Input({ required: true }) height!: number;

  // I getter ora servono solo a calcolare il valore per il binding nell'host
  get gridColumnStyle(): string {
    return `span ${this.width}`;
  }

  get gridRowStyle(): string {
    return `span ${this.height}`;
  }
}