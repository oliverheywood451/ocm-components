/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
export class OCMProductCarousel {
    constructor() {
        this.products = [];
        this.setIsFavorite = new EventEmitter();
        this.navigateToProductDetails = new EventEmitter();
        this.index = 0;
        this.rowLength = 4;
        this.faAngleLeft = faAngleLeft;
        this.faAngleRight = faAngleRight;
    }
    /**
     * @return {?}
     */
    left() {
        this.index -= this.rowLength;
    }
    /**
     * @return {?}
     */
    right() {
        this.index += this.rowLength;
    }
    /**
     * @return {?}
     */
    getProducts() {
        return this.products.slice(this.index, this.index + this.rowLength);
    }
    /**
     * @param {?} productID
     * @return {?}
     */
    isFavorite(productID) {
        return this.favoriteProducts.includes(productID);
    }
    /**
     * @param {?} isFavorite
     * @param {?} productID
     * @return {?}
     */
    setIsFavoriteEvent(isFavorite, productID) {
        this.setIsFavorite.emit({ isFavorite, productID });
    }
    /**
     * @param {?} productID
     * @return {?}
     */
    toDetails(productID) {
        this.navigateToProductDetails.emit({ productID });
    }
}
OCMProductCarousel.decorators = [
    { type: Component, args: [{
                template: "<h3 class=\"my-4 text-center\">{{ displayTitle }}</h3>\r\n<div class=\"row align-items-center\">\r\n  <div class=\"col-1 carousel-arrow\">\r\n    <fa-icon [icon]=\"faAngleLeft\"\r\n             *ngIf=\"index > 0\"\r\n             (click)=\"left()\"></fa-icon>\r\n  </div>\r\n  <div class=\"col-10 product-list-grid row d-flex align-items-stretch\">\r\n    <ocm-product-card *ngFor=\"let product of getProducts(); let i = index\"\r\n                      class=\"col-lg-3 col-md-4 col-sm-6 d-flex flex-grow-1 flex-shrink-1\"\r\n                      [product]=\"product\"\r\n                      [quantityLimits]=\"quantityLimits[i]\"\r\n                      [isFavorite]=\"isFavorite(product.ID)\"\r\n                      (setIsFavorite)=\"setIsFavoriteEvent($event.detail, product.ID)\"\r\n                      (routeToProductDetails)=\"toDetails($event.detail)\">\r\n    </ocm-product-card>\r\n  </div>\r\n  <div class=\"col-1 carousel-arrow\">\r\n    <fa-icon [icon]=\"faAngleRight\"\r\n             *ngIf=\"index <= products.length - rowLength - 1\"\r\n             (click)=\"right()\"></fa-icon>\r\n  </div>\r\n</div>",
                styles: [""]
            }] }
];
OCMProductCarousel.propDecorators = {
    products: [{ type: Input }],
    displayTitle: [{ type: Input }],
    quantityLimits: [{ type: Input }],
    favoriteProducts: [{ type: Input }],
    setIsFavorite: [{ type: Output }],
    navigateToProductDetails: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    OCMProductCarousel.prototype.products;
    /** @type {?} */
    OCMProductCarousel.prototype.displayTitle;
    /** @type {?} */
    OCMProductCarousel.prototype.quantityLimits;
    /** @type {?} */
    OCMProductCarousel.prototype.favoriteProducts;
    /** @type {?} */
    OCMProductCarousel.prototype.setIsFavorite;
    /** @type {?} */
    OCMProductCarousel.prototype.navigateToProductDetails;
    /** @type {?} */
    OCMProductCarousel.prototype.index;
    /** @type {?} */
    OCMProductCarousel.prototype.rowLength;
    /** @type {?} */
    OCMProductCarousel.prototype.faAngleLeft;
    /** @type {?} */
    OCMProductCarousel.prototype.faAngleRight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vY20tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZXhwb3NlZC9wcm9kdWN0LWNhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFROUUsTUFBTSxPQUFPLGtCQUFrQjtJQUovQjtRQUtXLGFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBSTdCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQTRDLENBQUM7UUFDN0UsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFFN0UsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixpQkFBWSxHQUFHLFlBQVksQ0FBQztJQXlCOUIsQ0FBQzs7OztJQXZCQyxJQUFJO1FBQ0YsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLFNBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxVQUFtQixFQUFFLFNBQWlCO1FBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsU0FBaUI7UUFDekIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxrbkNBQWdEOzthQUVqRDs7O3VCQUVFLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsTUFBTTt1Q0FDTixNQUFNOzs7O0lBTFAsc0NBQXVDOztJQUN2QywwQ0FBOEI7O0lBQzlCLDRDQUEwQzs7SUFDMUMsOENBQW9DOztJQUNwQywyQ0FBdUY7O0lBQ3ZGLHNEQUE2RTs7SUFFN0UsbUNBQVU7O0lBQ1YsdUNBQWM7O0lBQ2QseUNBQTBCOztJQUMxQiwwQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmYUFuZ2xlTGVmdCwgZmFBbmdsZVJpZ2h0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgQnV5ZXJQcm9kdWN0IH0gZnJvbSAnQG9yZGVyY2xvdWQvYW5ndWxhci1zZGsnO1xyXG5pbXBvcnQgeyBRdWFudGl0eUxpbWl0cyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9xdWFudGl0eS1saW1pdHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2R1Y3QtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE9DTVByb2R1Y3RDYXJvdXNlbCB7XHJcbiAgQElucHV0KCkgcHJvZHVjdHM6IEJ1eWVyUHJvZHVjdFtdID0gW107XHJcbiAgQElucHV0KCkgZGlzcGxheVRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcXVhbnRpdHlMaW1pdHM6IFF1YW50aXR5TGltaXRzW107XHJcbiAgQElucHV0KCkgZmF2b3JpdGVQcm9kdWN0czogc3RyaW5nW107XHJcbiAgQE91dHB1dCgpIHNldElzRmF2b3JpdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHtpc0Zhdm9yaXRlOiBib29sZWFuLCBwcm9kdWN0SUQ6IHN0cmluZ30+KCk7XHJcbiAgQE91dHB1dCgpIG5hdmlnYXRlVG9Qcm9kdWN0RGV0YWlscyA9IG5ldyBFdmVudEVtaXR0ZXI8e3Byb2R1Y3RJRDogc3RyaW5nfT4oKTtcclxuXHJcbiAgaW5kZXggPSAwO1xyXG4gIHJvd0xlbmd0aCA9IDQ7XHJcbiAgZmFBbmdsZUxlZnQgPSBmYUFuZ2xlTGVmdDtcclxuICBmYUFuZ2xlUmlnaHQgPSBmYUFuZ2xlUmlnaHQ7XHJcblxyXG4gIGxlZnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluZGV4IC09IHRoaXMucm93TGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcmlnaHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluZGV4ICs9IHRoaXMucm93TGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvZHVjdHMoKTogQnV5ZXJQcm9kdWN0W10ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdHMuc2xpY2UodGhpcy5pbmRleCwgdGhpcy5pbmRleCArIHRoaXMucm93TGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIGlzRmF2b3JpdGUocHJvZHVjdElEOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmZhdm9yaXRlUHJvZHVjdHMuaW5jbHVkZXMocHJvZHVjdElEKTtcclxuICB9XHJcblxyXG4gIHNldElzRmF2b3JpdGVFdmVudChpc0Zhdm9yaXRlOiBib29sZWFuLCBwcm9kdWN0SUQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRJc0Zhdm9yaXRlLmVtaXQoeyBpc0Zhdm9yaXRlLCBwcm9kdWN0SUQgfSk7XHJcbiAgfVxyXG5cclxuICB0b0RldGFpbHMocHJvZHVjdElEOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubmF2aWdhdGVUb1Byb2R1Y3REZXRhaWxzLmVtaXQoeyBwcm9kdWN0SUQgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==