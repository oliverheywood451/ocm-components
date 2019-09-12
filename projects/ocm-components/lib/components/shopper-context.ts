import { LineItem, MeUser, Order, ListLineItem, User } from '@ordercloud/angular-sdk';
import { Input } from '@angular/core';

export class OCMComponent {
  // todo: the issue is that ngOnInit fires befoer inputs are ready come up with a better way to do this.
  observersSet: boolean;
  @Input() context: IShopperContext;
}

export interface IShopperContext {
  cartActions: ICartActions;
  routeActions: IRouteActions;
  currentUser: ICurrentUser;
  currentOrder: ICurrentOrder;
  productFilterActions: IProductFilterActions;
}

export interface ICartActions {
  addToCart: (lineItem: LineItem) => Promise<LineItem>;
  removeLineItem: (lineItemID: string) => Promise<void>;
  updateQuantity: (lineItemID: string, newQuantity: number) => Promise<LineItem>;
  addManyToCart: (lineItem: LineItem[]) => Promise<LineItem[]>;
  emptyCart: () => Promise<void>;
}

export interface IRouteActions {
  toProductDetails: (productID: string) => void;
  toProductList: (options?: ProductFilters) => void;
  toCheckout: () => void;
}

export interface ICurrentUser {
  user: MeUser;
  onUserChange: (callback: (user: User) => void) => void;
  onIsAnonymousChange: (callback: (isAnonymous: boolean) => void) => void;
  onFavoriteProductsChange: (callback: (productIDs: string[]) => void) => void;
  setIsFavoriteProduct: (isFav: boolean, productID: string) => void;
  onFavoriteOrdersChange: (callback: (orderIDs: string[]) => void) => void;
  setIsFavoriteOrder: (isFav: boolean, orderID: string) => void;
}

export interface ICurrentOrder {
  order: Order;
  lineItems: ListLineItem;
  onOrderChange: (callback: (order: Order) => void) => void;
  onLineItemsChange: (callback: (lineItems: ListLineItem) => void) => void;
}

export interface IProductFilterActions {
  toPage: (pageNumber: number) => void;
  sortBy: (field: string) => void;
  clearSort: () => void;
  searchBy: (searchTerm: string) => void;
  clearSearch: () => void;
  filterByFacet: (field: string, value: string, isFacet?: boolean) => void;
  clearFacetFilter: (field: string) => void;
  filterByCategory: (categoryID: string) => void;
  clearCategoryFilter: () => void;
  filterByFavorites: (showOnlyFavorites: boolean) => void;
  clearAllFilters: () => void;
  onFiltersChange: (callback: (filters: ProductFilters) => void) => void;
}

export interface ProductFilters {
  page?: number;
  sortBy?: string;
  search?: string;
  categoryID?: string;
  showOnlyFavorites?: boolean;
  activeFacets?: any;
}
