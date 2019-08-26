import { EventEmitter } from '@angular/core';
import { LineItem, ListLineItem } from '@ordercloud/angular-sdk';
import { QuantityLimits } from '../../../models/quantity-limits';
export declare class OCMLineitemTable {
    closeIcon: import("@fortawesome/fontawesome-common-types").IconDefinition;
    lineItems: ListLineItem;
    readOnly: boolean;
    quantityLimits: QuantityLimits[];
    deleteLineItem: EventEmitter<{
        lineItemID: string;
    }>;
    updateQuantity: EventEmitter<{
        lineItemID: string;
        quantity: number;
    }>;
    navigateToProductDetails: EventEmitter<{
        productID: string;
    }>;
    constructor();
    log(object: any): void;
    removeLineItem(lineItemID: string): void;
    changeQuantity(lineItemID: string, quantity: number): void;
    getImageUrl(lineItemID: string): any;
    getLineItem(lineItemID: string): LineItem;
}
