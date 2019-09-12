import { Component, Input, OnInit } from '@angular/core';
import { Order, ListLineItem } from '@ordercloud/angular-sdk';
import { OCMComponent } from '../shopper-context';
import { QuantityLimits } from '../../models/quantity-limits';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class OCMCart extends OCMComponent implements OnInit {
  @Input() quantityLimits: QuantityLimits[];
  @Input() order: Order;
  @Input() lineItems: ListLineItem;

  ngOnInit() {}

  toProductList() {
    this.context.routeActions.toProductList();
  }

  toCheckout() {
    this.context.routeActions.toCheckout();
  }

  emptyCart() {
    this.context.cartActions.emptyCart();
  }
}
