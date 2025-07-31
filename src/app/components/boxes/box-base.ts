import { Directive, HostBinding, Input } from '@angular/core';
import { BoxInterface } from '../../interfaces/boxes/box';

@Directive()
export abstract class BoxBase {
  @Input({ required: true }) cols!: number;
  @Input({ required: true }) rows!: number;
  @Input({ required: true }) box!: BoxInterface;

  @HostBinding('class')
  readonly hostClasses = 'box rounded-3xl flex justify-center items-center';

  @HostBinding('style.grid-column')
  get columnSpan() {
    return this.gridColumnStyle;
  }

  @HostBinding('style.grid-row')
  get rowSpan() {
    return this.gridRowStyle;
  }

  @HostBinding('style.display')
  readonly display = 'block';

  @HostBinding('style.overflow')
  readonly overflow = 'hidden';

  get gridColumnStyle(): string {
    return `span ${this.cols}`;
  }

  get gridRowStyle(): string {
    return `span ${this.rows}`;
  }
}