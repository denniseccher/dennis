import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CapitalPipe } from '../../pipes/capital-pipe';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'den-navbar',
  imports: [CommonModule, CapitalPipe, TranslatePipe],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements AfterViewInit {
  tabs = ['aboutme', 'projects', 'skills', 'contacts'];
  selectedIndex = 0;
  indicatorWidth = 0;
  indicatorTranslate = 0;
  private firstRender = true;

  @ViewChildren('tabButton', { read: ElementRef }) tabButtons!: QueryList<ElementRef>;

  constructor(private translate: TranslateService) {}

  ngAfterViewInit() {
    this.recalculateIndicator();

    this.translate.onLangChange.subscribe(() => {
      setTimeout(() => this.recalculateIndicator(), 0);
    });
  }

  selectTab(index: number) {
    this.selectedIndex = index;
    this.recalculateIndicator();
  }

  private recalculateIndicator() {
    setTimeout(() => {
      const selectedButton = this.tabButtons.get(this.selectedIndex)?.nativeElement;
      if (selectedButton) {
        this.indicatorWidth = selectedButton.offsetWidth;
        this.indicatorTranslate = selectedButton.offsetLeft;

        if (this.firstRender) {
          const indicatorEl = document.querySelector('.indicator') as HTMLElement;
          if (indicatorEl) {
            indicatorEl.style.transition = 'none';
            requestAnimationFrame(() => {
              indicatorEl.style.transition =
                'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });
          }
          this.firstRender = false;
        }
      }
    });
  }
}
