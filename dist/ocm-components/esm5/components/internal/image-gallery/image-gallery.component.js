/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { fromEvent } from 'rxjs';
var OCMImageGallery = /** @class */ (function () {
    function OCMImageGallery() {
        this.imgUrls = [];
        // gallerySize can be changed and the component logic + behavior will all work. However, the UI may look wonky.
        this.gallerySize = 5;
        this.selectedIndex = 0;
        this.startIndex = 0;
        this.endIndex = this.gallerySize - 1;
        this.faAngleLeft = faAngleLeft;
        this.faAngleRight = faAngleRight;
        this.isResponsiveView = window.innerWidth > 900;
    }
    /**
     * @return {?}
     */
    OCMImageGallery.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        fromEvent(window, 'resize').subscribe((/**
         * @return {?}
         */
        function () { return _this.onResize(); }));
    };
    /**
     * @return {?}
     */
    OCMImageGallery.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.isResponsiveView = window.innerWidth > 900;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    OCMImageGallery.prototype.select = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.selectedIndex = this.imgUrls.indexOf(url);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    OCMImageGallery.prototype.isSelected = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.imgUrls.indexOf(url) === this.selectedIndex;
    };
    /**
     * @return {?}
     */
    OCMImageGallery.prototype.getGallery = /**
     * @return {?}
     */
    function () {
        return this.imgUrls.slice(this.startIndex, this.endIndex + 1);
    };
    /**
     * @return {?}
     */
    OCMImageGallery.prototype.forward = /**
     * @return {?}
     */
    function () {
        this.selectedIndex++;
        if (this.selectedIndex > Math.min(this.endIndex, this.imgUrls.length - 1)) {
            // move images over one
            this.startIndex++;
            this.endIndex++;
            if (this.selectedIndex === this.imgUrls.length) {
                // cycle to the beginning
                this.selectedIndex = 0;
                this.startIndex = 0;
                this.endIndex = this.gallerySize - 1;
            }
        }
    };
    /**
     * @return {?}
     */
    OCMImageGallery.prototype.backward = /**
     * @return {?}
     */
    function () {
        this.selectedIndex--;
        if (this.selectedIndex < this.startIndex) {
            // move images over one
            this.startIndex--;
            this.endIndex--;
            if (this.selectedIndex === -1) {
                // cycle to the end
                this.selectedIndex = this.imgUrls.length - 1;
                this.endIndex = this.imgUrls.length - 1;
                this.startIndex = Math.max(this.imgUrls.length - this.gallerySize, 0);
            }
        }
    };
    OCMImageGallery.decorators = [
        { type: Component, args: [{
                    template: "<div class=\"bg-light\">\r\n  <div>\r\n    <ngx-image-zoom class=\"img-fluid mx-auto d-block pt-2 px-2\"\r\n                    appFallbackImage\r\n                    [thumbImage]=\"imgUrls && imgUrls[selectedIndex] ? imgUrls[selectedIndex] : 'http://placehold.it/500x500'\"\r\n                    [fullImage]=\"imgUrls && imgUrls[selectedIndex] ? imgUrls[selectedIndex] : []\"\r\n                    [zoomMode]=\"'hover'\"\r\n                    [enableScrollZoom]=\"true\"\r\n                    [enableLens]=\"true\"\r\n                    [lensWidth]=\"250\"\r\n                    [lensHeight]=\"250\"\r\n                    [circularLens]=\"true\"\r\n                    [magnification]=\"2\"></ngx-image-zoom>\r\n  </div>\r\n  <div>\r\n    <div class=\"gallery-container row\"\r\n         *ngIf=\"imgUrls.length > 1\">\r\n      <div class=\"col carousel-arrow\"\r\n           (click)=\"backward()\">\r\n        <fa-icon [icon]=\"faAngleLeft\"></fa-icon>\r\n      </div>\r\n      <div class=\"col gallery-item\"\r\n           [ngClass]=\"{'active' : isSelected(url) }\"\r\n           *ngFor=\"let url of  getGallery()\"\r\n           (click)=\"select(url)\">\r\n        <img [src]=\"url\">\r\n      </div>\r\n      <div class=\"col carousel-arrow\"\r\n           (click)=\"forward()\">\r\n        <fa-icon [icon]=\"faAngleRight\"></fa-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".gallery-container{padding-top:10px;padding-bottom:10px}.gallery-container .gallery-item{opacity:.5;padding:3px!important}.gallery-container .gallery-item img{width:70px;height:70px}.gallery-container .gallery-item.active{opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    OCMImageGallery.ctorParameters = function () { return []; };
    OCMImageGallery.propDecorators = {
        imgUrls: [{ type: Input }]
    };
    return OCMImageGallery;
}());
export { OCMImageGallery };
if (false) {
    /** @type {?} */
    OCMImageGallery.prototype.imgUrls;
    /**
     * @type {?}
     * @private
     */
    OCMImageGallery.prototype.gallerySize;
    /** @type {?} */
    OCMImageGallery.prototype.selectedIndex;
    /** @type {?} */
    OCMImageGallery.prototype.startIndex;
    /** @type {?} */
    OCMImageGallery.prototype.endIndex;
    /** @type {?} */
    OCMImageGallery.prototype.faAngleLeft;
    /** @type {?} */
    OCMImageGallery.prototype.faAngleRight;
    /** @type {?} */
    OCMImageGallery.prototype.isResponsiveView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vY20tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW50ZXJuYWwvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpDO0lBZ0JFO1FBWFMsWUFBTyxHQUFhLEVBQUUsQ0FBQzs7UUFHZixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsYUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBSTFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0Qsa0NBQVE7OztJQUFSO1FBQUEsaUJBRUM7UUFEQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQWYsQ0FBZSxFQUFDLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELGdDQUFNOzs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxvQ0FBVTs7OztJQUFWLFVBQVcsR0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFFRCxpQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN6RSx1QkFBdUI7WUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQzlDLHlCQUF5QjtnQkFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3hDLHVCQUF1QjtZQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDN0IsbUJBQW1CO2dCQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3ZFO1NBQ0Y7SUFDSCxDQUFDOztnQkFuRUYsU0FBUyxTQUFDO29CQUNULG00Q0FBNkM7O2lCQUU5Qzs7Ozs7MEJBRUUsS0FBSzs7SUErRFIsc0JBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQWhFWSxlQUFlOzs7SUFDMUIsa0NBQWdDOzs7OztJQUdoQyxzQ0FBaUM7O0lBQ2pDLHdDQUFrQjs7SUFDbEIscUNBQWU7O0lBQ2YsbUNBQWdDOztJQUNoQyxzQ0FBMEI7O0lBQzFCLHVDQUE0Qjs7SUFDNUIsMkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZhQW5nbGVMZWZ0LCBmYUFuZ2xlUmlnaHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPQ01JbWFnZUdhbGxlcnkgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGltZ1VybHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIC8vIGdhbGxlcnlTaXplIGNhbiBiZSBjaGFuZ2VkIGFuZCB0aGUgY29tcG9uZW50IGxvZ2ljICsgYmVoYXZpb3Igd2lsbCBhbGwgd29yay4gSG93ZXZlciwgdGhlIFVJIG1heSBsb29rIHdvbmt5LlxyXG4gIHByaXZhdGUgcmVhZG9ubHkgZ2FsbGVyeVNpemUgPSA1O1xyXG4gIHNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIHN0YXJ0SW5kZXggPSAwO1xyXG4gIGVuZEluZGV4ID0gdGhpcy5nYWxsZXJ5U2l6ZSAtIDE7XHJcbiAgZmFBbmdsZUxlZnQgPSBmYUFuZ2xlTGVmdDtcclxuICBmYUFuZ2xlUmlnaHQgPSBmYUFuZ2xlUmlnaHQ7XHJcbiAgaXNSZXNwb25zaXZlVmlldzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmlzUmVzcG9uc2l2ZVZpZXcgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDkwMDtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykuc3Vic2NyaWJlKCgpID0+IHRoaXMub25SZXNpemUoKSk7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZSgpIHtcclxuICAgIHRoaXMuaXNSZXNwb25zaXZlVmlldyA9IHdpbmRvdy5pbm5lcldpZHRoID4gOTAwO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmltZ1VybHMuaW5kZXhPZih1cmwpO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW1nVXJscy5pbmRleE9mKHVybCkgPT09IHRoaXMuc2VsZWN0ZWRJbmRleDtcclxuICB9XHJcblxyXG4gIGdldEdhbGxlcnkoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW1nVXJscy5zbGljZSh0aGlzLnN0YXJ0SW5kZXgsIHRoaXMuZW5kSW5kZXggKyAxKTtcclxuICB9XHJcblxyXG4gIGZvcndhcmQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXgrKztcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiBNYXRoLm1pbih0aGlzLmVuZEluZGV4LCB0aGlzLmltZ1VybHMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgLy8gbW92ZSBpbWFnZXMgb3ZlciBvbmVcclxuICAgICAgdGhpcy5zdGFydEluZGV4Kys7XHJcbiAgICAgIHRoaXMuZW5kSW5kZXgrKztcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5pbWdVcmxzLmxlbmd0aCkge1xyXG4gICAgICAgIC8vIGN5Y2xlIHRvIHRoZSBiZWdpbm5pbmdcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5lbmRJbmRleCA9IHRoaXMuZ2FsbGVyeVNpemUgLSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiYWNrd2FyZCgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleC0tO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA8IHRoaXMuc3RhcnRJbmRleCkge1xyXG4gICAgICAvLyBtb3ZlIGltYWdlcyBvdmVyIG9uZVxyXG4gICAgICB0aGlzLnN0YXJ0SW5kZXgtLTtcclxuICAgICAgdGhpcy5lbmRJbmRleC0tO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIC8vIGN5Y2xlIHRvIHRoZSBlbmRcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmltZ1VybHMubGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzLmVuZEluZGV4ID0gdGhpcy5pbWdVcmxzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy5zdGFydEluZGV4ID0gTWF0aC5tYXgodGhpcy5pbWdVcmxzLmxlbmd0aCAtIHRoaXMuZ2FsbGVyeVNpemUsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==