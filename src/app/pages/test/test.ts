import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Navbar } from '../../components/navbar/navbar';
import { LinkBox } from '../../components/boxes/link-box/link-box';
import { LinkBoxInterface } from '../../interfaces/boxes/link-box';
import { BoxInterface } from '../../interfaces/boxes/box';
import { DefaultBox } from '../../components/boxes/default-box/default-box';

@Component({
  selector: 'den-test',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    CommonModule,
    LinkBox,
    DefaultBox
  ],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {

  linkItem: LinkBoxInterface = {
    imgSrc: 'assets/icons/flutter.svg',
    id: 14,
    cols: 1,
    rows: 1,
    type: 'link',
    colors: ['#0553B1']
  };

  gridItems: any[] = [
    // { id: 1, cols: 2, rows: 1, },

    // { id: 3, cols: 1, rows: 2, },

    // { id: 5, cols: 1, rows: 1, },
    // { id: 6, cols: 1, rows: 2, },
    // { id: 7, cols: 2, rows: 1, },
    // { id: 8, cols: 1, rows: 1, },
    // { id: 9, cols: 2, rows: 1, },
    // { id: 10, cols: 2, rows: 1, },
    { id: 2, cols: 1, rows: 1, type: 'link', colors: ['#5C44E4', '#8514F5', '#E90464', '#F11653'], imgSrc: "assets/icons/angular.svg" },
    { id: 4, cols: 1, rows: 1, type: 'link', colors: ['#1a1a1a'], imgSrc: 'assets/icons/supabase.svg' },

    { id: 15, cols: 1, rows: 1, type: 'link', colors: ['#1a1a1a'], imgSrc: 'assets/icons/figma.svg' },
    { id: 18, cols: 1, rows: 1, type: 'link', colors: ['#1a1a1a'], imgSrc: 'assets/icons/github.svg' },
    {
      imgSrc: 'assets/icons/flutter.svg',
      id: 14,
      cols: 1,
      rows: 1,
      type: 'link',
      colors: ['#0553B1']
    },
    { id: 16, cols: 1, rows: 1, type: 'link', colors: ['#d9e2ed'], imgSrc: 'assets/icons/postgres.png' },
    { id: 17, cols: 1, rows: 1, type: 'link', colors: ['#FDFCFB'], imgSrc: 'assets/icons/firebase.svg' },

    { id: 18, cols: 1, rows: 1, type: 'link', colors: ['#FDFCFB'], imgSrc: 'assets/icons/html.svg' },
    { id: 18, cols: 1, rows: 1, type: 'link', colors: ['#FDFCFB'], imgSrc: 'assets/icons/css.svg' },
    { id: 18, cols: 1, rows: 1, type: 'link', colors: ['#FDFCFB'], imgSrc: 'assets/icons/photoshop.svg' },
  ];

  numberOfColumns = 2;
  paddingInRem = 1;
  gapInRem = 1;

  constructor(private breakpointObserver: BreakpointObserver) {
    const mediumBreakpoint = '(min-width: 768px)';
    const largeBreakpoint = '(min-width: 1024px)';

    this.breakpointObserver.observe([
      mediumBreakpoint,
      largeBreakpoint
    ]).subscribe(result => {
      const isLargeScreen = result.breakpoints[largeBreakpoint];
      const isMediumScreen = result.breakpoints[mediumBreakpoint];

      if (isMediumScreen) {
        this.numberOfColumns = 4;
      } else {
        this.numberOfColumns = 2;
      }

      if (isLargeScreen) {
        this.paddingInRem = 12;
      } else if (isMediumScreen) {
        this.paddingInRem = 2.5;
      } else {
        this.paddingInRem = 1;
      }
    });
  }

  get totalGap(): string {
    return `${(this.numberOfColumns - 1) * this.gapInRem}rem`;
  }

  get totalPadding(): string {
    return `${this.paddingInRem * 2}rem`;
  }

  isLinkBox(item: BoxInterface | LinkBoxInterface): item is LinkBoxInterface {
    return 'link' in item || 'colors' in item || 'imgSrc' in item;
  }

  getType(item: BoxInterface): string | undefined {
    return item.type;
  }

}