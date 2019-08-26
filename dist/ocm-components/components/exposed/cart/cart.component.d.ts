import { EventEmitter, OnInit } from '@angular/core';
import { Order, ListLineItem } from '@ordercloud/angular-sdk';
import { QuantityLimits } from '../../../models/quantity-limits';
export declare class OCMCart implements OnInit {
    order: Order;
    lineItems: ListLineItem;
    quantityLimits: QuantityLimits[];
    emptyCart: EventEmitter<void>;
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
    navigateToProductList: EventEmitter<void>;
    navigateToCheckout: EventEmitter<void>;
    ngOnInit(): void;
    log(object: any): void;
}
