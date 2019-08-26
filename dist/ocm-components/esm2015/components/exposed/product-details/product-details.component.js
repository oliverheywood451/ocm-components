/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { minBy as _minBy, has as _has } from 'lodash';
export class OCMProductDetails {
    /**
     * @param {?} changeDetectorRef
     */
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.addToCartEvent = new EventEmitter();
        this.setIsFavorite = new EventEmitter();
        this.quantityInputReady = false;
        this.specSelections = [];
        this.imageUrls = [];
        this.isOrderable = false;
        this.hasPrice = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this.product)
            return;
        // products without a price schedule are view-only.
        this.isOrderable = !!this.product.PriceSchedule;
        // free products dont need to display a price.
        this.hasPrice = _has(this.product, 'PriceSchedule.PriceBreaks[0].Price');
        this.imageUrls = this.getImageUrls();
    }
    /**
     * @return {?}
     */
    addToCart() {
        /** @type {?} */
        const Specs = this.specSelections.map((/**
         * @param {?} o
         * @return {?}
         */
        (o) => ({
            SpecID: o.SpecID,
            OptionID: o.ID,
            Value: o.Value,
        })));
        this.addToCartEvent.emit({
            ProductID: this.product.ID,
            Quantity: this.quantity,
            Specs,
        });
    }
    /**
     * @return {?}
     */
    getTotalPrice() {
        // In OC, the price per item can depend on the quantity ordered. This info is stored on the PriceSchedule as a list of PriceBreaks.
        // Find the PriceBreak with the highest Quantity less than the quantity ordered. The price on that price break
        // is the cost per item.
        if (!this.quantity) {
            return null;
        }
        if (!this.hasPrice) {
            return 0;
        }
        /** @type {?} */
        const priceBreaks = this.product.PriceSchedule.PriceBreaks;
        /** @type {?} */
        const startingBreak = _minBy(priceBreaks, 'Quantity');
        /** @type {?} */
        const selectedBreak = priceBreaks.reduce((/**
         * @param {?} current
         * @param {?} candidate
         * @return {?}
         */
        (current, candidate) => {
            return candidate.Quantity > current.Quantity && candidate.Quantity <= this.quantity ? candidate : current;
        }), startingBreak);
        /** @type {?} */
        const markup = this.totalSpecMarkup(selectedBreak.Price, this.quantity);
        return (selectedBreak.Price + markup) * this.quantity;
    }
    /**
     * @param {?} unitPrice
     * @param {?} quantity
     * @return {?}
     */
    totalSpecMarkup(unitPrice, quantity) {
        /** @type {?} */
        const markups = this.specSelections.map((/**
         * @param {?} s
         * @return {?}
         */
        (s) => this.singleSpecMarkup(unitPrice, quantity, s)));
        return markups.reduce((/**
         * @param {?} x
         * @param {?} acc
         * @return {?}
         */
        (x, acc) => x + acc), 0); // sum
    }
    /**
     * @param {?} unitPrice
     * @param {?} quantity
     * @param {?} spec
     * @return {?}
     */
    singleSpecMarkup(unitPrice, quantity, spec) {
        switch (spec.PriceMarkupType) {
            case 'NoMarkup':
                return 0;
            case 'AmountPerQuantity':
                return spec.PriceMarkup;
            case 'AmountTotal':
                return spec.PriceMarkup / quantity;
            case 'Percentage':
                return spec.PriceMarkup * unitPrice * 0.01;
        }
    }
    /**
     * @return {?}
     */
    getImageUrls() {
        /** @type {?} */
        const host = 'https://s3.dualstack.us-east-1.amazonaws.com/staticcintas.eretailing.com/images/product';
        /** @type {?} */
        const images = this.product.xp.Images || [];
        return images.map((/**
         * @param {?} i
         * @return {?}
         */
        (i) => i.Url.replace('{url}', host)));
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        // This manually triggers angular's change detection cycle and avoids the imfamous
        // "Expression has changed after it was checked" error.
        // Caused by something in spec form
        this.changeDetectorRef.detectChanges();
    }
}
OCMProductDetails.decorators = [
    { type: Component, args: [{
                template: "<div class=\"container mt-4\" *ngIf=\"product\">\r\n  <div class=\"row mb-5\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"position-relative d-block\">\r\n        <ocm-image-gallery [imgUrls]=\"imageUrls\"></ocm-image-gallery>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 bg-light\">\r\n      <h1 class=\"h1 my-0\">{{ product.Name }}</h1>\r\n      <div class=\"d-flex mt-2\">\r\n        <div class=\"mt-2 text-muted\">ID: {{ product.ID }}</div>\r\n        <div class=\"mt-2 ml-3\">\r\n          <ocm-toggle-favorite title=\"Favorite\"\r\n                               (click)=\"$event.stopPropagation()\"\r\n                               [favorite]=\"isFavorite\"\r\n                               (favoriteChanged)=\"setIsFavorite.emit($event.detail)\">\r\n          </ocm-toggle-favorite>\r\n        </div>\r\n        <div class=\"ml-auto\"\r\n             *ngIf=\"isOrderable\">\r\n          <ocm-quantity-input class=\"d-inline-block\"\r\n                              style=\"max-width: 100px\"\r\n                              [limits]=\"quantityLimits\"\r\n                              (qtyChange)=\"quantity = $event.detail\">\r\n          </ocm-quantity-input>\r\n          <button class=\"btn btn-primary ml-2\"\r\n                  type=\"submit\"\r\n                  (click)=\"addToCart()\">\r\n            Add to Cart\r\n            <span class=\"badge badge-light ml-2\">{{\r\n              getTotalPrice() | currency\r\n            }}</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <hr />\r\n      <p class=\"mt-4\"\r\n         [innerHTML]=\"product.Description || 'This product has no description.'\"></p>\r\n      <ocm-spec-form *ngIf=\"isOrderable && specs.Items.length > 0\"\r\n                     [specs]=\"specs.Items\"\r\n                     (formUpdated)=\"specSelections = $event.detail\"></ocm-spec-form>\r\n      <div *ngIf=\"!isOrderable\"\r\n           class=\"alert alert-info\">\r\n        This is a view-only product and cannot be ordered\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"relatedProducts$ | async; let relatedProducts\">\r\n    <ocm-product-carousel *ngIf=\"relatedProducts.length > 0\"\r\n                          displayTitle=\"Related Products\"\r\n                          [products]=\"relatedProducts\">\r\n    </ocm-product-carousel>\r\n  </div>\r\n</div>",
                styles: [".make-inline{max-width:100px}"]
            }] }
];
/** @nocollapse */
OCMProductDetails.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
OCMProductDetails.propDecorators = {
    specs: [{ type: Input }],
    product: [{ type: Input }],
    isFavorite: [{ type: Input }],
    quantityLimits: [{ type: Input }],
    addToCartEvent: [{ type: Output }],
    setIsFavorite: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    OCMProductDetails.prototype.specs;
    /** @type {?} */
    OCMProductDetails.prototype.product;
    /** @type {?} */
    OCMProductDetails.prototype.isFavorite;
    /** @type {?} */
    OCMProductDetails.prototype.quantityLimits;
    /** @type {?} */
    OCMProductDetails.prototype.addToCartEvent;
    /** @type {?} */
    OCMProductDetails.prototype.setIsFavorite;
    /** @type {?} */
    OCMProductDetails.prototype.quantity;
    /** @type {?} */
    OCMProductDetails.prototype.quantityInputReady;
    /** @type {?} */
    OCMProductDetails.prototype.specSelections;
    /** @type {?} */
    OCMProductDetails.prototype.relatedProducts$;
    /** @type {?} */
    OCMProductDetails.prototype.imageUrls;
    /** @type {?} */
    OCMProductDetails.prototype.isOrderable;
    /** @type {?} */
    OCMProductDetails.prototype.hasPrice;
    /**
     * @type {?}
     * @private
     */
    OCMProductDetails.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29jbS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9leHBvc2VkL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUErQixNQUFNLGVBQWUsQ0FBQztBQUd2SCxPQUFPLEVBQTRDLEtBQUssSUFBSSxNQUFNLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQVFoRyxNQUFNLE9BQU8saUJBQWlCOzs7O0lBZ0I1QixZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVg5QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDOUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBR3RELHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFxQixFQUFFLENBQUM7UUFFdEMsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRTBDLENBQUM7Ozs7SUFFNUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ2hELDhDQUE4QztRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG9DQUFvQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMs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RyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLGtGQUFrRjtRQUNsRix1REFBdUQ7UUFDdkQsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7WUE5RkYsU0FBUyxTQUFDO2dCQUNULHExRUFBK0M7O2FBRWhEOzs7O1lBVmdELGlCQUFpQjs7O29CQVkvRCxLQUFLO3NCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLE1BQU07NEJBQ04sTUFBTTs7OztJQUxQLGtDQUF5Qjs7SUFDekIsb0NBQStCOztJQUMvQix1Q0FBNkI7O0lBQzdCLDJDQUF3Qzs7SUFDeEMsMkNBQXdEOztJQUN4RCwwQ0FBc0Q7O0lBRXRELHFDQUFpQjs7SUFDakIsK0NBQTJCOztJQUMzQiwyQ0FBc0M7O0lBQ3RDLDZDQUE2Qzs7SUFDN0Msc0NBQXlCOztJQUN6Qix3Q0FBb0I7O0lBQ3BCLHFDQUFpQjs7Ozs7SUFFTCw4Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyVmlld0NoZWNrZWQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEJ1eWVyUHJvZHVjdCwgQnV5ZXJTcGVjLCBMaW5lSXRlbSwgTGlzdFNwZWMgfSBmcm9tICdAb3JkZXJjbG91ZC9hbmd1bGFyLXNkayc7XHJcbmltcG9ydCB7IGZpbmQgYXMgX2ZpbmQsIGRpZmZlcmVuY2UgYXMgX2RpZmZlcmVuY2UsIG1pbkJ5IGFzIF9taW5CeSwgaGFzIGFzIF9oYXMgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBRdWFudGl0eUxpbWl0cyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9xdWFudGl0eS1saW1pdHMnO1xyXG5pbXBvcnQgeyBGdWxsU3BlY09wdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9mdWxsLXNwZWMtb3B0aW9uLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE9DTVByb2R1Y3REZXRhaWxzIGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkIHtcclxuICBASW5wdXQoKSBzcGVjczogTGlzdFNwZWM7XHJcbiAgQElucHV0KCkgcHJvZHVjdDogQnV5ZXJQcm9kdWN0O1xyXG4gIEBJbnB1dCgpIGlzRmF2b3JpdGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcXVhbnRpdHlMaW1pdHM6IFF1YW50aXR5TGltaXRzO1xyXG4gIEBPdXRwdXQoKSBhZGRUb0NhcnRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8TGluZUl0ZW0+KCk7XHJcbiAgQE91dHB1dCgpIHNldElzRmF2b3JpdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHF1YW50aXR5OiBudW1iZXI7XHJcbiAgcXVhbnRpdHlJbnB1dFJlYWR5ID0gZmFsc2U7XHJcbiAgc3BlY1NlbGVjdGlvbnM6IEZ1bGxTcGVjT3B0aW9uW10gPSBbXTtcclxuICByZWxhdGVkUHJvZHVjdHMkOiBPYnNlcnZhYmxlPEJ1eWVyUHJvZHVjdFtdPjtcclxuICBpbWFnZVVybHM6IHN0cmluZ1tdID0gW107XHJcbiAgaXNPcmRlcmFibGUgPSBmYWxzZTtcclxuICBoYXNQcmljZSA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvZHVjdCkgcmV0dXJuO1xyXG4gICAgLy8gcHJvZHVjdHMgd2l0aG91dCBhIHByaWNlIHNjaGVkdWxlIGFyZSB2aWV3LW9ubHkuXHJcbiAgICB0aGlzLmlzT3JkZXJhYmxlID0gISF0aGlzLnByb2R1Y3QuUHJpY2VTY2hlZHVsZTtcclxuICAgIC8vIGZyZWUgcHJvZHVjdHMgZG9udCBuZWVkIHRvIGRpc3BsYXkgYSBwcmljZS5cclxuICAgIHRoaXMuaGFzUHJpY2UgPSBfaGFzKHRoaXMucHJvZHVjdCwgJ1ByaWNlU2NoZWR1bGUuUHJpY2VCcmVha3NbMF0uUHJpY2UnKTtcclxuICAgIHRoaXMuaW1hZ2VVcmxzID0gdGhpcy5nZXRJbWFnZVVybHMoKTtcclxuICB9XHJcblxyXG4gIGFkZFRvQ2FydCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IFNwZWNzID0gdGhpcy5zcGVjU2VsZWN0aW9ucy5tYXAoKG8pID0+ICh7XHJcbiAgICAgIFNwZWNJRDogby5TcGVjSUQsXHJcbiAgICAgIE9wdGlvbklEOiBvLklELFxyXG4gICAgICBWYWx1ZTogby5WYWx1ZSxcclxuICAgIH0pKTtcclxuICAgIHRoaXMuYWRkVG9DYXJ0RXZlbnQuZW1pdCh7XHJcbiAgICAgIFByb2R1Y3RJRDogdGhpcy5wcm9kdWN0LklELFxyXG4gICAgICBRdWFudGl0eTogdGhpcy5xdWFudGl0eSxcclxuICAgICAgU3BlY3MsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsUHJpY2UoKTogbnVtYmVyIHtcclxuICAgIC8vIEluIE9DLCB0aGUgcHJpY2UgcGVyIGl0ZW0gY2FuIGRlcGVuZCBvbiB0aGUgcXVhbnRpdHkgb3JkZXJlZC4gVGhpcyBpbmZvIGlzIHN0b3JlZCBvbiB0aGUgUHJpY2VTY2hlZHVsZSBhcyBhIGxpc3Qgb2YgUHJpY2VCcmVha3MuXHJcbiAgICAvLyBGaW5kIHRoZSBQcmljZUJyZWFrIHdpdGggdGhlIGhpZ2hlc3QgUXVhbnRpdHkgbGVzcyB0aGFuIHRoZSBxdWFudGl0eSBvcmRlcmVkLiBUaGUgcHJpY2Ugb24gdGhhdCBwcmljZSBicmVha1xyXG4gICAgLy8gaXMgdGhlIGNvc3QgcGVyIGl0ZW0uXHJcbiAgICBpZiAoIXRoaXMucXVhbnRpdHkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuaGFzUHJpY2UpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcmljZUJyZWFrcyA9IHRoaXMucHJvZHVjdC5QcmljZVNjaGVkdWxlLlByaWNlQnJlYWtzO1xyXG4gICAgY29uc3Qgc3RhcnRpbmdCcmVhayA9IF9taW5CeShwcmljZUJyZWFrcywgJ1F1YW50aXR5Jyk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRCcmVhayA9IHByaWNlQnJlYWtzLnJlZHVjZSgoY3VycmVudCwgY2FuZGlkYXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiBjYW5kaWRhdGUuUXVhbnRpdHkgPiBjdXJyZW50LlF1YW50aXR5ICYmIGNhbmRpZGF0ZS5RdWFudGl0eSA8PSB0aGlzLnF1YW50aXR5ID8gY2FuZGlkYXRlIDogY3VycmVudDtcclxuICAgIH0sIHN0YXJ0aW5nQnJlYWspO1xyXG4gICAgY29uc3QgbWFya3VwID0gdGhpcy50b3RhbFNwZWNNYXJrdXAoc2VsZWN0ZWRCcmVhay5QcmljZSwgdGhpcy5xdWFudGl0eSk7XHJcblxyXG4gICAgcmV0dXJuIChzZWxlY3RlZEJyZWFrLlByaWNlICsgbWFya3VwKSAqIHRoaXMucXVhbnRpdHk7XHJcbiAgfVxyXG5cclxuICB0b3RhbFNwZWNNYXJrdXAodW5pdFByaWNlOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgbWFya3VwcyA9IHRoaXMuc3BlY1NlbGVjdGlvbnMubWFwKChzKSA9PiB0aGlzLnNpbmdsZVNwZWNNYXJrdXAodW5pdFByaWNlLCBxdWFudGl0eSwgcykpO1xyXG4gICAgcmV0dXJuIG1hcmt1cHMucmVkdWNlKCh4LCBhY2MpID0+IHggKyBhY2MsIDApOyAvLyBzdW1cclxuICB9XHJcblxyXG4gIHNpbmdsZVNwZWNNYXJrdXAodW5pdFByaWNlOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIsIHNwZWM6IEZ1bGxTcGVjT3B0aW9uKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAoc3BlYy5QcmljZU1hcmt1cFR5cGUpIHtcclxuICAgICAgY2FzZSAnTm9NYXJrdXAnOlxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICBjYXNlICdBbW91bnRQZXJRdWFudGl0eSc6XHJcbiAgICAgICAgcmV0dXJuIHNwZWMuUHJpY2VNYXJrdXA7XHJcbiAgICAgIGNhc2UgJ0Ftb3VudFRvdGFsJzpcclxuICAgICAgICByZXR1cm4gc3BlYy5QcmljZU1hcmt1cCAvIHF1YW50aXR5O1xyXG4gICAgICBjYXNlICdQZXJjZW50YWdlJzpcclxuICAgICAgICByZXR1cm4gc3BlYy5QcmljZU1hcmt1cCAqIHVuaXRQcmljZSAqIDAuMDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJbWFnZVVybHMoKSB7XHJcbiAgICBjb25zdCBob3N0ID0gJ2h0dHBzOi8vczMuZHVhbHN0YWNrLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL3N0YXRpY2NpbnRhcy5lcmV0YWlsaW5nLmNvbS9pbWFnZXMvcHJvZHVjdCc7XHJcbiAgICBjb25zdCBpbWFnZXMgPSB0aGlzLnByb2R1Y3QueHAuSW1hZ2VzIHx8IFtdO1xyXG4gICAgcmV0dXJuIGltYWdlcy5tYXAoKGkpID0+IGkuVXJsLnJlcGxhY2UoJ3t1cmx9JywgaG9zdCkpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgLy8gVGhpcyBtYW51YWxseSB0cmlnZ2VycyBhbmd1bGFyJ3MgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbmQgYXZvaWRzIHRoZSBpbWZhbW91c1xyXG4gICAgLy8gXCJFeHByZXNzaW9uIGhhcyBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBjaGVja2VkXCIgZXJyb3IuXHJcbiAgICAvLyBDYXVzZWQgYnkgc29tZXRoaW5nIGluIHNwZWMgZm9ybVxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==