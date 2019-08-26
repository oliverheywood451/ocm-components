/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faHeart as _faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { faHeart as _faHeartOutline } from '@fortawesome/free-regular-svg-icons';
export class OCMToggleFavorite {
    constructor() {
        this.faHeartFilled = _faHeartFilled;
        this.faHeartOutline = _faHeartOutline;
        this.favoriteChanged = new EventEmitter();
    }
}
OCMToggleFavorite.decorators = [
    { type: Component, args: [{
                template: "<fa-icon [ngClass]=\"{ 'text-danger': favorite }\"\r\n         [icon]=\"favorite ? faHeartFilled : faHeartOutline\"\r\n         (click)=\"favoriteChanged.emit(!favorite)\"\r\n         style=\"cursor: pointer;\"></fa-icon>",
                styles: [""]
            }] }
];
OCMToggleFavorite.propDecorators = {
    favorite: [{ type: Input }],
    favoriteChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    OCMToggleFavorite.prototype.faHeartFilled;
    /** @type {?} */
    OCMToggleFavorite.prototype.faHeartOutline;
    /** @type {?} */
    OCMToggleFavorite.prototype.favorite;
    /** @type {?} */
    OCMToggleFavorite.prototype.favoriteChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWZhdm9yaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29jbS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9leHBvc2VkL3RvZ2dsZS1mYXZvcml0ZS90b2dnbGUtZmF2b3JpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxPQUFPLElBQUksY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxFQUFFLE9BQU8sSUFBSSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU1qRixNQUFNLE9BQU8saUJBQWlCO0lBSjlCO1FBS0Usa0JBQWEsR0FBRyxjQUFjLENBQUM7UUFDL0IsbUJBQWMsR0FBRyxlQUFlLENBQUM7UUFFdkIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBQzFELENBQUM7OztZQVRBLFNBQVMsU0FBQztnQkFDVCx5T0FBK0M7O2FBRWhEOzs7dUJBSUUsS0FBSzs4QkFDTCxNQUFNOzs7O0lBSFAsMENBQStCOztJQUMvQiwyQ0FBaUM7O0lBQ2pDLHFDQUEyQjs7SUFDM0IsNENBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZmFIZWFydCBhcyBfZmFIZWFydEZpbGxlZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhSGVhcnQgYXMgX2ZhSGVhcnRPdXRsaW5lIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RvZ2dsZS1mYXZvcml0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9nZ2xlLWZhdm9yaXRlLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPQ01Ub2dnbGVGYXZvcml0ZSB7XHJcbiAgZmFIZWFydEZpbGxlZCA9IF9mYUhlYXJ0RmlsbGVkO1xyXG4gIGZhSGVhcnRPdXRsaW5lID0gX2ZhSGVhcnRPdXRsaW5lO1xyXG4gIEBJbnB1dCgpIGZhdm9yaXRlOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBmYXZvcml0ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbn1cclxuIl19