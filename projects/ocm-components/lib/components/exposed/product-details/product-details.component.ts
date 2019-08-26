import { Component, Input, Output, EventEmitter, ChangeDetectorRef, AfterViewChecked, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyerProduct, BuyerSpec, LineItem, ListSpec } from '@ordercloud/angular-sdk';
import { find as _find, difference as _difference, minBy as _minBy, has as _has } from 'lodash';
import { QuantityLimits } from '../../../models/quantity-limits';
import { FullSpecOption } from '../../../models/full-spec-option.interface';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class OCMProductDetails implements OnChanges, AfterViewChecked {
  @Input() specs: ListSpec;
  @Input() product: BuyerProduct;
  @Input() isFavorite: boolean;
  @Input() quantityLimits: QuantityLimits;
  @Output() addToCartEvent = new EventEmitter<LineItem>();
  @Output() setIsFavorite = new EventEmitter<boolean>();

  quantity: number;
  quantityInputReady = false;
  specSelections: FullSpecOption[] = [];
  relatedProducts$: Observable<BuyerProduct[]>;
  imageUrls: string[] = [];
  isOrderable = false;
  hasPrice = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnChanges() {
    if (!this.product) return;
    // products without a price schedule are view-only.
    this.isOrderable = !!this.product.PriceSchedule;
    // free products dont need to display a price.
    this.hasPrice = _has(this.product, 'PriceSchedule.PriceBreaks[0].Price');
    this.imageUrls = this.getImageUrls();
  }

  addToCart(): void {
    const Specs = this.specSelections.map((o) => ({
      SpecID: o.SpecID,
      OptionID: o.ID,
      Value: o.Value,
    }));
    this.addToCartEvent.emit({
      ProductID: this.product.ID,
      Quantity: this.quantity,
      Specs,
    });
  }

  getTotalPrice(): number {
    // In OC, the price per item can depend on the quantity ordered. This info is stored on the PriceSchedule as a list of PriceBreaks.
    // Find the PriceBreak with the highest Quantity less than the quantity ordered. The price on that price break
    // is the cost per item.
    if (!this.quantity) {
      return null;
    }
    if (!this.hasPrice) {
      return 0;
    }
    const priceBreaks = this.product.PriceSchedule.PriceBreaks;
    const startingBreak = _minBy(priceBreaks, 'Quantity');

    const selectedBreak = priceBreaks.reduce((current, candidate) => {
      return candidate.Quantity > current.Quantity && candidate.Quantity <= this.quantity ? candidate : current;
    }, startingBreak);
    const markup = this.totalSpecMarkup(selectedBreak.Price, this.quantity);

    return (selectedBreak.Price + markup) * this.quantity;
  }

  totalSpecMarkup(unitPrice: number, quantity: number): number {
    const markups = this.specSelections.map((s) => this.singleSpecMarkup(unitPrice, quantity, s));
    return markups.reduce((x, acc) => x + acc, 0); // sum
  }

  singleSpecMarkup(unitPrice: number, quantity: number, spec: FullSpecOption): number {
    switch (spec.PriceMarkupType) {
      case 'NoMarkup':
        return 0;
      case 'AmountPerQuantity':
        return spec.PriceMarkup;
      case 'AmountTotal':
        return spec.PriceMarkup / quantity;
      case 'Percentage':
        return spec.PriceMarkup * unitPrice * 0.01;
    }
  }

  getImageUrls() {
    const host = 'https://s3.dualstack.us-east-1.amazonaws.com/staticcintas.eretailing.com/images/product';
    const images = this.product.xp.Images || [];
    return images.map((i) => i.Url.replace('{url}', host));
  }

  ngAfterViewChecked() {
    // This manually triggers angular's change detection cycle and avoids the imfamous
    // "Expression has changed after it was checked" error.
    // Caused by something in spec form
    this.changeDetectorRef.detectChanges();
  }
}
