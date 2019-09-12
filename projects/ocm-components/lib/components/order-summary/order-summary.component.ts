import { Component, Input } from '@angular/core';
import { Order } from '@ordercloud/angular-sdk';
import { CurrencyPipe } from '@angular/common';
import { OCMComponent } from '../shopper-context';

@Component({
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OCMOrderSummary extends OCMComponent {
  @Input() order: Order;

  constructor() {
    super();
  }

  display(field) {
    if (!(this.order.xp && this.order.xp.AddOnsCalculated)) {
      return 'Calculated during checkout';
    }

    if (this.order[`${field}`] === 0) {
      return 'Free';
    }

    return new CurrencyPipe('en-US').transform(this.order[`${field}`]);
  }
}
