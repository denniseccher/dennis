import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  imports: [],
  templateUrl: './box.html',
  styleUrl: './box.scss'
})
export class Box{
  @Input({ required: true }) width!: 1 | 2;
  @Input({ required: true }) height!: 1 | 2;
}