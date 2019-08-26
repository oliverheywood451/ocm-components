import { OnInit } from '@angular/core';
export declare class OCMImageGallery implements OnInit {
    imgUrls: string[];
    private readonly gallerySize;
    selectedIndex: number;
    startIndex: number;
    endIndex: number;
    faAngleLeft: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faAngleRight: import("@fortawesome/fontawesome-common-types").IconDefinition;
    isResponsiveView: boolean;
    constructor();
    ngOnInit(): void;
    onResize(): void;
    select(url: string): void;
    isSelected(url: string): boolean;
    getGallery(): string[];
    forward(): void;
    backward(): void;
}
