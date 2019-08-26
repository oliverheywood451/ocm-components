/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
var OCMProductCarousel = /** @class */ (function () {
    function OCMProductCarousel() {
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
    OCMProductCarousel.prototype.left = /**
     * @return {?}
     */
    function () {
        this.index -= this.rowLength;
    };
    /**
     * @return {?}
     */
    OCMProductCarousel.prototype.right = /**
     * @return {?}
     */
    function () {
        this.index += this.rowLength;
    };
    /**
     * @return {?}
     */
    OCMProductCarousel.prototype.getProducts = /**
     * @return {?}
     */
    function () {
        return this.products.slice(this.index, this.index + this.rowLength);
    };
    /**
     * @param {?} productID
     * @return {?}
     */
    OCMProductCarousel.prototype.isFavorite = /**
     * @param {?} productID
     * @return {?}
     */
    function (productID) {
        return this.favoriteProducts.includes(productID);
    };
    /**
     * @param {?} isFavorite
     * @param {?} productID
     * @return {?}
     */
    OCMProductCarousel.prototype.setIsFavoriteEvent = /**
     * @param {?} isFavorite
     * @param {?} productID
     * @return {?}
     */
    function (isFavorite, productID) {
        this.setIsFavorite.emit({ isFavorite: isFavorite, productID: productID });
    };
    /**
     * @param {?} productID
     * @return {?}
     */
    OCMProductCarousel.prototype.toDetails = /**
     * @param {?} productID
     * @return {?}
     */
    function (productID) {
        this.navigateToProductDetails.emit({ productID: productID });
    };
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
    return OCMProductCarousel;
}());
export { OCMProductCarousel };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vY20tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZXhwb3NlZC9wcm9kdWN0LWNhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFJOUU7SUFBQTtRQUtXLGFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBSTdCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQTRDLENBQUM7UUFDN0UsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFFN0UsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixpQkFBWSxHQUFHLFlBQVksQ0FBQztJQXlCOUIsQ0FBQzs7OztJQXZCQyxpQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELGtDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7O0lBRUQsdUNBQVU7Ozs7SUFBVixVQUFXLFNBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFRCwrQ0FBa0I7Ozs7O0lBQWxCLFVBQW1CLFVBQW1CLEVBQUUsU0FBaUI7UUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLFlBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxzQ0FBUzs7OztJQUFULFVBQVUsU0FBaUI7UUFDekIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULGtuQ0FBZ0Q7O2lCQUVqRDs7OzJCQUVFLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLO21DQUNMLEtBQUs7Z0NBQ0wsTUFBTTsyQ0FDTixNQUFNOztJQThCVCx5QkFBQztDQUFBLEFBeENELElBd0NDO1NBcENZLGtCQUFrQjs7O0lBQzdCLHNDQUF1Qzs7SUFDdkMsMENBQThCOztJQUM5Qiw0Q0FBMEM7O0lBQzFDLDhDQUFvQzs7SUFDcEMsMkNBQXVGOztJQUN2RixzREFBNkU7O0lBRTdFLG1DQUFVOztJQUNWLHVDQUFjOztJQUNkLHlDQUEwQjs7SUFDMUIsMENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZmFBbmdsZUxlZnQsIGZhQW5nbGVSaWdodCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IEJ1eWVyUHJvZHVjdCB9IGZyb20gJ0BvcmRlcmNsb3VkL2FuZ3VsYXItc2RrJztcclxuaW1wb3J0IHsgUXVhbnRpdHlMaW1pdHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcXVhbnRpdHktbGltaXRzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPQ01Qcm9kdWN0Q2Fyb3VzZWwge1xyXG4gIEBJbnB1dCgpIHByb2R1Y3RzOiBCdXllclByb2R1Y3RbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIGRpc3BsYXlUaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHF1YW50aXR5TGltaXRzOiBRdWFudGl0eUxpbWl0c1tdO1xyXG4gIEBJbnB1dCgpIGZhdm9yaXRlUHJvZHVjdHM6IHN0cmluZ1tdO1xyXG4gIEBPdXRwdXQoKSBzZXRJc0Zhdm9yaXRlID0gbmV3IEV2ZW50RW1pdHRlcjx7aXNGYXZvcml0ZTogYm9vbGVhbiwgcHJvZHVjdElEOiBzdHJpbmd9PigpO1xyXG4gIEBPdXRwdXQoKSBuYXZpZ2F0ZVRvUHJvZHVjdERldGFpbHMgPSBuZXcgRXZlbnRFbWl0dGVyPHtwcm9kdWN0SUQ6IHN0cmluZ30+KCk7XHJcblxyXG4gIGluZGV4ID0gMDtcclxuICByb3dMZW5ndGggPSA0O1xyXG4gIGZhQW5nbGVMZWZ0ID0gZmFBbmdsZUxlZnQ7XHJcbiAgZmFBbmdsZVJpZ2h0ID0gZmFBbmdsZVJpZ2h0O1xyXG5cclxuICBsZWZ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbmRleCAtPSB0aGlzLnJvd0xlbmd0aDtcclxuICB9XHJcblxyXG4gIHJpZ2h0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbmRleCArPSB0aGlzLnJvd0xlbmd0aDtcclxuICB9XHJcblxyXG4gIGdldFByb2R1Y3RzKCk6IEJ1eWVyUHJvZHVjdFtdIHtcclxuICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLnNsaWNlKHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyB0aGlzLnJvd0xlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBpc0Zhdm9yaXRlKHByb2R1Y3RJRDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZVByb2R1Y3RzLmluY2x1ZGVzKHByb2R1Y3RJRCk7XHJcbiAgfVxyXG5cclxuICBzZXRJc0Zhdm9yaXRlRXZlbnQoaXNGYXZvcml0ZTogYm9vbGVhbiwgcHJvZHVjdElEOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0SXNGYXZvcml0ZS5lbWl0KHsgaXNGYXZvcml0ZSwgcHJvZHVjdElEIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9EZXRhaWxzKHByb2R1Y3RJRDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLm5hdmlnYXRlVG9Qcm9kdWN0RGV0YWlscy5lbWl0KHsgcHJvZHVjdElEIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=