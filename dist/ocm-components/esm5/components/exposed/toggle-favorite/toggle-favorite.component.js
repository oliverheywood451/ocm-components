/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faHeart as _faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { faHeart as _faHeartOutline } from '@fortawesome/free-regular-svg-icons';
var OCMToggleFavorite = /** @class */ (function () {
    function OCMToggleFavorite() {
        this.faHeartFilled = _faHeartFilled;
        this.faHeartOutline = _faHeartOutline;
        this.favoriteChanged = new EventEmitter();
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
    return OCMToggleFavorite;
}());
export { OCMToggleFavorite };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWZhdm9yaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL29jbS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9leHBvc2VkL3RvZ2dsZS1mYXZvcml0ZS90b2dnbGUtZmF2b3JpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxPQUFPLElBQUksY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxFQUFFLE9BQU8sSUFBSSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVqRjtJQUFBO1FBS0Usa0JBQWEsR0FBRyxjQUFjLENBQUM7UUFDL0IsbUJBQWMsR0FBRyxlQUFlLENBQUM7UUFFdkIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBQzFELENBQUM7O2dCQVRBLFNBQVMsU0FBQztvQkFDVCx5T0FBK0M7O2lCQUVoRDs7OzJCQUlFLEtBQUs7a0NBQ0wsTUFBTTs7SUFDVCx3QkFBQztDQUFBLEFBVEQsSUFTQztTQUxZLGlCQUFpQjs7O0lBQzVCLDBDQUErQjs7SUFDL0IsMkNBQWlDOztJQUNqQyxxQ0FBMkI7O0lBQzNCLDRDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZhSGVhcnQgYXMgX2ZhSGVhcnRGaWxsZWQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUhlYXJ0IGFzIF9mYUhlYXJ0T3V0bGluZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2dnbGUtZmF2b3JpdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvZ2dsZS1mYXZvcml0ZS5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT0NNVG9nZ2xlRmF2b3JpdGUge1xyXG4gIGZhSGVhcnRGaWxsZWQgPSBfZmFIZWFydEZpbGxlZDtcclxuICBmYUhlYXJ0T3V0bGluZSA9IF9mYUhlYXJ0T3V0bGluZTtcclxuICBASW5wdXQoKSBmYXZvcml0ZTogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgZmF2b3JpdGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG59XHJcbiJdfQ==