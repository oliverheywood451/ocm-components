/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { map as _map, without as _without } from 'lodash';
export class OCMProductCard {
    constructor() {
        this.product = {
            PriceSchedule: {},
            xp: { Images: [] },
        };
        this.quantityLimits = {
            inventory: 0,
            maxPerOrder: 0,
            minPerOrder: 0,
            restrictedQuantities: [],
        };
        this.addedToCart = new EventEmitter();
        this.setIsFavorite = new EventEmitter();
        this.routeToProductDetails = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.isSetFavoriteUsed = this.setIsFavorite.observers.length > 0;
        /** @type {?} */
        const isAddedToCartUsed = this.addedToCart.observers.length > 0;
        this.isViewOnlyProduct = !this.product.PriceSchedule;
        this.hasSpecs = this.product.SpecCount > 0;
        this.shouldDisplayAddToCart = isAddedToCartUsed && !this.isViewOnlyProduct && !this.hasSpecs;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /**
         * this will be true if the parent component
         * is wired up to listen to the outputted event
         */
    }
    /**
     * @param {?} li
     * @return {?}
     */
    addToCart(li) {
        this.addedToCart.emit(li);
    }
    /**
     * @return {?}
     */
    getImageUrl() {
        /** @type {?} */
        const host = 'https://s3.dualstack.us-east-1.amazonaws.com/staticcintas.eretailing.com/images/product';
        /** @type {?} */
        const images = this.product.xp.Images || [];
        /** @type {?} */
        const result = _map(images, (/**
         * @param {?} img
         * @return {?}
         */
        (img) => {
            return img.Url.replace('{url}', host);
        }));
        /** @type {?} */
        const filtered = _without(result, undefined);
        return filtered.length > 0 ? filtered[0] : 'http://placehold.it/300x300';
    }
    /**
     * @return {?}
     */
    toDetails() {
        this.routeToProductDetails.emit(this.product.ID);
    }
}
OCMProductCard.decorators = [
    { type: Component, args: [{
                template: "<div class=\"card mb-5 w-100 border-hover\">\r\n  <div class=\"ribbon ribbon-top-right bg-light\">\r\n    <ocm-toggle-favorite\r\n      *ngIf=\"isSetFavoriteUsed\"\r\n      title=\"Favorite\"\r\n      (click)=\"$event.stopPropagation()\"\r\n      [favorite]=\"isFavorite\"\r\n      (favoriteChanged)=\"setIsFavorite.emit($event)\"\r\n    ></ocm-toggle-favorite>\r\n  </div>\r\n  <img class=\"card-img-top img-fluid flex-shrink-0\" (click)=\"toDetails()\" [src]=\"getImageUrl()\" alt=\"{{ product.ID }}\" />\r\n  <div class=\"card-body d-flex flex-column justify-content-between bg-light\">\r\n    <h5 class=\"card-title\" title=\"{{ product.Name }}\">{{ product.Name }}</h5>\r\n    <p class=\"card-text text-muted\" [innerHtml]=\"product.ID\">\r\n      {{ product.ID }}\r\n    </p>\r\n    <div class=\"d-flex flex-wrap justify-content-between align-items-center\">\r\n      <p class=\"card-text mb-0\" *ngIf=\"product.PriceSchedule?.PriceBreaks\">\r\n        {{ (product?.PriceSchedule?.PriceBreaks)[0]?.Price || 0 | currency }}\r\n      </p>\r\n      <label for=\"quantity\" class=\"sr-only\">Quantity</label>\r\n      <ocm-quantity-input\r\n        class=\"w-50\"\r\n        id=\"quantity\"\r\n        [limits]=\"quantityLimits\"\r\n        [existingQty]=\"null\"\r\n        (qtyChange)=\"quantity = $event.detail\"\r\n      >\r\n      </ocm-quantity-input>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <button\r\n      *ngIf=\"shouldDisplayAddToCart\"\r\n      (click)=\"$event.stopPropagation()\"\r\n      class=\"btn btn-primary btn-block small\"\r\n      type=\"submit\"\r\n      (click)=\"addToCart($event)\"\r\n    >\r\n      Add <span class=\"d-md-none d-lg-inline\"> to Cart</span>\r\n    </button>\r\n    <button *ngIf=\"shouldDisplayAddToCart\" (click)=\"$event.stopPropagation()\" class=\"btn btn-primary btn-block small\" type=\"submit\">\r\n      Add <span class=\"d-md-none d-lg-inline\"> to Cart</span>\r\n    </button>\r\n    <button *ngIf=\"isViewOnlyProduct\" (click)=\"toDetails()\" class=\"btn btn-default btn-block btn-outline-dark\">\r\n      View\r\n      <span class=\"d-sm-none d-lg-inline\">Product</span>\r\n    </button>\r\n    <button *ngIf=\"hasSpecs\" (click)=\"toDetails()\" class=\"btn btn-primary btn-block small\">\r\n      Select\r\n      <span class=\"d-sm-none d-lg-inline\">Specs</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
OCMProductCard.propDecorators = {
    product: [{ type: Input }],
    isFavorite: [{ type: Input }],
    quantityLimits: [{ type: Input }],
    addedToCart: [{ type: Output }],
    setIsFavorite: [{ type: Output }],
    routeToProductDetails: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    OCMProductCard.prototype.product;
    /** @type {?} */
    OCMProductCard.prototype.isFavorite;
    /** @type {?} */
    OCMProductCard.prototype.quantityLimits;
    /** @type {?} */
    OCMProductCard.prototype.addedToCart;
    /** @type {?} */
    OCMProductCard.prototype.setIsFavorite;
    /** @type {?} */
    OCMProductCard.prototype.routeToProductDetails;
    /** @type {?} */
    OCMProductCard.prototype.quantity;
    /** @type {?} */
    OCMProductCard.prototype.shouldDisplayAddToCart;
    /** @type {?} */
    OCMProductCard.prototype.isViewOnlyProduct;
    /** @type {?} */
    OCMProductCard.prototype.isSetFavoriteUsed;
    /** @type {?} */
    OCMProductCard.prototype.hasSpecs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29jbS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9leHBvc2VkL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLGlCQUFpQixFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE9BQU8sRUFBOEIsR0FBRyxJQUFJLElBQUksRUFBRSxPQUFPLElBQUksUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBUXRGLE1BQU0sT0FBTyxjQUFjO0lBTDNCO1FBTVcsWUFBTyxHQUFpQjtZQUMvQixhQUFhLEVBQUUsRUFBRTtZQUNqQixFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1NBQ25CLENBQUM7UUFFTyxtQkFBYyxHQUFtQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQztZQUNaLFdBQVcsRUFBRSxDQUFDO1lBQ2QsV0FBVyxFQUFFLENBQUM7WUFDZCxvQkFBb0IsRUFBRSxFQUFFO1NBQ3pCLENBQUM7UUFDUSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDM0Msa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzVDLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUF1Qy9ELENBQUM7Ozs7SUEvQkMsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztjQUMzRCxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUMvRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQy9GLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ047OztXQUdHO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsRUFBWTtRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsV0FBVzs7Y0FDSCxJQUFJLEdBQUcseUZBQXlGOztjQUNoRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUU7O2NBQ3JDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTs7OztRQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDbEMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDOztjQUNJLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQztRQUM1QyxPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixDQUFDO0lBQzNFLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7OztZQXpERixTQUFTLFNBQUM7Z0JBQ1QsbTJFQUE0QztnQkFFNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7c0JBRUUsS0FBSzt5QkFJTCxLQUFLOzZCQUNMLEtBQUs7MEJBTUwsTUFBTTs0QkFDTixNQUFNO29DQUNOLE1BQU07Ozs7SUFiUCxpQ0FHRTs7SUFDRixvQ0FBNkI7O0lBQzdCLHdDQUtFOztJQUNGLHFDQUFxRDs7SUFDckQsdUNBQXNEOztJQUN0RCwrQ0FBNkQ7O0lBRTdELGtDQUFpQjs7SUFDakIsZ0RBQWdDOztJQUNoQywyQ0FBMkI7O0lBQzNCLDJDQUEyQjs7SUFDM0Isa0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCdXllclByb2R1Y3QsIExpbmVJdGVtIH0gZnJvbSAnQG9yZGVyY2xvdWQvYW5ndWxhci1zZGsnO1xyXG5pbXBvcnQgeyBmaW5kIGFzIF9maW5kLCBnZXQgYXMgX2dldCwgbWFwIGFzIF9tYXAsIHdpdGhvdXQgYXMgX3dpdGhvdXQgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBRdWFudGl0eUxpbWl0cyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9xdWFudGl0eS1saW1pdHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE9DTVByb2R1Y3RDYXJkIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHByb2R1Y3Q6IEJ1eWVyUHJvZHVjdCA9IHtcclxuICAgIFByaWNlU2NoZWR1bGU6IHt9LFxyXG4gICAgeHA6IHsgSW1hZ2VzOiBbXSB9LFxyXG4gIH07XHJcbiAgQElucHV0KCkgaXNGYXZvcml0ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBxdWFudGl0eUxpbWl0czogUXVhbnRpdHlMaW1pdHMgPSB7XHJcbiAgICBpbnZlbnRvcnk6IDAsXHJcbiAgICBtYXhQZXJPcmRlcjogMCxcclxuICAgIG1pblBlck9yZGVyOiAwLFxyXG4gICAgcmVzdHJpY3RlZFF1YW50aXRpZXM6IFtdLFxyXG4gIH07XHJcbiAgQE91dHB1dCgpIGFkZGVkVG9DYXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxMaW5lSXRlbT4oKTtcclxuICBAT3V0cHV0KCkgc2V0SXNGYXZvcml0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgcm91dGVUb1Byb2R1Y3REZXRhaWxzID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgc2hvdWxkRGlzcGxheUFkZFRvQ2FydDogYm9vbGVhbjtcclxuICBpc1ZpZXdPbmx5UHJvZHVjdDogYm9vbGVhbjtcclxuICBpc1NldEZhdm9yaXRlVXNlZDogYm9vbGVhbjtcclxuICBoYXNTcGVjczogYm9vbGVhbjtcclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmlzU2V0RmF2b3JpdGVVc2VkID0gdGhpcy5zZXRJc0Zhdm9yaXRlLm9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgY29uc3QgaXNBZGRlZFRvQ2FydFVzZWQgPSB0aGlzLmFkZGVkVG9DYXJ0Lm9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgdGhpcy5pc1ZpZXdPbmx5UHJvZHVjdCA9ICF0aGlzLnByb2R1Y3QuUHJpY2VTY2hlZHVsZTtcclxuICAgIHRoaXMuaGFzU3BlY3MgPSB0aGlzLnByb2R1Y3QuU3BlY0NvdW50ID4gMDtcclxuICAgIHRoaXMuc2hvdWxkRGlzcGxheUFkZFRvQ2FydCA9IGlzQWRkZWRUb0NhcnRVc2VkICYmICF0aGlzLmlzVmlld09ubHlQcm9kdWN0ICYmICF0aGlzLmhhc1NwZWNzO1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8qKlxyXG4gICAgICogdGhpcyB3aWxsIGJlIHRydWUgaWYgdGhlIHBhcmVudCBjb21wb25lbnRcclxuICAgICAqIGlzIHdpcmVkIHVwIHRvIGxpc3RlbiB0byB0aGUgb3V0cHV0dGVkIGV2ZW50XHJcbiAgICAgKi9cclxuICB9XHJcblxyXG4gIGFkZFRvQ2FydChsaTogTGluZUl0ZW0pIHtcclxuICAgIHRoaXMuYWRkZWRUb0NhcnQuZW1pdChsaSk7XHJcbiAgfVxyXG5cclxuICBnZXRJbWFnZVVybCgpIHtcclxuICAgIGNvbnN0IGhvc3QgPSAnaHR0cHM6Ly9zMy5kdWFsc3RhY2sudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vc3RhdGljY2ludGFzLmVyZXRhaWxpbmcuY29tL2ltYWdlcy9wcm9kdWN0JztcclxuICAgIGNvbnN0IGltYWdlcyA9IHRoaXMucHJvZHVjdC54cC5JbWFnZXMgfHwgW107XHJcbiAgICBjb25zdCByZXN1bHQgPSBfbWFwKGltYWdlcywgKGltZykgPT4ge1xyXG4gICAgICByZXR1cm4gaW1nLlVybC5yZXBsYWNlKCd7dXJsfScsIGhvc3QpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IF93aXRob3V0KHJlc3VsdCwgdW5kZWZpbmVkKTtcclxuICAgIHJldHVybiBmaWx0ZXJlZC5sZW5ndGggPiAwID8gZmlsdGVyZWRbMF0gOiAnaHR0cDovL3BsYWNlaG9sZC5pdC8zMDB4MzAwJztcclxuICB9XHJcblxyXG4gIHRvRGV0YWlscygpIHtcclxuICAgIHRoaXMucm91dGVUb1Byb2R1Y3REZXRhaWxzLmVtaXQodGhpcy5wcm9kdWN0LklEKTtcclxuICB9XHJcbn1cclxuIl19