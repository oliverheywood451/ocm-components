import { Injector } from '@angular/core';
export declare class OcmComponentsModule {
    private injector;
    constructor(injector: Injector);
    buildWebComponent(angularComponent: any, htmlTagName: string): void;
}
