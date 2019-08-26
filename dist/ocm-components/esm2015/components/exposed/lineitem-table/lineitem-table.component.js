/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { get as _get } from 'lodash';
export class OCMLineitemTable {
    constructor() {
        this.closeIcon = faTimes;
        this.deleteLineItem = new EventEmitter();
        this.updateQuantity = new EventEmitter();
        this.navigateToProductDetails = new EventEmitter();
    }
    /**
     * @param {?} object
     * @return {?}
     */
    log(object) {
        debugger;
        console.log(object);
        console.log(this.lineItems);
    }
    /**
     * @param {?} lineItemID
     * @return {?}
     */
    removeLineItem(lineItemID) {
        this.deleteLineItem.emit({ lineItemID });
    }
    /**
     * @param {?} lineItemID
     * @param {?} quantity
     * @return {?}
     */
    changeQuantity(lineItemID, quantity) {
        this.getLineItem(lineItemID).Quantity = quantity;
        this.updateQuantity.emit({ lineItemID, quantity });
    }
    /**
     * @param {?} lineItemID
     * @return {?}
     */
    getImageUrl(lineItemID) {
        return _get(this.getLineItem(lineItemID), 'Product.xp.Images[0].Url', 'http://placehold.it/300x300');
    }
    /**
     * @param {?} lineItemID
     * @return {?}
     */
    getLineItem(lineItemID) {
        return this.lineItems.Items.find((/**
         * @param {?} li
         * @return {?}
         */
        (li) => li.ID === lineItemID));
    }
}
OCMLineitemTable.decorators = [
    { type: Component, args: [{
                selector: 'ocm-lineitem-table',
                template: "<div class=\"card border shadow-sm mb-4\">\r\n  <div class=\"card-header p-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"card-title mb-0\">\r\n          Line Items\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"px-3 pt-2 d-none d-sm-block border-bottom\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-7\">\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4 text-center\">\r\n            <h6>Price</h6>\r\n          </div>\r\n          <div class=\"col-4 text-center\">\r\n            <h6>Qty</h6>\r\n          </div>\r\n          <div class=\"col-4 text-center\">\r\n            <h6>Total</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a (click)=\"log(lineItems)\">click</a>\r\n  <div class=\"flex-none\">\r\n    {{ lineItems.Items.length }}\r\n    <div *ngFor=\"let li of lineItems.Items; let i = index\">\r\n      {{i}}\r\n      <div class=\"m-2 row align-items-center\">\r\n        <div class=\"col-sm-7\">\r\n          <div class=\"row align-items-sm-center\">\r\n            <div class=\"col-3 p-0\">\r\n              <img class=\"img-thumbnail\"\r\n                   appFallbackImage\r\n                   [src]=\"getImageUrl(li.ID)\">\r\n            </div>\r\n            <div class=\"col-9\">\r\n              <h6>\r\n                <a (click)=\"navigateToProductDetails.emit({ productID: li.Product.ID })\"\r\n                   class=\"text-primary link\">{{li.Product.Name}}</a>\r\n                <small class=\"text-muted d-block\">{{li.Product.ID}}</small>\r\n              </h6>\r\n              <a class=\"text-danger btn btn-link px-0 link\"\r\n                 *ngIf=\"!readOnly\"\r\n                 (click)=\"removeLineItem(li.ID)\">Remove Item</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-5\">\r\n          <div class=\"row align-items-center pt-3 pt-sm-0\">\r\n            <div class=\"col-4 text-center\">\r\n              <span class=\"d-block d-sm-none\">Unit Price</span>\r\n              <span class=\"text-nowrap\">{{li.UnitPrice | currency}}</span>\r\n            </div>\r\n            <div class=\"col-4 text-center\">\r\n              <span class=\"d-block d-sm-none\">Qty</span>\r\n              <ocm-quantity-input *ngIf=\"!readOnly\"\r\n                                  [limits]=\"quantityLimits[i]\"\r\n                                  [existingQty]=\"li.Quantity\"\r\n                                  (qtyChange)=\"changeQuantity(li.ID, $event.detail)\"></ocm-quantity-input>\r\n              <span class=\"text-nowrap\"\r\n                    *ngIf=\"readOnly\">&times;{{ li.Quantity | number }}</span>\r\n            </div>\r\n            <div class=\"col-4 text-right\">\r\n              <span class=\"d-block d-sm-none\">Total</span>\r\n              <span class=\"text-nowrap\">{{ li.LineTotal | currency }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- hr only visible on mobile to more clearly distinguish between line items -->\r\n      <hr class=\"pb-4 d-block d-sm-none\">\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".link{cursor:pointer}.link:hover{text-decoration:underline!important}"]
            }] }
];
/** @nocollapse */
OCMLineitemTable.ctorParameters = () => [];
OCMLineitemTable.propDecorators = {
    lineItems: [{ type: Input }],
    readOnly: [{ type: Input }],
    quantityLimits: [{ type: Input }],
    deleteLineItem: [{ type: Output }],
    updateQuantity: [{ type: Output }],
    navigateToProductDetails: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWl0ZW0tdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb2NtLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2V4cG9zZWQvbGluZWl0ZW0tdGFibGUvbGluZWl0ZW0tdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUQsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFRckMsTUFBTSxPQUFPLGdCQUFnQjtJQVMzQjtRQVJBLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFJVixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBQzVELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQTRDLENBQUM7UUFDOUUsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7SUFFaEUsQ0FBQzs7Ozs7SUFFaEIsR0FBRyxDQUFDLE1BQVc7UUFDYixRQUFRLENBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFVBQWtCO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsVUFBa0IsRUFBRSxRQUFnQjtRQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxVQUFrQjtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLDBCQUEwQixFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDdkcsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsVUFBa0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssVUFBVSxFQUFDLENBQUM7SUFDakUsQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qix5ckdBQThDOzthQUUvQzs7Ozs7d0JBR0UsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsTUFBTTs2QkFDTixNQUFNO3VDQUNOLE1BQU07Ozs7SUFOUCxxQ0FBb0I7O0lBQ3BCLHFDQUFpQzs7SUFDakMsb0NBQTJCOztJQUMzQiwwQ0FBMEM7O0lBQzFDLDBDQUFzRTs7SUFDdEUsMENBQXdGOztJQUN4RixvREFBK0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGluZUl0ZW0sIExpc3RMaW5lSXRlbSB9IGZyb20gJ0BvcmRlcmNsb3VkL2FuZ3VsYXItc2RrJztcclxuaW1wb3J0IHsgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgUXVhbnRpdHlMaW1pdHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcXVhbnRpdHktbGltaXRzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb2NtLWxpbmVpdGVtLXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGluZWl0ZW0tdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xpbmVpdGVtLXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPQ01MaW5laXRlbVRhYmxlIHtcclxuICBjbG9zZUljb24gPSBmYVRpbWVzO1xyXG4gIEBJbnB1dCgpIGxpbmVJdGVtczogTGlzdExpbmVJdGVtO1xyXG4gIEBJbnB1dCgpIHJlYWRPbmx5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHF1YW50aXR5TGltaXRzOiBRdWFudGl0eUxpbWl0c1tdO1xyXG4gIEBPdXRwdXQoKSBkZWxldGVMaW5lSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBsaW5lSXRlbUlEOiBzdHJpbmcgfT4oKTtcclxuICBAT3V0cHV0KCkgdXBkYXRlUXVhbnRpdHkgPSBuZXcgRXZlbnRFbWl0dGVyPHsgbGluZUl0ZW1JRDogc3RyaW5nOyBxdWFudGl0eTogbnVtYmVyIH0+KCk7XHJcbiAgQE91dHB1dCgpIG5hdmlnYXRlVG9Qcm9kdWN0RGV0YWlscyA9IG5ldyBFdmVudEVtaXR0ZXI8eyBwcm9kdWN0SUQ6IHN0cmluZyB9PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGxvZyhvYmplY3Q6IGFueSkge1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICBjb25zb2xlLmxvZyhvYmplY3QpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5saW5lSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTGluZUl0ZW0obGluZUl0ZW1JRDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRlbGV0ZUxpbmVJdGVtLmVtaXQoeyBsaW5lSXRlbUlEIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUXVhbnRpdHkobGluZUl0ZW1JRDogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmdldExpbmVJdGVtKGxpbmVJdGVtSUQpLlF1YW50aXR5ID0gcXVhbnRpdHk7XHJcbiAgICB0aGlzLnVwZGF0ZVF1YW50aXR5LmVtaXQoeyBsaW5lSXRlbUlELCBxdWFudGl0eSB9KTtcclxuICB9XHJcblxyXG4gIGdldEltYWdlVXJsKGxpbmVJdGVtSUQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIF9nZXQodGhpcy5nZXRMaW5lSXRlbShsaW5lSXRlbUlEKSwgJ1Byb2R1Y3QueHAuSW1hZ2VzWzBdLlVybCcsICdodHRwOi8vcGxhY2Vob2xkLml0LzMwMHgzMDAnKTtcclxuICB9XHJcblxyXG4gIGdldExpbmVJdGVtKGxpbmVJdGVtSUQ6IHN0cmluZyk6IExpbmVJdGVtIHtcclxuICAgIHJldHVybiB0aGlzLmxpbmVJdGVtcy5JdGVtcy5maW5kKChsaSkgPT4gbGkuSUQgPT09IGxpbmVJdGVtSUQpO1xyXG4gIH1cclxufVxyXG4iXX0=