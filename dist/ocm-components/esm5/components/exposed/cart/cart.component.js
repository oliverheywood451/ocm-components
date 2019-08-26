/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var OCMCart = /** @class */ (function () {
    function OCMCart() {
        this.emptyCart = new EventEmitter();
        this.deleteLineItem = new EventEmitter();
        this.updateQuantity = new EventEmitter();
        this.navigateToProductDetails = new EventEmitter();
        this.navigateToProductList = new EventEmitter();
        this.navigateToCheckout = new EventEmitter();
    }
    /**
     * @return {?}
     */
    OCMCart.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} object
     * @return {?}
     */
    OCMCart.prototype.log = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        console.log(object);
        console.log(this.lineItems);
    };
    OCMCart.decorators = [
        { type: Component, args: [{
                    template: "<div class=\"mb-3 bg-quaternary\">\r\n  <div class=\"container py-3\">\r\n    <h1 class=\"display-4 m-0 headline-text text-center\">\r\n      Shopping Cart\r\n    </h1>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"my-3 d-flex justify-content-between\">\r\n    <button class=\"btn btn-outline-dark\"\r\n            (click)=\"navigateToProductList.emit()\">Continue Shopping</button>\r\n    <button class=\"btn btn-outline-danger\"\r\n            *ngIf=\"order?.LineItemCount\"\r\n            (click)=\"emptyCart.emit()\">Empty Cart</button>\r\n  </div>\r\n  <div class=\"card bg-light p-3 flex-row justify-content-center\"\r\n       *ngIf=\"!order?.LineItemCount\">\r\n    <p class=\"mb-0\">You do not have any items in your cart</p>\r\n  </div>\r\n  <div class=\"row flex-lg-row-reverse\"\r\n       *ngIf=\"order?.LineItemCount\">\r\n    <div class=\"col-lg-4\">\r\n      <ocm-order-summary [order]=\"order\"></ocm-order-summary>\r\n      <button class=\"btn btn-primary btn-block mb-4 font-weight-bold\"\r\n             (click)=\"navigateToCheckout.emit()\">CHECKOUT</button>\r\n    </div>\r\n    <div class=\"col-lg-8\">\r\n      {{ lineItems }}\r\n      <a (click)=\"log(lineItems)\">click</a>\r\n      <ocm-lineitem-table [lineItems]=\"lineItems\"\r\n                          [readOnly]=\"false\"\r\n                          [quantityLimits]=\"quantityLimits\"\r\n                          (deleteLineItem)=\"deleteLineItem.emit($event)\"\r\n                          (updateQuantity)=\"updateQuantity.emit($event)\"\r\n                          (navigateToProductDetails)=\"navigateToProductDetails.emit($event)\">\r\n      </ocm-lineitem-table>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [""]
                }] }
    ];
    OCMCart.propDecorators = {
        order: [{ type: Input }],
        lineItems: [{ type: Input }],
        quantityLimits: [{ type: Input }],
        emptyCart: [{ type: Output }],
        deleteLineItem: [{ type: Output }],
        updateQuantity: [{ type: Output }],
        navigateToProductDetails: [{ type: Output }],
        navigateToProductList: [{ type: Output }],
        navigateToCheckout: [{ type: Output }]
    };
    return OCMCart;
}());
export { OCMCart };
if (false) {
    /** @type {?} */
    OCMCart.prototype.order;
    /** @type {?} */
    OCMCart.prototype.lineItems;
    /** @type {?} */
    OCMCart.prototype.quantityLimits;
    /** @type {?} */
    OCMCart.prototype.emptyCart;
    /** @type {?} */
    OCMCart.prototype.deleteLineItem;
    /** @type {?} */
    OCMCart.prototype.updateQuantity;
    /** @type {?} */
    OCMCart.prototype.navigateToProductDetails;
    /** @type {?} */
    OCMCart.prototype.navigateToProductList;
    /** @type {?} */
    OCMCart.prototype.navigateToCheckout;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vY20tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZXhwb3NlZC9jYXJ0L2NhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSS9FO0lBQUE7UUFRWSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNyQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBQzVELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQTRDLENBQUM7UUFDOUUsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFDckUsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNqRCx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBUzFELENBQUM7Ozs7SUFQQywwQkFBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELHFCQUFHOzs7O0lBQUgsVUFBSSxNQUFXO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULDRyREFBb0M7O2lCQUVyQzs7O3dCQUVFLEtBQUs7NEJBQ0wsS0FBSztpQ0FDTCxLQUFLOzRCQUNMLE1BQU07aUNBQ04sTUFBTTtpQ0FDTixNQUFNOzJDQUNOLE1BQU07d0NBQ04sTUFBTTtxQ0FDTixNQUFNOztJQVNULGNBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWxCWSxPQUFPOzs7SUFDbEIsd0JBQXNCOztJQUN0Qiw0QkFBaUM7O0lBQ2pDLGlDQUEwQzs7SUFDMUMsNEJBQStDOztJQUMvQyxpQ0FBc0U7O0lBQ3RFLGlDQUF3Rjs7SUFDeEYsMkNBQStFOztJQUMvRSx3Q0FBMkQ7O0lBQzNELHFDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3JkZXIsIExpc3RMaW5lSXRlbSB9IGZyb20gJ0BvcmRlcmNsb3VkL2FuZ3VsYXItc2RrJztcclxuaW1wb3J0IHsgUXVhbnRpdHlMaW1pdHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcXVhbnRpdHktbGltaXRzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jYXJ0LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPQ01DYXJ0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBvcmRlcjogT3JkZXI7XHJcbiAgQElucHV0KCkgbGluZUl0ZW1zOiBMaXN0TGluZUl0ZW07XHJcbiAgQElucHV0KCkgcXVhbnRpdHlMaW1pdHM6IFF1YW50aXR5TGltaXRzW107XHJcbiAgQE91dHB1dCgpIGVtcHR5Q2FydCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZGVsZXRlTGluZUl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPHsgbGluZUl0ZW1JRDogc3RyaW5nIH0+KCk7XHJcbiAgQE91dHB1dCgpIHVwZGF0ZVF1YW50aXR5ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGxpbmVJdGVtSUQ6IHN0cmluZzsgcXVhbnRpdHk6IG51bWJlciB9PigpO1xyXG4gIEBPdXRwdXQoKSBuYXZpZ2F0ZVRvUHJvZHVjdERldGFpbHMgPSBuZXcgRXZlbnRFbWl0dGVyPHsgcHJvZHVjdElEOiBzdHJpbmcgfT4oKTtcclxuICBAT3V0cHV0KCkgbmF2aWdhdGVUb1Byb2R1Y3RMaXN0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBuYXZpZ2F0ZVRvQ2hlY2tvdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbG9nKG9iamVjdDogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhvYmplY3QpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5saW5lSXRlbXMpO1xyXG4gIH1cclxufVxyXG4iXX0=