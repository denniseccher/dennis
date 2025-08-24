import { Component, Input } from '@angular/core';
import { LinkBox } from '../boxes/link-box/link-box';
import { DefaultBox } from '../boxes/default-box/default-box';
import { BoxInterface } from '../../interfaces/boxes/box';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ProjectBox } from '../boxes/project-box/project-box';

@Component({
  selector: 'den-grid',
  imports: [LinkBox, DefaultBox, ProjectBox],
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
})
export class Grid {
  @Input({ required: true }) gridItems!: any[];

  numberOfColumns = 2;
  paddingInRem = 1;
  gapInRem = 1;

  constructor(private breakpointObserver: BreakpointObserver) {
    const mediumBreakpoint = '(min-width: 768px)';
    const largeBreakpoint = '(min-width: 1024px)';

    this.breakpointObserver
      .observe([mediumBreakpoint, largeBreakpoint])
      .subscribe((result) => {
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

  getType(item: BoxInterface): string | undefined {
    return item.type;
  }
}
