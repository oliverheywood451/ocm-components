import { BuyerProduct } from '@ordercloud/angular-sdk';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { OCMComponent } from '../shopper-context';
import { Component, Input } from '@angular/core';
import { QuantityLimits } from '../../models/quantity-limits';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class OCMHomePage extends OCMComponent {
  @Input() featuredProducts: BuyerProduct[];
  @Input() quantityLimits: QuantityLimits[];
  faBullhorn = faBullhorn;

  // TODO - this content may need to be managed externally somehow.
  annoucement = 'This is an announcements areas whose content gets displayed on Homepage of Buyer Site.';
  carouselSlides = [
    {
      URL: '../../../assets/carousel2.jpg',
      headerText: 'Carousel Image Two',
      bodyText: 'Welcome to the home page',
    },
    {
      URL: '../../../assets/carousel3.jpg',
      headerText: 'Carousel Image Three',
      bodyText: 'This is the third image',
    },
  ];
}
