import { EventEmitter } from '@angular/core';
import { BuyerProduct } from '@ordercloud/angular-sdk';
import { QuantityLimits } from '../../../models/quantity-limits';
export declare class OCMProductCarousel {
    products: BuyerProduct[];
    displayTitle: string;
    quantityLimits: QuantityLimits[];
    favoriteProducts: string[];
    setIsFavorite: EventEmitter<{
        isFavorite: boolean;
        productID: string;
    }>;
    navigateToProductDetails: EventEmitter<{
        productID: string;
    }>;
    index: number;
    rowLength: number;
    faAngleLeft: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faAngleRight: import("@fortawesome/fontawesome-common-types").IconDefinition;
    left(): void;
    right(): void;
    getProducts(): BuyerProduct[];
    isFavorite(productID: string): boolean;
    setIsFavoriteEvent(isFavorite: boolean, productID: string): void;
    toDetails(productID: string): void;
}
