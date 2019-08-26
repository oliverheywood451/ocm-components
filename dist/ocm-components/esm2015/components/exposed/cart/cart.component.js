/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class OCMCart {
    constructor() {
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
    ngOnInit() {
    }
    /**
     * @param {?} object
     * @return {?}
     */
    log(object) {
        console.log(object);
        console.log(this.lineItems);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vY20tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZXhwb3NlZC9jYXJ0L2NhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBUS9FLE1BQU0sT0FBTyxPQUFPO0lBSnBCO1FBUVksY0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDckMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUM1RCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUE0QyxDQUFDO1FBQzlFLDZCQUF3QixHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBQ3JFLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDakQsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQVMxRCxDQUFDOzs7O0lBUEMsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLE1BQVc7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsNHJEQUFvQzs7YUFFckM7OztvQkFFRSxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzt3QkFDTCxNQUFNOzZCQUNOLE1BQU07NkJBQ04sTUFBTTt1Q0FDTixNQUFNO29DQUNOLE1BQU07aUNBQ04sTUFBTTs7OztJQVJQLHdCQUFzQjs7SUFDdEIsNEJBQWlDOztJQUNqQyxpQ0FBMEM7O0lBQzFDLDRCQUErQzs7SUFDL0MsaUNBQXNFOztJQUN0RSxpQ0FBd0Y7O0lBQ3hGLDJDQUErRTs7SUFDL0Usd0NBQTJEOztJQUMzRCxxQ0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9yZGVyLCBMaXN0TGluZUl0ZW0gfSBmcm9tICdAb3JkZXJjbG91ZC9hbmd1bGFyLXNkayc7XHJcbmltcG9ydCB7IFF1YW50aXR5TGltaXRzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3F1YW50aXR5LWxpbWl0cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FydC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT0NNQ2FydCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgb3JkZXI6IE9yZGVyO1xyXG4gIEBJbnB1dCgpIGxpbmVJdGVtczogTGlzdExpbmVJdGVtO1xyXG4gIEBJbnB1dCgpIHF1YW50aXR5TGltaXRzOiBRdWFudGl0eUxpbWl0c1tdO1xyXG4gIEBPdXRwdXQoKSBlbXB0eUNhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGRlbGV0ZUxpbmVJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjx7IGxpbmVJdGVtSUQ6IHN0cmluZyB9PigpO1xyXG4gIEBPdXRwdXQoKSB1cGRhdGVRdWFudGl0eSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBsaW5lSXRlbUlEOiBzdHJpbmc7IHF1YW50aXR5OiBudW1iZXIgfT4oKTtcclxuICBAT3V0cHV0KCkgbmF2aWdhdGVUb1Byb2R1Y3REZXRhaWxzID0gbmV3IEV2ZW50RW1pdHRlcjx7IHByb2R1Y3RJRDogc3RyaW5nIH0+KCk7XHJcbiAgQE91dHB1dCgpIG5hdmlnYXRlVG9Qcm9kdWN0TGlzdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgbmF2aWdhdGVUb0NoZWNrb3V0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGxvZyhvYmplY3Q6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2cob2JqZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubGluZUl0ZW1zKTtcclxuICB9XHJcbn1cclxuIl19