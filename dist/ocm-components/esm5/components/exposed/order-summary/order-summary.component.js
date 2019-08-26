/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
var OCMOrderSummary = /** @class */ (function () {
    function OCMOrderSummary() {
    }
    /**
     * @param {?} field
     * @return {?}
     */
    OCMOrderSummary.prototype.display = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (!(this.order.xp && this.order.xp.AddOnsCalculated)) {
            return 'Calculated during checkout';
        }
        if (this.order["" + field] === 0) {
            return 'Free';
        }
        return new CurrencyPipe('en-US').transform(this.order["" + field]);
    };
    OCMOrderSummary.decorators = [
        { type: Component, args: [{
                    template: "<div class=\"card mb-1\" *ngIf=\"order\">\r\n  <h5 class=\"card-header\">Order Summary</h5>\r\n  <div class=\"card-body\">\r\n    <h6 class=\"card-title\">{{order.LineItemCount}} Item(s) in Your Cart</h6>\r\n    <div class=\"text-right\"><b class=\"float-left\">Subtotal</b><span class=\"sub-total\">{{order.Subtotal | currency}}</span></div>\r\n    <div class=\"text-right\"><b class=\"float-left\">Shipping</b><span class=\"shipping-cost\">{{ display('ShippingCost') }}</span></div>\r\n    <div class=\"text-right\"><b class=\"float-left\">Tax</b><span class=\"tax-cost\">{{ display('TaxCost') }}</span></div>\r\n    <hr>\r\n    <div class=\"text-right lead\"><b class=\"float-left\">Total</b><span class=\"order-total\">{{order.Total | currency}}</span></div>\r\n  </div>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    OCMOrderSummary.ctorParameters = function () { return []; };
    OCMOrderSummary.propDecorators = {
        order: [{ type: Input }]
    };
    return OCMOrderSummary;
}());
export { OCMOrderSummary };
if (false) {
    /** @type {?} */
    OCMOrderSummary.prototype.order;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vY20tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZXhwb3NlZC9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0M7SUFPRTtJQUFlLENBQUM7Ozs7O0lBRWhCLGlDQUFPOzs7O0lBQVAsVUFBUSxLQUFLO1FBQ1gsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUN0RCxPQUFPLDRCQUE0QixDQUFDO1NBQ3JDO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUcsS0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUcsS0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULDR4QkFBNkM7O2lCQUU5Qzs7Ozs7d0JBRUUsS0FBSzs7SUFlUixzQkFBQztDQUFBLEFBcEJELElBb0JDO1NBaEJZLGVBQWU7OztJQUMxQixnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnQG9yZGVyY2xvdWQvYW5ndWxhci1zZGsnO1xyXG5pbXBvcnQgeyBDdXJyZW5jeVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL29yZGVyLXN1bW1hcnkuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE9DTU9yZGVyU3VtbWFyeSB7XHJcbiAgQElucHV0KCkgb3JkZXI6IE9yZGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGRpc3BsYXkoZmllbGQpIHtcclxuICAgIGlmICghKHRoaXMub3JkZXIueHAgJiYgdGhpcy5vcmRlci54cC5BZGRPbnNDYWxjdWxhdGVkKSkge1xyXG4gICAgICByZXR1cm4gJ0NhbGN1bGF0ZWQgZHVyaW5nIGNoZWNrb3V0JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcmRlcltgJHtmaWVsZH1gXSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gJ0ZyZWUnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgQ3VycmVuY3lQaXBlKCdlbi1VUycpLnRyYW5zZm9ybSh0aGlzLm9yZGVyW2Ake2ZpZWxkfWBdKTtcclxuICB9XHJcbn1cclxuIl19