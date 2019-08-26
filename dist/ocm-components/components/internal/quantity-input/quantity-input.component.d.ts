import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuantityLimits } from '../../../models/quantity-limits';
export declare class OCMQuantityInput implements OnInit, OnChanges {
    limits: QuantityLimits;
    existingQty: number;
    qtyChange: EventEmitter<number>;
    form: FormGroup;
    isDefaultSet: boolean;
    isQtyRestricted: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    setDefault(): void;
    quantityChangeListener(): void;
    getDefaultQty(): number;
}
