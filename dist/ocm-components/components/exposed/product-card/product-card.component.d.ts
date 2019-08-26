import { EventEmitter, OnInit, OnChanges } from '@angular/core';
import { BuyerProduct, LineItem } from '@ordercloud/angular-sdk';
import { QuantityLimits } from '../../../models/quantity-limits';
export declare class OCMProductCard implements OnInit, OnChanges {
    product: BuyerProduct;
    isFavorite: boolean;
    quantityLimits: QuantityLimits;
    addedToCart: EventEmitter<LineItem<any, any, any>>;
    setIsFavorite: EventEmitter<boolean>;
    routeToProductDetails: EventEmitter<string>;
    quantity: number;
    shouldDisplayAddToCart: boolean;
    isViewOnlyProduct: boolean;
    isSetFavoriteUsed: boolean;
    hasSpecs: boolean;
    ngOnChanges(): void;
    ngOnInit(): void;
    addToCart(li: LineItem): void;
    getImageUrl(): any;
    toDetails(): void;
}
