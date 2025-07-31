import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'den-navbar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements AfterViewInit {

  tabs = ['Tutto', 'Di me', 'Progetti', 'Contatti', '[dennis]'];
  selectedIndex = 0;
  indicatorWidth = 0;
  indicatorTranslate = 0;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateIndicatorOnLoad();
    });
  }

  selectTab(index: number, event: MouseEvent) {
    this.selectedIndex = index;
    const button = event.currentTarget as HTMLButtonElement;
    this.updateIndicator(button);

    console.log("Selezionato ", this.tabs[index])
  }

  private updateIndicatorOnLoad() {
    const buttons = this.el.nativeElement.querySelectorAll('.tab-button');
    if (buttons.length > this.selectedIndex) {
      const initialButton = buttons[this.selectedIndex] as HTMLButtonElement;
      this.updateIndicator(initialButton);
    }
  }

  private updateIndicator(button: HTMLButtonElement) {
    this.indicatorWidth = button.offsetWidth;
    this.indicatorTranslate = button.offsetLeft;
  }
}
