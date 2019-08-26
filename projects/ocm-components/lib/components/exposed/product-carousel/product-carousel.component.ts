import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { BuyerProduct } from '@ordercloud/angular-sdk';
import { QuantityLimits } from '../../../models/quantity-limits';

@Component({
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class OCMProductCarousel {
  @Input() products: BuyerProduct[] = [];
  @Input() displayTitle: string;
  @Input() quantityLimits: QuantityLimits[];
  @Input() favoriteProducts: string[];
  @Output() setIsFavorite = new EventEmitter<{isFavorite: boolean, productID: string}>();
  @Output() navigateToProductDetails = new EventEmitter<{productID: string}>();

  index = 0;
  rowLength = 4;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  left(): void {
    this.index -= this.rowLength;
  }

  right(): void {
    this.index += this.rowLength;
  }

  getProducts(): BuyerProduct[] {
    return this.products.slice(this.index, this.index + this.rowLength);
  }

  isFavorite(productID: string): boolean {
    return this.favoriteProducts.includes(productID);
  }

  setIsFavoriteEvent(isFavorite: boolean, productID: string): void {
    this.setIsFavorite.emit({ isFavorite, productID });
  }

  toDetails(productID: string): void {
    this.navigateToProductDetails.emit({ productID });
  }
}
