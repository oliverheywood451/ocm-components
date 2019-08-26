/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
export class OCMOrderSummary {
    constructor() { }
    /**
     * @param {?} field
     * @return {?}
     */
    display(field) {
        if (!(this.order.xp && this.order.xp.AddOnsCalculated)) {
            return 'Calculated during checkout';
        }
        if (this.order[`${field}`] === 0) {
            return 'Free';
        }
        return new CurrencyPipe('en-US').transform(this.order[`${field}`]);
    }
}
OCMOrderSummary.decorators = [
    { type: Component, args: [{
                template: "<div class=\"card mb-1\" *ngIf=\"order\">\r\n  <h5 class=\"card-header\">Order Summary</h5>\r\n  <div class=\"card-body\">\r\n    <h6 class=\"card-title\">{{order.LineItemCount}} Item(s) in Your Cart</h6>\r\n    <div class=\"text-right\"><b class=\"float-left\">Subtotal</b><span class=\"sub-total\">{{order.Subtotal | currency}}</span></div>\r\n    <div class=\"text-right\"><b class=\"float-left\">Shipping</b><span class=\"shipping-cost\">{{ display('ShippingCost') }}</span></div>\r\n    <div class=\"text-right\"><b class=\"float-left\">Tax</b><span class=\"tax-cost\">{{ display('TaxCost') }}</span></div>\r\n    <hr>\r\n    <div class=\"text-right lead\"><b class=\"float-left\">Total</b><span class=\"order-total\">{{order.Total | currency}}</span></div>\r\n  </div>\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
OCMOrderSummary.ctorParameters = () => [];
OCMOrderSummary.propDecorators = {
    order: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    OCMOrderSummary.prototype.order;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vY20tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZXhwb3NlZC9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNL0MsTUFBTSxPQUFPLGVBQWU7SUFHMUIsZ0JBQWUsQ0FBQzs7Ozs7SUFFaEIsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3RELE9BQU8sNEJBQTRCLENBQUM7U0FDckM7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULDR4QkFBNkM7O2FBRTlDOzs7OztvQkFFRSxLQUFLOzs7O0lBQU4sZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJ0BvcmRlcmNsb3VkL2FuZ3VsYXItc2RrJztcclxuaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPQ01PcmRlclN1bW1hcnkge1xyXG4gIEBJbnB1dCgpIG9yZGVyOiBPcmRlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBkaXNwbGF5KGZpZWxkKSB7XHJcbiAgICBpZiAoISh0aGlzLm9yZGVyLnhwICYmIHRoaXMub3JkZXIueHAuQWRkT25zQ2FsY3VsYXRlZCkpIHtcclxuICAgICAgcmV0dXJuICdDYWxjdWxhdGVkIGR1cmluZyBjaGVja291dCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3JkZXJbYCR7ZmllbGR9YF0gPT09IDApIHtcclxuICAgICAgcmV0dXJuICdGcmVlJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IEN1cnJlbmN5UGlwZSgnZW4tVVMnKS50cmFuc2Zvcm0odGhpcy5vcmRlcltgJHtmaWVsZH1gXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==