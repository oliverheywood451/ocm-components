import { Component, Input } from '@angular/core';
import { LineItem, ListLineItem } from '@ordercloud/angular-sdk';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { get as _get } from 'lodash';
import { OCMComponent } from '../shopper-context';
import { QuantityLimits } from '../../models/quantity-limits';

@Component({
  templateUrl: './lineitem-table.component.html',
  styleUrls: ['./lineitem-table.component.scss'],
})
export class OCMLineitemTable extends OCMComponent {
  closeIcon = faTimes;
  @Input() lineItems: ListLineItem;
  @Input() readOnly: boolean;
  @Input() quantityLimits: QuantityLimits[];

  removeLineItem(lineItemID: string) {
    this.context.cartActions.removeLineItem(lineItemID);
  }

  toProductDetails(productID: string) {
    this.context.routeActions.toProductDetails(productID);
  }

  changeQuantity(lineItemID: string, quantity: number) {
    this.getLineItem(lineItemID).Quantity = quantity;
    this.context.cartActions.updateQuantity(lineItemID, quantity);
  }

  getImageUrl(lineItemID: string) {
    return _get(this.getLineItem(lineItemID), 'Product.xp.Images[0].Url', 'http://placehold.it/300x300');
  }

  getLineItem(lineItemID: string): LineItem {
    return this.lineItems.Items.find((li) => li.ID === lineItemID);
  }
}
