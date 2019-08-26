import { EventEmitter } from '@angular/core';
export declare class OCMToggleFavorite {
    faHeartFilled: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faHeartOutline: import("@fortawesome/fontawesome-common-types").IconDefinition;
    favorite: boolean;
    favoriteChanged: EventEmitter<boolean>;
}
