/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { get as _get } from 'lodash';
var OCMLineitemTable = /** @class */ (function () {
    function OCMLineitemTable() {
        this.closeIcon = faTimes;
        this.deleteLineItem = new EventEmitter();
        this.updateQuantity = new EventEmitter();
        this.navigateToProductDetails = new EventEmitter();
    }
    /**
     * @param {?} object
     * @return {?}
     */
    OCMLineitemTable.prototype.log = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        debugger;
        console.log(object);
        console.log(this.lineItems);
    };
    /**
     * @param {?} lineItemID
     * @return {?}
     */
    OCMLineitemTable.prototype.removeLineItem = /**
     * @param {?} lineItemID
     * @return {?}
     */
    function (lineItemID) {
        this.deleteLineItem.emit({ lineItemID: lineItemID });
    };
    /**
     * @param {?} lineItemID
     * @param {?} quantity
     * @return {?}
     */
    OCMLineitemTable.prototype.changeQuantity = /**
     * @param {?} lineItemID
     * @param {?} quantity
     * @return {?}
     */
    function (lineItemID, quantity) {
        this.getLineItem(lineItemID).Quantity = quantity;
        this.updateQuantity.emit({ lineItemID: lineItemID, quantity: quantity });
    };
    /**
     * @param {?} lineItemID
     * @return {?}
     */
    OCMLineitemTable.prototype.getImageUrl = /**
     * @param {?} lineItemID
     * @return {?}
     */
    function (lineItemID) {
        return _get(this.getLineItem(lineItemID), 'Product.xp.Images[0].Url', 'http://placehold.it/300x300');
    };
    /**
     * @param {?} lineItemID
     * @return {?}
     */
    OCMLineitemTable.prototype.getLineItem = /**
     * @param {?} lineItemID
     * @return {?}
     */
    function (lineItemID) {
        return this.lineItems.Items.find((/**
         * @param {?} li
         * @return {?}
         */
        function (li) { return li.ID === lineItemID; }));
    };
    OCMLineitemTable.decorators = [
        { type: Component, args: [{
                    selector: 'ocm-lineitem-table',
                    template: "<div class=\"card border shadow-sm mb-4\">\r\n  <div class=\"card-header p-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"card-title mb-0\">\r\n          Line Items\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"px-3 pt-2 d-none d-sm-block border-bottom\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-7\">\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4 text-center\">\r\n            <h6>Price</h6>\r\n          </div>\r\n          <div class=\"col-4 text-center\">\r\n            <h6>Qty</h6>\r\n          </div>\r\n          <div class=\"col-4 text-center\">\r\n            <h6>Total</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a (click)=\"log(lineItems)\">click</a>\r\n  <div class=\"flex-none\">\r\n    {{ lineItems.Items.length }}\r\n    <div *ngFor=\"let li of lineItems.Items; let i = index\">\r\n      {{i}}\r\n      <div class=\"m-2 row align-items-center\">\r\n        <div class=\"col-sm-7\">\r\n          <div class=\"row align-items-sm-center\">\r\n            <div class=\"col-3 p-0\">\r\n              <img class=\"img-thumbnail\"\r\n                   appFallbackImage\r\n                   [src]=\"getImageUrl(li.ID)\">\r\n            </div>\r\n            <div class=\"col-9\">\r\n              <h6>\r\n                <a (click)=\"navigateToProductDetails.emit({ productID: li.Product.ID })\"\r\n                   class=\"text-primary link\">{{li.Product.Name}}</a>\r\n                <small class=\"text-muted d-block\">{{li.Product.ID}}</small>\r\n              </h6>\r\n              <a class=\"text-danger btn btn-link px-0 link\"\r\n                 *ngIf=\"!readOnly\"\r\n                 (click)=\"removeLineItem(li.ID)\">Remove Item</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-5\">\r\n          <div class=\"row align-items-center pt-3 pt-sm-0\">\r\n            <div class=\"col-4 text-center\">\r\n              <span class=\"d-block d-sm-none\">Unit Price</span>\r\n              <span class=\"text-nowrap\">{{li.UnitPrice | currency}}</span>\r\n            </div>\r\n            <div class=\"col-4 text-center\">\r\n              <span class=\"d-block d-sm-none\">Qty</span>\r\n              <ocm-quantity-input *ngIf=\"!readOnly\"\r\n                                  [limits]=\"quantityLimits[i]\"\r\n                                  [existingQty]=\"li.Quantity\"\r\n                                  (qtyChange)=\"changeQuantity(li.ID, $event.detail)\"></ocm-quantity-input>\r\n              <span class=\"text-nowrap\"\r\n                    *ngIf=\"readOnly\">&times;{{ li.Quantity | number }}</span>\r\n            </div>\r\n            <div class=\"col-4 text-right\">\r\n              <span class=\"d-block d-sm-none\">Total</span>\r\n              <span class=\"text-nowrap\">{{ li.LineTotal | currency }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- hr only visible on mobile to more clearly distinguish between line items -->\r\n      <hr class=\"pb-4 d-block d-sm-none\">\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".link{cursor:pointer}.link:hover{text-decoration:underline!important}"]
                }] }
    ];
    /** @nocollapse */
    OCMLineitemTable.ctorParameters = function () { return []; };
    OCMLineitemTable.propDecorators = {
        lineItems: [{ type: Input }],
        readOnly: [{ type: Input }],
        quantityLimits: [{ type: Input }],
        deleteLineItem: [{ type: Output }],
        updateQuantity: [{ type: Output }],
        navigateToProductDetails: [{ type: Output }]
    };
    return OCMLineitemTable;
}());
export { OCMLineitemTable };
if (false) {
    /** @type {?} */
    OCMLineitemTable.prototype.closeIcon;
    /** @type {?} */
    OCMLineitemTable.prototype.lineItems;
    /** @type {?} */
    OCMLineitemTable.prototype.readOnly;
    /** @type {?} */
    OCMLineitemTable.prototype.quantityLimits;
    /** @type {?} */
    OCMLineitemTable.prototype.deleteLineItem;
    /** @type {?} */
    OCMLineitemTable.prototype.updateQuantity;
    /** @type {?} */
    OCMLineitemTable.prototype.navigateToProductDetails;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWl0ZW0tdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb2NtLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2V4cG9zZWQvbGluZWl0ZW0tdGFibGUvbGluZWl0ZW0tdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUQsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHckM7SUFjRTtRQVJBLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFJVixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBQzVELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQTRDLENBQUM7UUFDOUUsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7SUFFaEUsQ0FBQzs7Ozs7SUFFaEIsOEJBQUc7Ozs7SUFBSCxVQUFJLE1BQVc7UUFDYixRQUFRLENBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQseUNBQWM7Ozs7SUFBZCxVQUFlLFVBQWtCO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELHlDQUFjOzs7OztJQUFkLFVBQWUsVUFBa0IsRUFBRSxRQUFnQjtRQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLFlBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksVUFBa0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSwwQkFBMEIsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLFVBQWtCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsRUFBRSxDQUFDLEVBQUUsS0FBSyxVQUFVLEVBQXBCLENBQW9CLEVBQUMsQ0FBQztJQUNqRSxDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHlyR0FBOEM7O2lCQUUvQzs7Ozs7NEJBR0UsS0FBSzsyQkFDTCxLQUFLO2lDQUNMLEtBQUs7aUNBQ0wsTUFBTTtpQ0FDTixNQUFNOzJDQUNOLE1BQU07O0lBMEJULHVCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FqQ1ksZ0JBQWdCOzs7SUFDM0IscUNBQW9COztJQUNwQixxQ0FBaUM7O0lBQ2pDLG9DQUEyQjs7SUFDM0IsMENBQTBDOztJQUMxQywwQ0FBc0U7O0lBQ3RFLDBDQUF3Rjs7SUFDeEYsb0RBQStFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExpbmVJdGVtLCBMaXN0TGluZUl0ZW0gfSBmcm9tICdAb3JkZXJjbG91ZC9hbmd1bGFyLXNkayc7XHJcbmltcG9ydCB7IGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFF1YW50aXR5TGltaXRzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3F1YW50aXR5LWxpbWl0cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29jbS1saW5laXRlbS10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xpbmVpdGVtLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9saW5laXRlbS10YWJsZS5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT0NNTGluZWl0ZW1UYWJsZSB7XHJcbiAgY2xvc2VJY29uID0gZmFUaW1lcztcclxuICBASW5wdXQoKSBsaW5lSXRlbXM6IExpc3RMaW5lSXRlbTtcclxuICBASW5wdXQoKSByZWFkT25seTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBxdWFudGl0eUxpbWl0czogUXVhbnRpdHlMaW1pdHNbXTtcclxuICBAT3V0cHV0KCkgZGVsZXRlTGluZUl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPHsgbGluZUl0ZW1JRDogc3RyaW5nIH0+KCk7XHJcbiAgQE91dHB1dCgpIHVwZGF0ZVF1YW50aXR5ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGxpbmVJdGVtSUQ6IHN0cmluZzsgcXVhbnRpdHk6IG51bWJlciB9PigpO1xyXG4gIEBPdXRwdXQoKSBuYXZpZ2F0ZVRvUHJvZHVjdERldGFpbHMgPSBuZXcgRXZlbnRFbWl0dGVyPHsgcHJvZHVjdElEOiBzdHJpbmcgfT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBsb2cob2JqZWN0OiBhbnkpIHtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgY29uc29sZS5sb2cob2JqZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubGluZUl0ZW1zKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUxpbmVJdGVtKGxpbmVJdGVtSUQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5kZWxldGVMaW5lSXRlbS5lbWl0KHsgbGluZUl0ZW1JRCB9KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVF1YW50aXR5KGxpbmVJdGVtSUQ6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5nZXRMaW5lSXRlbShsaW5lSXRlbUlEKS5RdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgdGhpcy51cGRhdGVRdWFudGl0eS5lbWl0KHsgbGluZUl0ZW1JRCwgcXVhbnRpdHkgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRJbWFnZVVybChsaW5lSXRlbUlEOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBfZ2V0KHRoaXMuZ2V0TGluZUl0ZW0obGluZUl0ZW1JRCksICdQcm9kdWN0LnhwLkltYWdlc1swXS5VcmwnLCAnaHR0cDovL3BsYWNlaG9sZC5pdC8zMDB4MzAwJyk7XHJcbiAgfVxyXG5cclxuICBnZXRMaW5lSXRlbShsaW5lSXRlbUlEOiBzdHJpbmcpOiBMaW5lSXRlbSB7XHJcbiAgICByZXR1cm4gdGhpcy5saW5lSXRlbXMuSXRlbXMuZmluZCgobGkpID0+IGxpLklEID09PSBsaW5lSXRlbUlEKTtcclxuICB9XHJcbn1cclxuIl19