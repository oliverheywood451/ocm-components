import { Component, Input, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';
import { BuyerProduct } from '@ordercloud/angular-sdk';
import { find as _find, get as _get, map as _map, without as _without } from 'lodash';
import { OCMComponent } from '../shopper-context';
import { QuantityLimits } from '../../models/quantity-limits';

@Component({
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OCMProductCard extends OCMComponent implements OnInit, OnChanges {
  @Input() product: BuyerProduct = {
    PriceSchedule: {},
    xp: { Images: [] },
  };
  @Input() quantityLimits: QuantityLimits = {
    inventory: 0,
    maxPerOrder: 0,
    minPerOrder: 0,
    restrictedQuantities: [],
  };

  quantity: number;
  shouldDisplayAddToCart: boolean;
  isViewOnlyProduct: boolean;
  hasSpecs: boolean;
  favoriteProducts: string[] = [];

  ngOnChanges() {
    this.isViewOnlyProduct = !this.product.PriceSchedule;
    this.hasSpecs = this.product.SpecCount > 0;
    this.context.currentUser.onFavoriteProductsChange((productIDs) => (this.favoriteProducts = productIDs));
  }

  ngOnInit() {}

  addToCart() {
    this.context.cartActions.addToCart({ ProductID: this.product.ID, Quantity: this.quantity });
  }

  getImageUrl() {
    const host = 'https://s3.dualstack.us-east-1.amazonaws.com/staticcintas.eretailing.com/images/product';
    const images = this.product.xp.Images || [];
    const result = _map(images, (img) => {
      return img.Url.replace('{url}', host);
    });
    const filtered = _without(result, undefined);
    return filtered.length > 0 ? filtered[0] : 'http://placehold.it/300x300';
  }

  toDetails() {
    this.context.routeActions.toProductDetails(this.product.ID);
  }

  isFavorite(): boolean {
    return this.favoriteProducts.includes(this.product.ID);
  }

  setIsFavorite(isFavorite: boolean): void {
    this.context.currentUser.setIsFavoriteProduct(isFavorite, this.product.ID);
  }

  setQuantity(qty: number) {
    this.quantity = qty;
  }
}
