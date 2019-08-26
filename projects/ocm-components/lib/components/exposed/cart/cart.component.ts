import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Order, ListLineItem } from '@ordercloud/angular-sdk';
import { QuantityLimits } from '../../../models/quantity-limits';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class OCMCart implements OnInit {
  @Input() order: Order;
  @Input() lineItems: ListLineItem;
  @Input() quantityLimits: QuantityLimits[];
  @Output() emptyCart = new EventEmitter<void>();
  @Output() deleteLineItem = new EventEmitter<{ lineItemID: string }>();
  @Output() updateQuantity = new EventEmitter<{ lineItemID: string; quantity: number }>();
  @Output() navigateToProductDetails = new EventEmitter<{ productID: string }>();
  @Output() navigateToProductList = new EventEmitter<void>();
  @Output() navigateToCheckout = new EventEmitter<void>();

  ngOnInit() {
  }

  log(object: any) {
    console.log(object);
    console.log(this.lineItems);
  }
}
