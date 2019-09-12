import { Component, Input } from '@angular/core';
import { ListFacet } from '@ordercloud/angular-sdk';
import { OCMComponent } from '../shopper-context';

@Component({
  templateUrl: './product-facet-list.component.html',
  styleUrls: ['./product-facet-list.component.scss'],
})
export class OCMProductFacetList extends OCMComponent {
  @Input() facetList: ListFacet[];
}
