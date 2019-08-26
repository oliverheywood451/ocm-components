import { EventEmitter, Component, ViewEncapsulation, Input, Output, ChangeDetectorRef, NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { map, without, has, minBy, get, keys, pickBy, identity } from 'lodash';
import { faHeart, faAngleLeft, faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeart$1 } from '@fortawesome/free-regular-svg-icons';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrencyPipe, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OCMProductCard = /** @class */ (function () {
    function OCMProductCard() {
        this.product = {
            PriceSchedule: {},
            xp: { Images: [] },
        };
        this.quantityLimits = {
            inventory: 0,
            maxPerOrder: 0,
            minPerOrder: 0,
            restrictedQuantities: [],
        };
        this.addedToCart = new EventEmitter();
        this.setIsFavorite = new EventEmitter();
        this.routeToProductDetails = new EventEmitter();
    }
    /**
     * @return {?}
     */
    OCMProductCard.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.isSetFavoriteUsed = this.setIsFavorite.observers.length > 0;
        /** @type {?} */
        var isAddedToCartUsed = this.addedToCart.observers.length > 0;
        this.isViewOnlyProduct = !this.product.PriceSchedule;
        this.hasSpecs = this.product.SpecCount > 0;
        this.shouldDisplayAddToCart = isAddedToCartUsed && !this.isViewOnlyProduct && !this.hasSpecs;
    };
    /**
     * @return {?}
     */
    OCMProductCard.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /**
         * this will be true if the parent component
         * is wired up to listen to the outputted event
         */
    };
    /**
     * @param {?} li
     * @return {?}
     */
    OCMProductCard.prototype.addToCart = /**
     * @param {?} li
     * @return {?}
     */
    function (li) {
        this.addedToCart.emit(li);
    };
    /**
     * @return {?}
     */
    OCMProductCard.prototype.getImageUrl = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = 'https://s3.dualstack.us-east-1.amazonaws.com/staticcintas.eretailing.com/images/product';
        /** @type {?} */
        var images = this.product.xp.Images || [];
        /** @type {?} */
        var result = map(images, (/**
         * @param {?} img
         * @return {?}
         */
        function (img) {
            return img.Url.replace('{url}', host);
        }));
        /** @type {?} */
        var filtered = without(result, undefined);
        return filtered.length > 0 ? filtered[0] : 'http://placehold.it/300x300';
    };
    /**
     * @return {?}
     */
    OCMProductCard.prototype.toDetails = /**
     * @return {?}
     */
    function () {
        this.routeToProductDetails.emit(this.product.ID);
    };
    OCMProductCard.decorators = [
        { type: Component, args: [{
                    template: "<div class=\"card mb-5 w-100 border-hover\">\r\n  <div class=\"ribbon ribbon-top-right bg-light\">\r\n    <ocm-toggle-favorite\r\n      *ngIf=\"isSetFavoriteUsed\"\r\n      title=\"Favorite\"\r\n      (click)=\"$event.stopPropagation()\"\r\n      [favorite]=\"isFavorite\"\r\n      (favoriteChanged)=\"setIsFavorite.emit($event)\"\r\n    ></ocm-toggle-favorite>\r\n  </div>\r\n  <img class=\"card-img-top img-fluid flex-shrink-0\" (click)=\"toDetails()\" [src]=\"getImageUrl()\" alt=\"{{ product.ID }}\" />\r\n  <div class=\"card-body d-flex flex-column justify-content-between bg-light\">\r\n    <h5 class=\"card-title\" title=\"{{ product.Name }}\">{{ product.Name }}</h5>\r\n    <p class=\"card-text text-muted\" [innerHtml]=\"product.ID\">\r\n      {{ product.ID }}\r\n    </p>\r\n    <div class=\"d-flex flex-wrap justify-content-between align-items-center\">\r\n      <p class=\"card-text mb-0\" *ngIf=\"product.PriceSchedule?.PriceBreaks\">\r\n        {{ (product?.PriceSchedule?.PriceBreaks)[0]?.Price || 0 | currency }}\r\n      </p>\r\n      <label for=\"quantity\" class=\"sr-only\">Quantity</label>\r\n      <ocm-quantity-input\r\n        class=\"w-50\"\r\n        id=\"quantity\"\r\n        [limits]=\"quantityLimits\"\r\n        [existingQty]=\"null\"\r\n        (qtyChange)=\"quantity = $event.detail\"\r\n      >\r\n      </ocm-quantity-input>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <button\r\n      *ngIf=\"shouldDisplayAddToCart\"\r\n      (click)=\"$event.stopPropagation()\"\r\n      class=\"btn btn-primary btn-block small\"\r\n      type=\"submit\"\r\n      (click)=\"addToCart($event)\"\r\n    >\r\n      Add <span class=\"d-md-none d-lg-inline\"> to Cart</span>\r\n    </button>\r\n    <button *ngIf=\"shouldDisplayAddToCart\" (click)=\"$event.stopPropagation()\" class=\"btn btn-primary btn-block small\" type=\"submit\">\r\n      Add <span class=\"d-md-none d-lg-inline\"> to Cart</span>\r\n    </button>\r\n    <button *ngIf=\"isViewOnlyProduct\" (click)=\"toDetails()\" class=\"btn btn-default btn-block btn-outline-dark\">\r\n      View\r\n      <span class=\"d-sm-none d-lg-inline\">Product</span>\r\n    </button>\r\n    <button *ngIf=\"hasSpecs\" (click)=\"toDetails()\" class=\"btn btn-primary btn-block small\">\r\n      Select\r\n      <span class=\"d-sm-none d-lg-inline\">Specs</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    OCMProductCard.propDecorators = {
        product: [{ type: Input }],
        isFavorite: [{ type: Input }],
        quantityLimits: [{ type: Input }],
        addedToCart: [{ type: Output }],
        setIsFavorite: [{ type: Output }],
        routeToProductDetails: [{ type: Output }]
    };
    return OCMProductCard;
}());
if (false) {
    /** @type {?} */
    OCMProductCard.prototype.product;
    /** @type {?} */
    OCMProductCard.prototype.isFavorite;
    /** @type {?} */
    OCMProductCard.prototype.quantityLimits;
    /** @type {?} */
    OCMProductCard.prototype.addedToCart;
    /** @type {?} */
    OCMProductCard.prototype.setIsFavorite;
    /** @type {?} */
    OCMProductCard.prototype.routeToProductDetails;
    /** @type {?} */
    OCMProductCard.prototype.quantity;
    /** @type {?} */
    OCMProductCard.prototype.shouldDisplayAddToCart;
    /** @type {?} */
    OCMProductCard.prototype.isViewOnlyProduct;
    /** @type {?} */
    OCMProductCard.prototype.isSetFavoriteUsed;
    /** @type {?} */
    OCMProductCard.prototype.hasSpecs;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OCMToggleFavorite = /** @class */ (function () {
    function OCMToggleFavorite() {
        this.faHeartFilled = faHeart;
        this.faHeartOutline = faHeart$1;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OCMProductCarousel = /** @class */ (function () {
    function OCMProductCarousel() {
        this.products = [];
        this.setIsFavorite = new EventEmitter();
        this.navigateToProductDetails = new EventEmitter();
        this.index = 0;
        this.rowLength = 4;
        this.faAngleLeft = faAngleLeft;
        this.faAngleRight = faAngleRight;
    }
    /**
     * @return {?}
     */
    OCMProductCarousel.prototype.left = /**
     * @return {?}
     */
    function () {
        this.index -= this.rowLength;
    };
    /**
     * @return {?}
     */
    OCMProductCarousel.prototype.right = /**
     * @return {?}
     */
    function () {
        this.index += this.rowLength;
    };
    /**
     * @return {?}
     */
    OCMProductCarousel.prototype.getProducts = /**
     * @return {?}
     */
    function () {
        return this.products.slice(this.index, this.index + this.rowLength);
    };
    /**
     * @param {?} productID
     * @return {?}
     */
    OCMProductCarousel.prototype.isFavorite = /**
     * @param {?} productID
     * @return {?}
     */
    function (productID) {
        return this.favoriteProducts.includes(productID);
    };
    /**
     * @param {?} isFavorite
     * @param {?} productID
     * @return {?}
     */
    OCMProductCarousel.prototype.setIsFavoriteEvent = /**
     * @param {?} isFavorite
     * @param {?} productID
     * @return {?}
     */
    function (isFavorite, productID) {
        this.setIsFavorite.emit({ isFavorite: isFavorite, productID: productID });
    };
    /**
     * @param {?} productID
     * @return {?}
     */
    OCMProductCarousel.prototype.toDetails = /**
     * @param {?} productID
     * @return {?}
     */
    function (productID) {
        this.navigateToProductDetails.emit({ productID: productID });
    };
    OCMProductCarousel.decorators = [
        { type: Component, args: [{
                    template: "<h3 class=\"my-4 text-center\">{{ displayTitle }}</h3>\r\n<div class=\"row align-items-center\">\r\n  <div class=\"col-1 carousel-arrow\">\r\n    <fa-icon [icon]=\"faAngleLeft\"\r\n             *ngIf=\"index > 0\"\r\n             (click)=\"left()\"></fa-icon>\r\n  </div>\r\n  <div class=\"col-10 product-list-grid row d-flex align-items-stretch\">\r\n    <ocm-product-card *ngFor=\"let product of getProducts(); let i = index\"\r\n                      class=\"col-lg-3 col-md-4 col-sm-6 d-flex flex-grow-1 flex-shrink-1\"\r\n                      [product]=\"product\"\r\n                      [quantityLimits]=\"quantityLimits[i]\"\r\n                      [isFavorite]=\"isFavorite(product.ID)\"\r\n                      (setIsFavorite)=\"setIsFavoriteEvent($event.detail, product.ID)\"\r\n                      (routeToProductDetails)=\"toDetails($event.detail)\">\r\n    </ocm-product-card>\r\n  </div>\r\n  <div class=\"col-1 carousel-arrow\">\r\n    <fa-icon [icon]=\"faAngleRight\"\r\n             *ngIf=\"index <= products.length - rowLength - 1\"\r\n             (click)=\"right()\"></fa-icon>\r\n  </div>\r\n</div>",
                    styles: [""]
                }] }
    ];
    OCMProductCarousel.propDecorators = {
        products: [{ type: Input }],
        displayTitle: [{ type: Input }],
        quantityLimits: [{ type: Input }],
        favoriteProducts: [{ type: Input }],
        setIsFavorite: [{ type: Output }],
        navigateToProductDetails: [{ type: Output }]
    };
    return OCMProductCarousel;
}());
if (false) {
    /** @type {?} */
    OCMProductCarousel.prototype.products;
    /** @type {?} */
    OCMProductCarousel.prototype.displayTitle;
    /** @type {?} */
    OCMProductCarousel.prototype.quantityLimits;
    /** @type {?} */
    OCMProductCarousel.prototype.favoriteProducts;
    /** @type {?} */
    OCMProductCarousel.prototype.setIsFavorite;
    /** @type {?} */
    OCMProductCarousel.prototype.navigateToProductDetails;
    /** @type {?} */
    OCMProductCarousel.prototype.index;
    /** @type {?} */
    OCMProductCarousel.prototype.rowLength;
    /** @type {?} */
    OCMProductCarousel.prototype.faAngleLeft;
    /** @type {?} */
    OCMProductCarousel.prototype.faAngleRight;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OCMProductDetails = /** @class */ (function () {
    function OCMProductDetails(changeDetectorRef) {
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
    OCMProductDetails.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this.product)
            return;
        // products without a price schedule are view-only.
        this.isOrderable = !!this.product.PriceSchedule;
        // free products dont need to display a price.
        this.hasPrice = has(this.product, 'PriceSchedule.PriceBreaks[0].Price');
        this.imageUrls = this.getImageUrls();
    };
    /**
     * @return {?}
     */
    OCMProductDetails.prototype.addToCart = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var Specs = this.specSelections.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return ({
            SpecID: o.SpecID,
            OptionID: o.ID,
            Value: o.Value,
        }); }));
        this.addToCartEvent.emit({
            ProductID: this.product.ID,
            Quantity: this.quantity,
            Specs: Specs,
        });
    };
    /**
     * @return {?}
     */
    OCMProductDetails.prototype.getTotalPrice = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        var priceBreaks = this.product.PriceSchedule.PriceBreaks;
        /** @type {?} */
        var startingBreak = minBy(priceBreaks, 'Quantity');
        /** @type {?} */
        var selectedBreak = priceBreaks.reduce((/**
         * @param {?} current
         * @param {?} candidate
         * @return {?}
         */
        function (current, candidate) {
            return candidate.Quantity > current.Quantity && candidate.Quantity <= _this.quantity ? candidate : current;
        }), startingBreak);
        /** @type {?} */
        var markup = this.totalSpecMarkup(selectedBreak.Price, this.quantity);
        return (selectedBreak.Price + markup) * this.quantity;
    };
    /**
     * @param {?} unitPrice
     * @param {?} quantity
     * @return {?}
     */
    OCMProductDetails.prototype.totalSpecMarkup = /**
     * @param {?} unitPrice
     * @param {?} quantity
     * @return {?}
     */
    function (unitPrice, quantity) {
        var _this = this;
        /** @type {?} */
        var markups = this.specSelections.map((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return _this.singleSpecMarkup(unitPrice, quantity, s); }));
        return markups.reduce((/**
         * @param {?} x
         * @param {?} acc
         * @return {?}
         */
        function (x, acc) { return x + acc; }), 0); // sum
    };
    /**
     * @param {?} unitPrice
     * @param {?} quantity
     * @param {?} spec
     * @return {?}
     */
    OCMProductDetails.prototype.singleSpecMarkup = /**
     * @param {?} unitPrice
     * @param {?} quantity
     * @param {?} spec
     * @return {?}
     */
    function (unitPrice, quantity, spec) {
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
    };
    /**
     * @return {?}
     */
    OCMProductDetails.prototype.getImageUrls = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = 'https://s3.dualstack.us-east-1.amazonaws.com/staticcintas.eretailing.com/images/product';
        /** @type {?} */
        var images = this.product.xp.Images || [];
        return images.map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.Url.replace('{url}', host); }));
    };
    /**
     * @return {?}
     */
    OCMProductDetails.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        // This manually triggers angular's change detection cycle and avoids the imfamous
        // "Expression has changed after it was checked" error.
        // Caused by something in spec form
        this.changeDetectorRef.detectChanges();
    };
    OCMProductDetails.decorators = [
        { type: Component, args: [{
                    template: "<div class=\"container mt-4\" *ngIf=\"product\">\r\n  <div class=\"row mb-5\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"position-relative d-block\">\r\n        <ocm-image-gallery [imgUrls]=\"imageUrls\"></ocm-image-gallery>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 bg-light\">\r\n      <h1 class=\"h1 my-0\">{{ product.Name }}</h1>\r\n      <div class=\"d-flex mt-2\">\r\n        <div class=\"mt-2 text-muted\">ID: {{ product.ID }}</div>\r\n        <div class=\"mt-2 ml-3\">\r\n          <ocm-toggle-favorite title=\"Favorite\"\r\n                               (click)=\"$event.stopPropagation()\"\r\n                               [favorite]=\"isFavorite\"\r\n                               (favoriteChanged)=\"setIsFavorite.emit($event.detail)\">\r\n          </ocm-toggle-favorite>\r\n        </div>\r\n        <div class=\"ml-auto\"\r\n             *ngIf=\"isOrderable\">\r\n          <ocm-quantity-input class=\"d-inline-block\"\r\n                              style=\"max-width: 100px\"\r\n                              [limits]=\"quantityLimits\"\r\n                              (qtyChange)=\"quantity = $event.detail\">\r\n          </ocm-quantity-input>\r\n          <button class=\"btn btn-primary ml-2\"\r\n                  type=\"submit\"\r\n                  (click)=\"addToCart()\">\r\n            Add to Cart\r\n            <span class=\"badge badge-light ml-2\">{{\r\n              getTotalPrice() | currency\r\n            }}</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <hr />\r\n      <p class=\"mt-4\"\r\n         [innerHTML]=\"product.Description || 'This product has no description.'\"></p>\r\n      <ocm-spec-form *ngIf=\"isOrderable && specs.Items.length > 0\"\r\n                     [specs]=\"specs.Items\"\r\n                     (formUpdated)=\"specSelections = $event.detail\"></ocm-spec-form>\r\n      <div *ngIf=\"!isOrderable\"\r\n           class=\"alert alert-info\">\r\n        This is a view-only product and cannot be ordered\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"relatedProducts$ | async; let relatedProducts\">\r\n    <ocm-product-carousel *ngIf=\"relatedProducts.length > 0\"\r\n                          displayTitle=\"Related Products\"\r\n                          [products]=\"relatedProducts\">\r\n    </ocm-product-carousel>\r\n  </div>\r\n</div>",
                    styles: [".make-inline{max-width:100px}"]
                }] }
    ];
    /** @nocollapse */
    OCMProductDetails.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    OCMProductDetails.propDecorators = {
        specs: [{ type: Input }],
        product: [{ type: Input }],
        isFavorite: [{ type: Input }],
        quantityLimits: [{ type: Input }],
        addToCartEvent: [{ type: Output }],
        setIsFavorite: [{ type: Output }]
    };
    return OCMProductDetails;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OCMSpecForm = /** @class */ (function () {
    function OCMSpecForm() {
        this.specs = [];
        this.formUpdated = new EventEmitter();
        this.specForm = new FormGroup({});
    }
    /**
     * @return {?}
     */
    OCMSpecForm.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    OCMSpecForm.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.specs)
            return;
        this.specs = this.specs.sort((/**
         * @param {?} s1
         * @param {?} s2
         * @return {?}
         */
        function (s1, s2) { return s1.Options.length - s2.Options.length; }));
        this.specs.forEach((/**
         * @param {?} spec
         * @return {?}
         */
        function (spec) {
            /** @type {?} */
            var defaultOption = _this.getDefaultOptionID(spec);
            /** @type {?} */
            var input = new FormControl(defaultOption, spec.Required ? [Validators.required] : []);
            _this.specForm.addControl(spec.ID, input);
        }));
        this.onChange();
    };
    /**
     * @param {?} spec
     * @return {?}
     */
    OCMSpecForm.prototype.getDefaultOptionID = /**
     * @param {?} spec
     * @return {?}
     */
    function (spec) {
        if (spec.DefaultOptionID)
            return spec.DefaultOptionID;
        if (!spec.Required)
            return null;
        return get(spec, 'Options[0].ID', null);
    };
    /**
     * @return {?}
     */
    OCMSpecForm.prototype.onChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var specIDs = keys(pickBy(this.specForm.value, identity));
        /** @type {?} */
        var selections = specIDs.map((/**
         * @param {?} specID
         * @return {?}
         */
        function (specID) {
            /** @type {?} */
            var spec = _this.specs.find((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.ID === specID; }));
            /** @type {?} */
            var optionID = _this.specForm.value[specID];
            /** @type {?} */
            var option = spec.Options.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return o.ID === optionID; }));
            option.SpecID = specID;
            return option;
        }));
        this.formUpdated.emit(selections);
    };
    OCMSpecForm.decorators = [
        { type: Component, args: [{
                    template: "<form [formGroup]=\"specForm\">\r\n  <div *ngFor=\"let spec of specs\"\r\n       class=\"my-1\">\r\n    <div class=\"mr-2\">\r\n      <b>{{spec.Name}}<span *ngIf=\"spec.Required && spec.Options.length > 1\">*</span>: </b><span *ngIf=\"spec.Options.length === 1\">{{ spec.Options[0].Value }}</span>\r\n    </div>\r\n    <select *ngIf=\"spec.Options.length > 1\"\r\n            class=\"custom-select\"\r\n            [formControlName]=\"spec.ID\"\r\n            (change)=\"onChange()\">\r\n      <option *ngIf=\"!spec.Required\"\r\n              value=\"null\"></option>\r\n      <option *ngFor=\"let option of spec.Options\"\r\n              [ngValue]=\"option.ID\">\r\n        {{ option.Value }}\r\n      </option>\r\n    </select>\r\n  </div>\r\n</form>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    OCMSpecForm.ctorParameters = function () { return []; };
    OCMSpecForm.propDecorators = {
        specs: [{ type: Input }],
        formUpdated: [{ type: Output }]
    };
    return OCMSpecForm;
}());
if (false) {
    /** @type {?} */
    OCMSpecForm.prototype.specs;
    /** @type {?} */
    OCMSpecForm.prototype.formUpdated;
    /** @type {?} */
    OCMSpecForm.prototype.specForm;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
if (false) {
    /** @type {?} */
    OCMOrderSummary.prototype.order;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OCMLineitemTable = /** @class */ (function () {
    function OCMLineitemTable() {
        this.closeIcon = faTimes;
        this.deleteLineItem = new EventEmitter();
        this.updateQuantity = new EventEmitter();
        this.navigateToProductDetails = new EventEmitter();
    }
    /**
     * @param {?} object
     * @return {?}
     */
    OCMLineitemTable.prototype.log = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        debugger;
        console.log(object);
        console.log(this.lineItems);
    };
    /**
     * @param {?} lineItemID
     * @return {?}
     */
    OCMLineitemTable.prototype.removeLineItem = /**
     * @param {?} lineItemID
     * @return {?}
     */
    function (lineItemID) {
        this.deleteLineItem.emit({ lineItemID: lineItemID });
    };
    /**
     * @param {?} lineItemID
     * @param {?} quantity
     * @return {?}
     */
    OCMLineitemTable.prototype.changeQuantity = /**
     * @param {?} lineItemID
     * @param {?} quantity
     * @return {?}
     */
    function (lineItemID, quantity) {
        this.getLineItem(lineItemID).Quantity = quantity;
        this.updateQuantity.emit({ lineItemID: lineItemID, quantity: quantity });
    };
    /**
     * @param {?} lineItemID
     * @return {?}
     */
    OCMLineitemTable.prototype.getImageUrl = /**
     * @param {?} lineItemID
     * @return {?}
     */
    function (lineItemID) {
        return get(this.getLineItem(lineItemID), 'Product.xp.Images[0].Url', 'http://placehold.it/300x300');
    };
    /**
     * @param {?} lineItemID
     * @return {?}
     */
    OCMLineitemTable.prototype.getLineItem = /**
     * @param {?} lineItemID
     * @return {?}
     */
    function (lineItemID) {
        return this.lineItems.Items.find((/**
         * @param {?} li
         * @return {?}
         */
        function (li) { return li.ID === lineItemID; }));
    };
    OCMLineitemTable.decorators = [
        { type: Component, args: [{
                    selector: 'ocm-lineitem-table',
                    template: "<div class=\"card border shadow-sm mb-4\">\r\n  <div class=\"card-header p-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"card-title mb-0\">\r\n          Line Items\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"px-3 pt-2 d-none d-sm-block border-bottom\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-7\">\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4 text-center\">\r\n            <h6>Price</h6>\r\n          </div>\r\n          <div class=\"col-4 text-center\">\r\n            <h6>Qty</h6>\r\n          </div>\r\n          <div class=\"col-4 text-center\">\r\n            <h6>Total</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a (click)=\"log(lineItems)\">click</a>\r\n  <div class=\"flex-none\">\r\n    {{ lineItems.Items.length }}\r\n    <div *ngFor=\"let li of lineItems.Items; let i = index\">\r\n      {{i}}\r\n      <div class=\"m-2 row align-items-center\">\r\n        <div class=\"col-sm-7\">\r\n          <div class=\"row align-items-sm-center\">\r\n            <div class=\"col-3 p-0\">\r\n              <img class=\"img-thumbnail\"\r\n                   appFallbackImage\r\n                   [src]=\"getImageUrl(li.ID)\">\r\n            </div>\r\n            <div class=\"col-9\">\r\n              <h6>\r\n                <a (click)=\"navigateToProductDetails.emit({ productID: li.Product.ID })\"\r\n                   class=\"text-primary link\">{{li.Product.Name}}</a>\r\n                <small class=\"text-muted d-block\">{{li.Product.ID}}</small>\r\n              </h6>\r\n              <a class=\"text-danger btn btn-link px-0 link\"\r\n                 *ngIf=\"!readOnly\"\r\n                 (click)=\"removeLineItem(li.ID)\">Remove Item</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-5\">\r\n          <div class=\"row align-items-center pt-3 pt-sm-0\">\r\n            <div class=\"col-4 text-center\">\r\n              <span class=\"d-block d-sm-none\">Unit Price</span>\r\n              <span class=\"text-nowrap\">{{li.UnitPrice | currency}}</span>\r\n            </div>\r\n            <div class=\"col-4 text-center\">\r\n              <span class=\"d-block d-sm-none\">Qty</span>\r\n              <ocm-quantity-input *ngIf=\"!readOnly\"\r\n                                  [limits]=\"quantityLimits[i]\"\r\n                                  [existingQty]=\"li.Quantity\"\r\n                                  (qtyChange)=\"changeQuantity(li.ID, $event.detail)\"></ocm-quantity-input>\r\n              <span class=\"text-nowrap\"\r\n                    *ngIf=\"readOnly\">&times;{{ li.Quantity | number }}</span>\r\n            </div>\r\n            <div class=\"col-4 text-right\">\r\n              <span class=\"d-block d-sm-none\">Total</span>\r\n              <span class=\"text-nowrap\">{{ li.LineTotal | currency }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- hr only visible on mobile to more clearly distinguish between line items -->\r\n      <hr class=\"pb-4 d-block d-sm-none\">\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".link{cursor:pointer}.link:hover{text-decoration:underline!important}"]
                }] }
    ];
    /** @nocollapse */
    OCMLineitemTable.ctorParameters = function () { return []; };
    OCMLineitemTable.propDecorators = {
        lineItems: [{ type: Input }],
        readOnly: [{ type: Input }],
        quantityLimits: [{ type: Input }],
        deleteLineItem: [{ type: Output }],
        updateQuantity: [{ type: Output }],
        navigateToProductDetails: [{ type: Output }]
    };
    return OCMLineitemTable;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OCMCart = /** @class */ (function () {
    function OCMCart() {
        this.emptyCart = new EventEmitter();
        this.deleteLineItem = new EventEmitter();
        this.updateQuantity = new EventEmitter();
        this.navigateToProductDetails = new EventEmitter();
        this.navigateToProductList = new EventEmitter();
        this.navigateToCheckout = new EventEmitter();
    }
    /**
     * @return {?}
     */
    OCMCart.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} object
     * @return {?}
     */
    OCMCart.prototype.log = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        console.log(object);
        console.log(this.lineItems);
    };
    OCMCart.decorators = [
        { type: Component, args: [{
                    template: "<div class=\"mb-3 bg-quaternary\">\r\n  <div class=\"container py-3\">\r\n    <h1 class=\"display-4 m-0 headline-text text-center\">\r\n      Shopping Cart\r\n    </h1>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"my-3 d-flex justify-content-between\">\r\n    <button class=\"btn btn-outline-dark\"\r\n            (click)=\"navigateToProductList.emit()\">Continue Shopping</button>\r\n    <button class=\"btn btn-outline-danger\"\r\n            *ngIf=\"order?.LineItemCount\"\r\n            (click)=\"emptyCart.emit()\">Empty Cart</button>\r\n  </div>\r\n  <div class=\"card bg-light p-3 flex-row justify-content-center\"\r\n       *ngIf=\"!order?.LineItemCount\">\r\n    <p class=\"mb-0\">You do not have any items in your cart</p>\r\n  </div>\r\n  <div class=\"row flex-lg-row-reverse\"\r\n       *ngIf=\"order?.LineItemCount\">\r\n    <div class=\"col-lg-4\">\r\n      <ocm-order-summary [order]=\"order\"></ocm-order-summary>\r\n      <button class=\"btn btn-primary btn-block mb-4 font-weight-bold\"\r\n             (click)=\"navigateToCheckout.emit()\">CHECKOUT</button>\r\n    </div>\r\n    <div class=\"col-lg-8\">\r\n      {{ lineItems }}\r\n      <a (click)=\"log(lineItems)\">click</a>\r\n      <ocm-lineitem-table [lineItems]=\"lineItems\"\r\n                          [readOnly]=\"false\"\r\n                          [quantityLimits]=\"quantityLimits\"\r\n                          (deleteLineItem)=\"deleteLineItem.emit($event)\"\r\n                          (updateQuantity)=\"updateQuantity.emit($event)\"\r\n                          (navigateToProductDetails)=\"navigateToProductDetails.emit($event)\">\r\n      </ocm-lineitem-table>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [""]
                }] }
    ];
    OCMCart.propDecorators = {
        order: [{ type: Input }],
        lineItems: [{ type: Input }],
        quantityLimits: [{ type: Input }],
        emptyCart: [{ type: Output }],
        deleteLineItem: [{ type: Output }],
        updateQuantity: [{ type: Output }],
        navigateToProductDetails: [{ type: Output }],
        navigateToProductList: [{ type: Output }],
        navigateToCheckout: [{ type: Output }]
    };
    return OCMCart;
}());
if (false) {
    /** @type {?} */
    OCMCart.prototype.order;
    /** @type {?} */
    OCMCart.prototype.lineItems;
    /** @type {?} */
    OCMCart.prototype.quantityLimits;
    /** @type {?} */
    OCMCart.prototype.emptyCart;
    /** @type {?} */
    OCMCart.prototype.deleteLineItem;
    /** @type {?} */
    OCMCart.prototype.updateQuantity;
    /** @type {?} */
    OCMCart.prototype.navigateToProductDetails;
    /** @type {?} */
    OCMCart.prototype.navigateToProductList;
    /** @type {?} */
    OCMCart.prototype.navigateToCheckout;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OcmComponentsModule = /** @class */ (function () {
    function OcmComponentsModule(injector) {
        this.injector = injector;
        this.buildWebComponent(OCMQuantityInput, 'ocm-quantity-input');
        this.buildWebComponent(OCMProductCard, 'ocm-product-card');
        this.buildWebComponent(OCMToggleFavorite, 'ocm-toggle-favorite');
        this.buildWebComponent(OCMProductDetails, 'ocm-product-details');
        this.buildWebComponent(OCMProductCarousel, 'ocm-product-carousel');
        this.buildWebComponent(OCMImageGallery, 'ocm-image-gallery');
        this.buildWebComponent(OCMSpecForm, 'ocm-spec-form');
        this.buildWebComponent(OCMOrderSummary, 'ocm-order-summary');
        this.buildWebComponent(OCMLineitemTable, 'ocm-lineitem-table');
        this.buildWebComponent(OCMCart, 'ocm-cart');
    }
    /**
     * @param {?} angularComponent
     * @param {?} htmlTagName
     * @return {?}
     */
    OcmComponentsModule.prototype.buildWebComponent = /**
     * @param {?} angularComponent
     * @param {?} htmlTagName
     * @return {?}
     */
    function (angularComponent, htmlTagName) {
        /** @type {?} */
        var component = createCustomElement(angularComponent, {
            injector: this.injector,
        });
        if (!customElements.get(htmlTagName)) {
            customElements.define(htmlTagName, component);
        }
    };
    OcmComponentsModule.decorators = [
        { type: NgModule, args: [{
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    declarations: [
                        OCMProductCard,
                        OCMToggleFavorite,
                        OCMQuantityInput,
                        OCMProductCarousel,
                        OCMProductDetails,
                        OCMImageGallery,
                        OCMSpecForm,
                        OCMOrderSummary,
                        OCMLineitemTable,
                        OCMCart
                    ],
                    entryComponents: [
                        OCMToggleFavorite,
                        OCMProductCard,
                        OCMQuantityInput,
                        OCMProductCarousel,
                        OCMProductDetails,
                        OCMImageGallery,
                        OCMSpecForm,
                        OCMOrderSummary,
                        OCMLineitemTable,
                        OCMCart
                    ],
                    imports: [
                        CommonModule,
                        NgxImageZoomModule,
                        ReactiveFormsModule,
                        FontAwesomeModule,
                    ],
                },] }
    ];
    /** @nocollapse */
    OcmComponentsModule.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return OcmComponentsModule;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    OcmComponentsModule.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { OcmComponentsModule, OCMProductCard as ɵa, OCMToggleFavorite as ɵb, OCMQuantityInput as ɵc, OCMProductCarousel as ɵd, OCMProductDetails as ɵe, OCMImageGallery as ɵf, OCMSpecForm as ɵg, OCMOrderSummary as ɵh, OCMLineitemTable as ɵi, OCMCart as ɵj };
//# sourceMappingURL=ocm-components.js.map
