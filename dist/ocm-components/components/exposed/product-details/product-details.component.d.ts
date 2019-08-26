import { EventEmitter, ChangeDetectorRef, AfterViewChecked, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyerProduct, LineItem, ListSpec } from '@ordercloud/angular-sdk';
import { QuantityLimits } from '../../../models/quantity-limits';
import { FullSpecOption } from '../../../models/full-spec-option.interface';
export declare class OCMProductDetails implements OnChanges, AfterViewChecked {
    private changeDetectorRef;
    specs: ListSpec;
    product: BuyerProduct;
    isFavorite: boolean;
    quantityLimits: QuantityLimits;
    addToCartEvent: EventEmitter<LineItem<any, any, any>>;
    setIsFavorite: EventEmitter<boolean>;
    quantity: number;
    quantityInputReady: boolean;
    specSelections: FullSpecOption[];
    relatedProducts$: Observable<BuyerProduct[]>;
    imageUrls: string[];
    isOrderable: boolean;
    hasPrice: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef);
    ngOnChanges(): void;
    addToCart(): void;
    getTotalPrice(): number;
    totalSpecMarkup(unitPrice: number, quantity: number): number;
    singleSpecMarkup(unitPrice: number, quantity: number, spec: FullSpecOption): number;
    getImageUrls(): any;
    ngAfterViewChecked(): void;
}
