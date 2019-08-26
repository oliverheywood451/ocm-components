import { Component, Input, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { fromEvent } from 'rxjs';

@Component({
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class OCMImageGallery implements OnInit {
  @Input() imgUrls: string[] = [];

  // gallerySize can be changed and the component logic + behavior will all work. However, the UI may look wonky.
  private readonly gallerySize = 5;
  selectedIndex = 0;
  startIndex = 0;
  endIndex = this.gallerySize - 1;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  isResponsiveView: boolean;

  constructor() {
    this.isResponsiveView = window.innerWidth > 900;
  }
  ngOnInit() {
    fromEvent(window, 'resize').subscribe(() => this.onResize());
  }

  onResize() {
    this.isResponsiveView = window.innerWidth > 900;
  }

  select(url: string): void {
    this.selectedIndex = this.imgUrls.indexOf(url);
  }

  isSelected(url: string): boolean {
    return this.imgUrls.indexOf(url) === this.selectedIndex;
  }

  getGallery(): string[] {
    return this.imgUrls.slice(this.startIndex, this.endIndex + 1);
  }

  forward() {
    this.selectedIndex++;
    if (this.selectedIndex > Math.min(this.endIndex, this.imgUrls.length - 1)) {
      // move images over one
      this.startIndex++;
      this.endIndex++;
      if (this.selectedIndex === this.imgUrls.length) {
        // cycle to the beginning
        this.selectedIndex = 0;
        this.startIndex = 0;
        this.endIndex = this.gallerySize - 1;
      }
    }
  }

  backward() {
    this.selectedIndex--;
    if (this.selectedIndex < this.startIndex) {
      // move images over one
      this.startIndex--;
      this.endIndex--;
      if (this.selectedIndex === -1) {
        // cycle to the end
        this.selectedIndex = this.imgUrls.length - 1;
        this.endIndex = this.imgUrls.length - 1;
        this.startIndex = Math.max(this.imgUrls.length - this.gallerySize, 0);
      }
    }
  }
}
