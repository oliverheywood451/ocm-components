import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faHeart as _faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { faHeart as _faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { OCMComponent } from '../shopper-context';

@Component({
  templateUrl: './toggle-favorite.component.html',
  styleUrls: ['./toggle-favorite.component.scss'],
})
export class OCMToggleFavorite extends OCMComponent {
  faHeartFilled = _faHeartFilled;
  faHeartOutline = _faHeartOutline;
  @Input() favorite: boolean;
  @Output() favoriteChanged = new EventEmitter<boolean>();
}
