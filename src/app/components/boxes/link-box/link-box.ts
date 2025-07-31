import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxBase } from '../box-base';

@Component({
  selector: 'den-link-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link-box.html',
  styleUrl: './link-box.scss'
})
export class LinkBox extends BoxBase {

  @Input() colors!: string[];
  @Input() imgSrc!: string;

  gradientFromColors(colors: string[]): string {
    if(colors){
      return `linear-gradient(45deg, ${colors.join(', ')})`;
    }

    return 'white';
  }

}