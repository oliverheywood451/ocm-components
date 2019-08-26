/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { get as _get, keys as _keys, pickBy as _pickBy, identity as _identity, } from 'lodash';
export class OCMSpecForm {
    constructor() {
        this.specs = [];
        this.formUpdated = new EventEmitter();
        this.specForm = new FormGroup({});
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this.specs)
            return;
        this.specs = this.specs.sort((/**
         * @param {?} s1
         * @param {?} s2
         * @return {?}
         */
        (s1, s2) => s1.Options.length - s2.Options.length));
        this.specs.forEach((/**
         * @param {?} spec
         * @return {?}
         */
        (spec) => {
            /** @type {?} */
            const defaultOption = this.getDefaultOptionID(spec);
            /** @type {?} */
            const input = new FormControl(defaultOption, spec.Required ? [Validators.required] : []);
            this.specForm.addControl(spec.ID, input);
        }));
        this.onChange();
    }
    /**
     * @param {?} spec
     * @return {?}
     */
    getDefaultOptionID(spec) {
        if (spec.DefaultOptionID)
            return spec.DefaultOptionID;
        if (!spec.Required)
            return null;
        return _get(spec, 'Options[0].ID', null);
    }
    /**
     * @return {?}
     */
    onChange() {
        /** @type {?} */
        const specIDs = _keys(_pickBy(this.specForm.value, _identity));
        /** @type {?} */
        const selections = specIDs.map((/**
         * @param {?} specID
         * @return {?}
         */
        (specID) => {
            /** @type {?} */
            const spec = this.specs.find((/**
             * @param {?} s
             * @return {?}
             */
            (s) => s.ID === specID));
            /** @type {?} */
            const optionID = this.specForm.value[specID];
            /** @type {?} */
            const option = spec.Options.find((/**
             * @param {?} o
             * @return {?}
             */
            (o) => o.ID === optionID));
            option.SpecID = specID;
            return option;
        }));
        this.formUpdated.emit(selections);
    }
}
OCMSpecForm.decorators = [
    { type: Component, args: [{
                template: "<form [formGroup]=\"specForm\">\r\n  <div *ngFor=\"let spec of specs\"\r\n       class=\"my-1\">\r\n    <div class=\"mr-2\">\r\n      <b>{{spec.Name}}<span *ngIf=\"spec.Required && spec.Options.length > 1\">*</span>: </b><span *ngIf=\"spec.Options.length === 1\">{{ spec.Options[0].Value }}</span>\r\n    </div>\r\n    <select *ngIf=\"spec.Options.length > 1\"\r\n            class=\"custom-select\"\r\n            [formControlName]=\"spec.ID\"\r\n            (change)=\"onChange()\">\r\n      <option *ngIf=\"!spec.Required\"\r\n              value=\"null\"></option>\r\n      <option *ngFor=\"let option of spec.Options\"\r\n              [ngValue]=\"option.ID\">\r\n        {{ option.Value }}\r\n      </option>\r\n    </select>\r\n  </div>\r\n</form>",
                styles: [""]
            }] }
];
/** @nocollapse */
OCMSpecForm.ctorParameters = () => [];
OCMSpecForm.propDecorators = {
    specs: [{ type: Input }],
    formUpdated: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    OCMSpecForm.prototype.specs;
    /** @type {?} */
    OCMSpecForm.prototype.formUpdated;
    /** @type {?} */
    OCMSpecForm.prototype.specForm;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29jbS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9pbnRlcm5hbC9zcGVjLWZvcm0vc3BlYy1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsR0FBRyxJQUFJLElBQUksRUFFWCxJQUFJLElBQUksS0FBSyxFQUNiLE1BQU0sSUFBSSxPQUFPLEVBQ2pCLFFBQVEsSUFBSSxTQUFTLEdBQ3RCLE1BQU0sUUFBUSxDQUFDO0FBUWhCLE1BQU0sT0FBTyxXQUFXO0lBS3RCO1FBSlMsVUFBSyxHQUFnQixFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUkzRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxRQUFRO0lBRVIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7OztRQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFOztrQkFDcEIsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7O2tCQUM3QyxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLElBQWU7UUFDaEMsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUFFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxRQUFROztjQUNBLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDOztjQUN4RCxVQUFVLEdBQXFCLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTs7a0JBQ3BELElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQUM7O2tCQUM5QyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDOztrQkFDdEMsTUFBTSxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBQztZQUMvRCxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN2QixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLEVBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULDh2QkFBeUM7O2FBRTFDOzs7OztvQkFFRSxLQUFLOzBCQUNMLE1BQU07Ozs7SUFEUCw0QkFBaUM7O0lBQ2pDLGtDQUE2RDs7SUFDN0QsK0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJ1eWVyU3BlYyB9IGZyb20gJ0BvcmRlcmNsb3VkL2FuZ3VsYXItc2RrJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtcclxuICBnZXQgYXMgX2dldCxcclxuICBmaW5kIGFzIF9maW5kLFxyXG4gIGtleXMgYXMgX2tleXMsXHJcbiAgcGlja0J5IGFzIF9waWNrQnksXHJcbiAgaWRlbnRpdHkgYXMgX2lkZW50aXR5LFxyXG59IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEZ1bGxTcGVjT3B0aW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2Z1bGwtc3BlYy1vcHRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgX19nZW5lcmF0b3IgfSBmcm9tICd0c2xpYic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZVVybDogJy4vc3BlYy1mb3JtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zcGVjLWZvcm0uY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE9DTVNwZWNGb3JtIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHNwZWNzOiBCdXllclNwZWNbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSBmb3JtVXBkYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RnVsbFNwZWNPcHRpb25bXT4oKTtcclxuICBzcGVjRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc3BlY0Zvcm0gPSBuZXcgRm9ybUdyb3VwKHt9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKCF0aGlzLnNwZWNzKSByZXR1cm47XHJcbiAgICB0aGlzLnNwZWNzID0gdGhpcy5zcGVjcy5zb3J0KChzMSwgczIpID0+IHMxLk9wdGlvbnMubGVuZ3RoIC0gczIuT3B0aW9ucy5sZW5ndGgpO1xyXG4gICAgdGhpcy5zcGVjcy5mb3JFYWNoKChzcGVjKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb24gPSB0aGlzLmdldERlZmF1bHRPcHRpb25JRChzcGVjKTtcclxuICAgICAgY29uc3QgaW5wdXQgPSBuZXcgRm9ybUNvbnRyb2woZGVmYXVsdE9wdGlvbiwgc3BlYy5SZXF1aXJlZCA/IFtWYWxpZGF0b3JzLnJlcXVpcmVkXSA6IFtdKTtcclxuICAgICAgdGhpcy5zcGVjRm9ybS5hZGRDb250cm9sKHNwZWMuSUQsIGlucHV0KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbkNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdE9wdGlvbklEKHNwZWM6IEJ1eWVyU3BlYyk6IHN0cmluZyB7XHJcbiAgICBpZiAoc3BlYy5EZWZhdWx0T3B0aW9uSUQpIHJldHVybiBzcGVjLkRlZmF1bHRPcHRpb25JRDtcclxuICAgIGlmICghc3BlYy5SZXF1aXJlZCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gX2dldChzcGVjLCAnT3B0aW9uc1swXS5JRCcsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoKSB7XHJcbiAgICBjb25zdCBzcGVjSURzID0gX2tleXMoX3BpY2tCeSh0aGlzLnNwZWNGb3JtLnZhbHVlLCBfaWRlbnRpdHkpKTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbnM6IEZ1bGxTcGVjT3B0aW9uW10gPSBzcGVjSURzLm1hcCgoc3BlY0lEKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNwZWMgPSB0aGlzLnNwZWNzLmZpbmQoKHMpID0+IHMuSUQgPT09IHNwZWNJRCk7XHJcbiAgICAgIGNvbnN0IG9wdGlvbklEID0gdGhpcy5zcGVjRm9ybS52YWx1ZVtzcGVjSURdO1xyXG4gICAgICBjb25zdCBvcHRpb246IGFueSA9IHNwZWMuT3B0aW9ucy5maW5kKChvKSA9PiBvLklEID09PSBvcHRpb25JRCk7XHJcbiAgICAgIG9wdGlvbi5TcGVjSUQgPSBzcGVjSUQ7XHJcbiAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZm9ybVVwZGF0ZWQuZW1pdChzZWxlY3Rpb25zKTtcclxuICB9XHJcbn1cclxuIl19