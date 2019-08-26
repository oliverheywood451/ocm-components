import { Component, Input, EventEmitter, Output, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';
import { BuyerProduct, LineItem } from '@ordercloud/angular-sdk';
import { find as _find, get as _get, map as _map, without as _without } from 'lodash';
import { QuantityLimits } from '../../../models/quantity-limits';

@Component({
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OCMProductCard implements OnInit, OnChanges {
  @Input() product: BuyerProduct = {
    PriceSchedule: {},
    xp: { Images: [] },
  };
  @Input() isFavorite: boolean;
  @Input() quantityLimits: QuantityLimits = {
    inventory: 0,
    maxPerOrder: 0,
    minPerOrder: 0,
    restrictedQuantities: [],
  };
  @Output() addedToCart = new EventEmitter<LineItem>();
  @Output() setIsFavorite = new EventEmitter<boolean>();
  @Output() routeToProductDetails = new EventEmitter<string>();

  quantity: number;
  shouldDisplayAddToCart: boolean;
  isViewOnlyProduct: boolean;
  isSetFavoriteUsed: boolean;
  hasSpecs: boolean;

  ngOnChanges() {
    this.isSetFavoriteUsed = this.setIsFavorite.observers.length > 0;
    const isAddedToCartUsed = this.addedToCart.observers.length > 0;
    this.isViewOnlyProduct = !this.product.PriceSchedule;
    this.hasSpecs = this.product.SpecCount > 0;
    this.shouldDisplayAddToCart = isAddedToCartUsed && !this.isViewOnlyProduct && !this.hasSpecs;
  }
  ngOnInit() {
    /**
     * this will be true if the parent component
     * is wired up to listen to the outputted event
     */
  }

  addToCart(li: LineItem) {
    this.addedToCart.emit(li);
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
    this.routeToProductDetails.emit(this.product.ID);
  }
}
