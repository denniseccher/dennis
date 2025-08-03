import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxBase } from '../box-base';
import { LinkBoxInterface } from '../../../interfaces/boxes/link-box';

@Component({
  selector: 'den-link-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link-box.html',
  styleUrl: './link-box.scss'
})
export class LinkBox extends BoxBase<LinkBoxInterface> {

  gradientFromColors(colors: string[] | undefined): string {
    if(colors){
      return `linear-gradient(45deg, ${colors.join(', ')})`;
    }

    return 'white';
  }

  onLinkTapped(){
    console.log("Link: ", this.box?.link);
    window.open('https://www.' + this.box?.link, '_blank');
  }
}