import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Navbar } from '../../components/navbar/navbar';
import { Box } from '../../components/box/box';

export interface GridItem {
  id: number;
  cols: number;
  rows: number;
  x?: number;
  y?: number;
  content?: string | undefined
}

@Component({
  selector: 'den-test',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    CommonModule,
    Box
  ],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {
  gridItems: GridItem[] = [
    { id: 1, cols: 2, rows: 1, x: 1, y: 1 },
    { id: 2, cols: 1, rows: 1, x: 3, y: 1 },
    { id: 3, cols: 1, rows: 2, x: 4, y: 1 },
    { id: 4, cols: 1, rows: 1, x: 3, y: 2 },
    { id: 5, cols: 1, rows: 1, x: 4, y: 3 },
    { id: 6, cols: 1, rows: 2, x: 1, y: 3 },
    { id: 7, cols: 2, rows: 1, x: 1, y: 4 },
    { id: 8, cols: 1, rows: 1, x: 3, y: 4 },
    { id: 9, cols: 2, rows: 1, x: 3, y: 5 },
    { id: 10, cols: 2, rows: 1, x: 2, y: 6 }
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
}