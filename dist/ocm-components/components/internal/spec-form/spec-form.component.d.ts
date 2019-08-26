import { OnInit, EventEmitter, OnChanges } from '@angular/core';
import { BuyerSpec } from '@ordercloud/angular-sdk';
import { FormGroup } from '@angular/forms';
import { FullSpecOption } from '../../../models/full-spec-option.interface';
export declare class OCMSpecForm implements OnInit, OnChanges {
    specs: BuyerSpec[];
    formUpdated: EventEmitter<FullSpecOption[]>;
    specForm: FormGroup;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    getDefaultOptionID(spec: BuyerSpec): string;
    onChange(): void;
}
