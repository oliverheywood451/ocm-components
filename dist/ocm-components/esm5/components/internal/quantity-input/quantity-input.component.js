/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
var OCMQuantityInput = /** @class */ (function () {
    function OCMQuantityInput() {
        this.qtyChange = new EventEmitter();
        this.isDefaultSet = false;
        this.isQtyRestricted = false;
    }
    /**
     * @return {?}
     */
    OCMQuantityInput.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = new FormGroup({
            quantity: new FormControl(1, [Validators.required]),
        });
    };
    /**
     * @return {?}
     */
    OCMQuantityInput.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this.limits)
            return;
        this.isQtyRestricted = this.limits.restrictedQuantities.length !== 0;
        if (!this.isDefaultSet)
            this.setDefault(); // capture default once inputs are set
        this.quantityChangeListener();
        if (!this.existingQty) {
            this.qtyChange.emit(this.form.get('quantity').value);
        }
    };
    /**
     * @return {?}
     */
    OCMQuantityInput.prototype.setDefault = /**
     * @return {?}
     */
    function () {
        this.isDefaultSet = true;
        this.form.setValue({ quantity: this.getDefaultQty() });
    };
    /**
     * @return {?}
     */
    OCMQuantityInput.prototype.quantityChangeListener = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.form.valueChanges.pipe(debounceTime(500)).subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.form.valid && !isNaN(_this.form.value.quantity)) {
                _this.qtyChange.emit(_this.form.value.quantity);
            }
        }));
    };
    /**
     * @return {?}
     */
    OCMQuantityInput.prototype.getDefaultQty = /**
     * @return {?}
     */
    function () {
        if (this.existingQty)
            return this.existingQty;
        if (this.limits.restrictedQuantities.length)
            return this.limits.restrictedQuantities[0];
        return this.limits.minPerOrder;
    };
    OCMQuantityInput.decorators = [
        { type: Component, args: [{
                    template: "<form [formGroup]=\"form\">\r\n  <div class=\"form-group mb-0\">\r\n    <label for=\"quantity\" class=\"sr-only\">Product Quantity</label>\r\n    <input\r\n      *ngIf=\"!isQtyRestricted\"\r\n      id=\"quantity\"\r\n      type=\"number\"\r\n      formControlName=\"quantity\"\r\n      class=\"form-control text-center\"\r\n      placeholder=\"0\"\r\n      style=\"min-width:65px\"\r\n      aria-label=\"Quantity Input Selector\"\r\n      min=\"1\"\r\n      aria-describedby=\"quantity\"\r\n    />\r\n    <select\r\n      *ngIf=\"isQtyRestricted\"\r\n      class=\"form-control text-center\"\r\n      style=\"min-width:65px\"\r\n      formControlName=\"quantity\"\r\n      id=\"quantity\"\r\n    >\r\n      <option *ngFor=\"let qty of limits.restrictedQuantities\" [value]=\"qty\">\r\n        {{ qty }}\r\n      </option>\r\n    </select>\r\n  </div>\r\n</form>\r\n<small\r\n  *ngIf=\"form.controls['quantity'].getError('required')\"\r\n  class=\"alert alert-danger error-message c-error-message text-center\"\r\n>\r\n  Please enter a quantity\r\n  <br />\r\n</small>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    OCMQuantityInput.ctorParameters = function () { return []; };
    OCMQuantityInput.propDecorators = {
        limits: [{ type: Input }],
        existingQty: [{ type: Input }],
        qtyChange: [{ type: Output }]
    };
    return OCMQuantityInput;
}());
export { OCMQuantityInput };
if (false) {
    /** @type {?} */
    OCMQuantityInput.prototype.limits;
    /** @type {?} */
    OCMQuantityInput.prototype.existingQty;
    /** @type {?} */
    OCMQuantityInput.prototype.qtyChange;
    /** @type {?} */
    OCMQuantityInput.prototype.form;
    /** @type {?} */
    OCMQuantityInput.prototype.isDefaultSet;
    /** @type {?} */
    OCMQuantityInput.prototype.isQtyRestricted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbnRpdHktaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vb2NtLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ludGVybmFsL3F1YW50aXR5LWlucHV0L3F1YW50aXR5LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTlDO0lBYUU7UUFOVSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUdqRCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixvQkFBZSxHQUFHLEtBQUssQ0FBQztJQUVULENBQUM7Ozs7SUFFaEIsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUN4QixRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BELENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLHNDQUFzQztRQUNqRixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7Ozs7SUFFRCxxQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCxpREFBc0I7OztJQUF0QjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQ3ZELElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3ZELEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9DO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsd0NBQWE7OztJQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsTUFBTTtZQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ2pDLENBQUM7O2dCQWhERixTQUFTLFNBQUM7b0JBQ1QsMmpDQUE4Qzs7aUJBRS9DOzs7Ozt5QkFFRSxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsTUFBTTs7SUE4RFQsdUJBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQWpFWSxnQkFBZ0I7OztJQUMzQixrQ0FBZ0M7O0lBQ2hDLHVDQUE2Qjs7SUFDN0IscUNBQWlEOztJQUVqRCxnQ0FBZ0I7O0lBQ2hCLHdDQUFxQjs7SUFDckIsMkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZ2V0IGFzIF9nZXQgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBRdWFudGl0eUxpbWl0cyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9xdWFudGl0eS1saW1pdHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL3F1YW50aXR5LWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9xdWFudGl0eS1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT0NNUXVhbnRpdHlJbnB1dCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBsaW1pdHM6IFF1YW50aXR5TGltaXRzO1xyXG4gIEBJbnB1dCgpIGV4aXN0aW5nUXR5OiBudW1iZXI7XHJcbiAgQE91dHB1dCgpIHF0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgaXNEZWZhdWx0U2V0ID0gZmFsc2U7XHJcbiAgaXNRdHlSZXN0cmljdGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgcXVhbnRpdHk6IG5ldyBGb3JtQ29udHJvbCgxLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5saW1pdHMpIHJldHVybjtcclxuICAgIHRoaXMuaXNRdHlSZXN0cmljdGVkID0gdGhpcy5saW1pdHMucmVzdHJpY3RlZFF1YW50aXRpZXMubGVuZ3RoICE9PSAwO1xyXG4gICAgaWYgKCF0aGlzLmlzRGVmYXVsdFNldCkgdGhpcy5zZXREZWZhdWx0KCk7IC8vIGNhcHR1cmUgZGVmYXVsdCBvbmNlIGlucHV0cyBhcmUgc2V0XHJcbiAgICB0aGlzLnF1YW50aXR5Q2hhbmdlTGlzdGVuZXIoKTtcclxuICAgIGlmICghdGhpcy5leGlzdGluZ1F0eSkge1xyXG4gICAgICB0aGlzLnF0eUNoYW5nZS5lbWl0KHRoaXMuZm9ybS5nZXQoJ3F1YW50aXR5JykudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RGVmYXVsdCgpIHtcclxuICAgIHRoaXMuaXNEZWZhdWx0U2V0ID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9ybS5zZXRWYWx1ZSh7IHF1YW50aXR5OiB0aGlzLmdldERlZmF1bHRRdHkoKSB9KTtcclxuICB9XHJcblxyXG4gIHF1YW50aXR5Q2hhbmdlTGlzdGVuZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQgJiYgIWlzTmFOKHRoaXMuZm9ybS52YWx1ZS5xdWFudGl0eSkpIHtcclxuICAgICAgICB0aGlzLnF0eUNoYW5nZS5lbWl0KHRoaXMuZm9ybS52YWx1ZS5xdWFudGl0eSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdFF0eSgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuZXhpc3RpbmdRdHkpIHJldHVybiB0aGlzLmV4aXN0aW5nUXR5O1xyXG4gICAgaWYgKHRoaXMubGltaXRzLnJlc3RyaWN0ZWRRdWFudGl0aWVzLmxlbmd0aCkgcmV0dXJuIHRoaXMubGltaXRzLnJlc3RyaWN0ZWRRdWFudGl0aWVzWzBdO1xyXG4gICAgcmV0dXJuIHRoaXMubGltaXRzLm1pblBlck9yZGVyO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETyAtIGhhbmRsZSB0aGVzZSBlcnJvciBzaXR1YXRpb25zXHJcblxyXG4gIC8vIGlmIChpbnZlbnRvcnkgPCBtaW4pIHtcclxuICAvLyAgIGVycm9yLlByb2R1Y3RRdWFudGl0eUVycm9yLm1lc3NhZ2UgPSBgT3V0IG9mIHN0b2NrLmA7XHJcbiAgLy8gICBlcnJvci5Qcm9kdWN0UXVhbnRpdHlFcnJvci5vdXRPZlN0b2NrID0gdHJ1ZTtcclxuICAvLyAgIHJldHVybiBlcnJvcjtcclxuICAvLyB9XHJcbiAgLy8gaWYgKHF0eSA8IG1pbikge1xyXG4gIC8vICAgZXJyb3IuUHJvZHVjdFF1YW50aXR5RXJyb3IubWVzc2FnZSA9IGBBdCBsZWFzdCAke21pbn0gbXVzdCBiZSBvcmRlcmVkLmA7XHJcbiAgLy8gICByZXR1cm4gZXJyb3I7XHJcbiAgLy8gfVxyXG4gIC8vIGlmIChxdHkgPiBpbnZlbnRvcnkpIHtcclxuICAvLyAgIGVycm9yLlByb2R1Y3RRdWFudGl0eUVycm9yLm1lc3NhZ2UgPSBgT25seSAke2ludmVudG9yeX0gYXZhaWxhYmxlIGluIGludmVudG9yeS5gO1xyXG4gIC8vICAgcmV0dXJuIGVycm9yO1xyXG4gIC8vIH1cclxuICAvLyBpZiAocXR5ID4gbWF4KSB7XHJcbiAgLy8gICBlcnJvci5Qcm9kdWN0UXVhbnRpdHlFcnJvci5tZXNzYWdlID0gYEF0IG1vc3QgJHttYXh9IGFsbG93ZWQgcGVyIG9yZGVyLmA7XHJcbiAgLy8gICByZXR1cm4gZXJyb3I7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==