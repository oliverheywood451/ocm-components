/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { fromEvent } from 'rxjs';
export class OCMImageGallery {
    constructor() {
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
    ngOnInit() {
        fromEvent(window, 'resize').subscribe((/**
         * @return {?}
         */
        () => this.onResize()));
    }
    /**
     * @return {?}
     */
    onResize() {
        this.isResponsiveView = window.innerWidth > 900;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    select(url) {
        this.selectedIndex = this.imgUrls.indexOf(url);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    isSelected(url) {
        return this.imgUrls.indexOf(url) === this.selectedIndex;
    }
    /**
     * @return {?}
     */
    getGallery() {
        return this.imgUrls.slice(this.startIndex, this.endIndex + 1);
    }
    /**
     * @return {?}
     */
    forward() {
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
    }
    /**
     * @return {?}
     */
    backward() {
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
    }
}
OCMImageGallery.decorators = [
    { type: Component, args: [{
                template: "<div class=\"bg-light\">\r\n  <div>\r\n    <ngx-image-zoom class=\"img-fluid mx-auto d-block pt-2 px-2\"\r\n                    appFallbackImage\r\n                    [thumbImage]=\"imgUrls && imgUrls[selectedIndex] ? imgUrls[selectedIndex] : 'http://placehold.it/500x500'\"\r\n                    [fullImage]=\"imgUrls && imgUrls[selectedIndex] ? imgUrls[selectedIndex] : []\"\r\n                    [zoomMode]=\"'hover'\"\r\n                    [enableScrollZoom]=\"true\"\r\n                    [enableLens]=\"true\"\r\n                    [lensWidth]=\"250\"\r\n                    [lensHeight]=\"250\"\r\n                    [circularLens]=\"true\"\r\n                    [magnification]=\"2\"></ngx-image-zoom>\r\n  </div>\r\n  <div>\r\n    <div class=\"gallery-container row\"\r\n         *ngIf=\"imgUrls.length > 1\">\r\n      <div class=\"col carousel-arrow\"\r\n           (click)=\"backward()\">\r\n        <fa-icon [icon]=\"faAngleLeft\"></fa-icon>\r\n      </div>\r\n      <div class=\"col gallery-item\"\r\n           [ngClass]=\"{'active' : isSelected(url) }\"\r\n           *ngFor=\"let url of  getGallery()\"\r\n           (click)=\"select(url)\">\r\n        <img [src]=\"url\">\r\n      </div>\r\n      <div class=\"col carousel-arrow\"\r\n           (click)=\"forward()\">\r\n        <fa-icon [icon]=\"faAngleRight\"></fa-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".gallery-container{padding-top:10px;padding-bottom:10px}.gallery-container .gallery-item{opacity:.5;padding:3px!important}.gallery-container .gallery-item img{width:70px;height:70px}.gallery-container .gallery-item.active{opacity:1}"]
            }] }
];
/** @nocollapse */
OCMImageGallery.ctorParameters = () => [];
OCMImageGallery.propDecorators = {
    imgUrls: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9vY20tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW50ZXJuYWwvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTWpDLE1BQU0sT0FBTyxlQUFlO0lBWTFCO1FBWFMsWUFBTyxHQUFhLEVBQUUsQ0FBQzs7UUFHZixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsYUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBSTFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0QsUUFBUTtRQUNOLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN6RSx1QkFBdUI7WUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQzlDLHlCQUF5QjtnQkFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN4Qyx1QkFBdUI7WUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQzdCLG1CQUFtQjtnQkFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN2RTtTQUNGO0lBQ0gsQ0FBQzs7O1lBbkVGLFNBQVMsU0FBQztnQkFDVCxtNENBQTZDOzthQUU5Qzs7Ozs7c0JBRUUsS0FBSzs7OztJQUFOLGtDQUFnQzs7Ozs7SUFHaEMsc0NBQWlDOztJQUNqQyx3Q0FBa0I7O0lBQ2xCLHFDQUFlOztJQUNmLG1DQUFnQzs7SUFDaEMsc0NBQTBCOztJQUMxQix1Q0FBNEI7O0lBQzVCLDJDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmYUFuZ2xlTGVmdCwgZmFBbmdsZVJpZ2h0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT0NNSW1hZ2VHYWxsZXJ5IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpbWdVcmxzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAvLyBnYWxsZXJ5U2l6ZSBjYW4gYmUgY2hhbmdlZCBhbmQgdGhlIGNvbXBvbmVudCBsb2dpYyArIGJlaGF2aW9yIHdpbGwgYWxsIHdvcmsuIEhvd2V2ZXIsIHRoZSBVSSBtYXkgbG9vayB3b25reS5cclxuICBwcml2YXRlIHJlYWRvbmx5IGdhbGxlcnlTaXplID0gNTtcclxuICBzZWxlY3RlZEluZGV4ID0gMDtcclxuICBzdGFydEluZGV4ID0gMDtcclxuICBlbmRJbmRleCA9IHRoaXMuZ2FsbGVyeVNpemUgLSAxO1xyXG4gIGZhQW5nbGVMZWZ0ID0gZmFBbmdsZUxlZnQ7XHJcbiAgZmFBbmdsZVJpZ2h0ID0gZmFBbmdsZVJpZ2h0O1xyXG4gIGlzUmVzcG9uc2l2ZVZpZXc6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pc1Jlc3BvbnNpdmVWaWV3ID0gd2luZG93LmlubmVyV2lkdGggPiA5MDA7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUmVzaXplKCkpO1xyXG4gIH1cclxuXHJcbiAgb25SZXNpemUoKSB7XHJcbiAgICB0aGlzLmlzUmVzcG9uc2l2ZVZpZXcgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDkwMDtcclxuICB9XHJcblxyXG4gIHNlbGVjdCh1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5pbWdVcmxzLmluZGV4T2YodXJsKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmltZ1VybHMuaW5kZXhPZih1cmwpID09PSB0aGlzLnNlbGVjdGVkSW5kZXg7XHJcbiAgfVxyXG5cclxuICBnZXRHYWxsZXJ5KCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmltZ1VybHMuc2xpY2UodGhpcy5zdGFydEluZGV4LCB0aGlzLmVuZEluZGV4ICsgMSk7XHJcbiAgfVxyXG5cclxuICBmb3J3YXJkKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4Kys7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID4gTWF0aC5taW4odGhpcy5lbmRJbmRleCwgdGhpcy5pbWdVcmxzLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgIC8vIG1vdmUgaW1hZ2VzIG92ZXIgb25lXHJcbiAgICAgIHRoaXMuc3RhcnRJbmRleCsrO1xyXG4gICAgICB0aGlzLmVuZEluZGV4Kys7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRoaXMuaW1nVXJscy5sZW5ndGgpIHtcclxuICAgICAgICAvLyBjeWNsZSB0byB0aGUgYmVnaW5uaW5nXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuZW5kSW5kZXggPSB0aGlzLmdhbGxlcnlTaXplIC0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmFja3dhcmQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXgtLTtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPCB0aGlzLnN0YXJ0SW5kZXgpIHtcclxuICAgICAgLy8gbW92ZSBpbWFnZXMgb3ZlciBvbmVcclxuICAgICAgdGhpcy5zdGFydEluZGV4LS07XHJcbiAgICAgIHRoaXMuZW5kSW5kZXgtLTtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAvLyBjeWNsZSB0byB0aGUgZW5kXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5pbWdVcmxzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy5lbmRJbmRleCA9IHRoaXMuaW1nVXJscy5sZW5ndGggLSAxO1xyXG4gICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IE1hdGgubWF4KHRoaXMuaW1nVXJscy5sZW5ndGggLSB0aGlzLmdhbGxlcnlTaXplLCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=