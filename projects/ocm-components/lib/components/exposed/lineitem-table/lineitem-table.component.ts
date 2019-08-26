import { Component, Output, Input, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { LineItem, ListLineItem } from '@ordercloud/angular-sdk';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { get as _get } from 'lodash';
import { QuantityLimits } from '../../../models/quantity-limits';

@Component({
  selector: 'ocm-lineitem-table',
  templateUrl: './lineitem-table.component.html',
  styleUrls: ['./lineitem-table.component.scss'],
})
export class OCMLineitemTable {
  closeIcon = faTimes;
  @Input() lineItems: ListLineItem;
  @Input() readOnly: boolean;
  @Input() quantityLimits: QuantityLimits[];
  @Output() deleteLineItem = new EventEmitter<{ lineItemID: string }>();
  @Output() updateQuantity = new EventEmitter<{ lineItemID: string; quantity: number }>();
  @Output() navigateToProductDetails = new EventEmitter<{ productID: string }>();

  constructor() {}

  log(object: any) {
    debugger;
    console.log(object);
    console.log(this.lineItems);
  }

  removeLineItem(lineItemID: string) {
    this.deleteLineItem.emit({ lineItemID });
  }

  changeQuantity(lineItemID: string, quantity: number) {
    this.getLineItem(lineItemID).Quantity = quantity;
    this.updateQuantity.emit({ lineItemID, quantity });
  }

  getImageUrl(lineItemID: string) {
    return _get(this.getLineItem(lineItemID), 'Product.xp.Images[0].Url', 'http://placehold.it/300x300');
  }

  getLineItem(lineItemID: string): LineItem {
    return this.lineItems.Items.find((li) => li.ID === lineItemID);
  }
}
