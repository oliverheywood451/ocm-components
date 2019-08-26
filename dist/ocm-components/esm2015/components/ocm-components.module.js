/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { OCMProductCard } from './exposed/product-card/product-card.component';
import { OCMToggleFavorite } from './exposed/toggle-favorite/toggle-favorite.component';
import { OCMQuantityInput } from './internal/quantity-input/quantity-input.component';
import { OCMProductCarousel } from './exposed/product-carousel/product-carousel.component';
import { OCMProductDetails } from './exposed/product-details/product-details.component';
import { OCMImageGallery } from './internal/image-gallery/image-gallery.component';
import { OCMSpecForm } from './internal/spec-form/spec-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { OCMOrderSummary } from './exposed/order-summary/order-summary.component';
import { OCMLineitemTable } from './exposed/lineitem-table/lineitem-table.component';
import { OCMCart } from './exposed/cart/cart.component';
export class OcmComponentsModule {
    /**
     * @param {?} injector
     */
    constructor(injector) {
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
    buildWebComponent(angularComponent, htmlTagName) {
        /** @type {?} */
        const component = createCustomElement(angularComponent, {
            injector: this.injector,
        });
        if (!customElements.get(htmlTagName)) {
            customElements.define(htmlTagName, component);
        }
    }
}
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
OcmComponentsModule.ctorParameters = () => [
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    OcmComponentsModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NtLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb2NtLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL29jbS1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFtQ3hELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFDOUIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsV0FBbUI7O2NBQy9DLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRTtZQUN0RCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQztRQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3BDLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0osQ0FBQzs7O1lBdERELFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakMsWUFBWSxFQUFFO29CQUNaLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLE9BQU87aUJBQ1I7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLE9BQU87aUJBQ1I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLGlCQUFpQjtpQkFDbEI7YUFDRjs7OztZQWpEa0IsUUFBUTs7Ozs7OztJQW1EYix1Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBPQ01Qcm9kdWN0Q2FyZCB9IGZyb20gJy4vZXhwb3NlZC9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPQ01Ub2dnbGVGYXZvcml0ZSB9IGZyb20gJy4vZXhwb3NlZC90b2dnbGUtZmF2b3JpdGUvdG9nZ2xlLWZhdm9yaXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPQ01RdWFudGl0eUlucHV0IH0gZnJvbSAnLi9pbnRlcm5hbC9xdWFudGl0eS1pbnB1dC9xdWFudGl0eS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT0NNUHJvZHVjdENhcm91c2VsIH0gZnJvbSAnLi9leHBvc2VkL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT0NNUHJvZHVjdERldGFpbHMgfSBmcm9tICcuL2V4cG9zZWQvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT0NNSW1hZ2VHYWxsZXJ5IH0gZnJvbSAnLi9pbnRlcm5hbC9pbWFnZS1nYWxsZXJ5L2ltYWdlLWdhbGxlcnkuY29tcG9uZW50JztcbmltcG9ydCB7IE9DTVNwZWNGb3JtIH0gZnJvbSAnLi9pbnRlcm5hbC9zcGVjLWZvcm0vc3BlYy1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4SW1hZ2Vab29tTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLXpvb20nO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT0NNT3JkZXJTdW1tYXJ5IH0gZnJvbSAnLi9leHBvc2VkL29yZGVyLXN1bW1hcnkvb3JkZXItc3VtbWFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT0NNTGluZWl0ZW1UYWJsZSB9IGZyb20gJy4vZXhwb3NlZC9saW5laXRlbS10YWJsZS9saW5laXRlbS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT0NNQ2FydCB9IGZyb20gJy4vZXhwb3NlZC9jYXJ0L2NhcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBPQ01Qcm9kdWN0Q2FyZCxcbiAgICBPQ01Ub2dnbGVGYXZvcml0ZSxcbiAgICBPQ01RdWFudGl0eUlucHV0LFxuICAgIE9DTVByb2R1Y3RDYXJvdXNlbCxcbiAgICBPQ01Qcm9kdWN0RGV0YWlscyxcbiAgICBPQ01JbWFnZUdhbGxlcnksXG4gICAgT0NNU3BlY0Zvcm0sXG4gICAgT0NNT3JkZXJTdW1tYXJ5LFxuICAgIE9DTUxpbmVpdGVtVGFibGUsXG4gICAgT0NNQ2FydFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBPQ01Ub2dnbGVGYXZvcml0ZSxcbiAgICBPQ01Qcm9kdWN0Q2FyZCxcbiAgICBPQ01RdWFudGl0eUlucHV0LFxuICAgIE9DTVByb2R1Y3RDYXJvdXNlbCxcbiAgICBPQ01Qcm9kdWN0RGV0YWlscyxcbiAgICBPQ01JbWFnZUdhbGxlcnksXG4gICAgT0NNU3BlY0Zvcm0sXG4gICAgT0NNT3JkZXJTdW1tYXJ5LFxuICAgIE9DTUxpbmVpdGVtVGFibGUsXG4gICAgT0NNQ2FydFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5neEltYWdlWm9vbU1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBPY21Db21wb25lbnRzTW9kdWxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLmJ1aWxkV2ViQ29tcG9uZW50KE9DTVF1YW50aXR5SW5wdXQsICdvY20tcXVhbnRpdHktaW5wdXQnKTtcbiAgICB0aGlzLmJ1aWxkV2ViQ29tcG9uZW50KE9DTVByb2R1Y3RDYXJkLCAnb2NtLXByb2R1Y3QtY2FyZCcpO1xuICAgIHRoaXMuYnVpbGRXZWJDb21wb25lbnQoT0NNVG9nZ2xlRmF2b3JpdGUsICdvY20tdG9nZ2xlLWZhdm9yaXRlJyk7XG4gICAgdGhpcy5idWlsZFdlYkNvbXBvbmVudChPQ01Qcm9kdWN0RGV0YWlscywgJ29jbS1wcm9kdWN0LWRldGFpbHMnKTtcbiAgICB0aGlzLmJ1aWxkV2ViQ29tcG9uZW50KE9DTVByb2R1Y3RDYXJvdXNlbCwgJ29jbS1wcm9kdWN0LWNhcm91c2VsJyk7XG4gICAgdGhpcy5idWlsZFdlYkNvbXBvbmVudChPQ01JbWFnZUdhbGxlcnksICdvY20taW1hZ2UtZ2FsbGVyeScpO1xuICAgIHRoaXMuYnVpbGRXZWJDb21wb25lbnQoT0NNU3BlY0Zvcm0sICdvY20tc3BlYy1mb3JtJyk7XG4gICAgdGhpcy5idWlsZFdlYkNvbXBvbmVudChPQ01PcmRlclN1bW1hcnksICdvY20tb3JkZXItc3VtbWFyeScpO1xuICAgIHRoaXMuYnVpbGRXZWJDb21wb25lbnQoT0NNTGluZWl0ZW1UYWJsZSwgJ29jbS1saW5laXRlbS10YWJsZScpO1xuICAgIHRoaXMuYnVpbGRXZWJDb21wb25lbnQoT0NNQ2FydCwgJ29jbS1jYXJ0Jyk7XG4gIH1cblxuICBidWlsZFdlYkNvbXBvbmVudChhbmd1bGFyQ29tcG9uZW50LCBodG1sVGFnTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gY3JlYXRlQ3VzdG9tRWxlbWVudChhbmd1bGFyQ29tcG9uZW50LCB7XG4gICAgICBpbmplY3RvcjogdGhpcy5pbmplY3RvcixcbiAgICB9KTtcbiAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldChodG1sVGFnTmFtZSkpIHtcbiAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShodG1sVGFnTmFtZSwgY29tcG9uZW50KTtcbiAgICB9XG4gfVxufVxuIl19