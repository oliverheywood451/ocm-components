import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { get as _get } from 'lodash';
import { QuantityLimits } from '../../../models/quantity-limits';

@Component({
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss'],
})
export class OCMQuantityInput implements OnInit, OnChanges {
  @Input() limits: QuantityLimits;
  @Input() existingQty: number;
  @Output() qtyChange = new EventEmitter<number>();

  form: FormGroup;
  isDefaultSet = false;
  isQtyRestricted = false;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      quantity: new FormControl(1, [Validators.required]),
    });
  }

  ngOnChanges(): void {
    if (!this.limits) return;
    this.isQtyRestricted = this.limits.restrictedQuantities.length !== 0;
    if (!this.isDefaultSet) this.setDefault(); // capture default once inputs are set
    this.quantityChangeListener();
    if (!this.existingQty) {
      this.qtyChange.emit(this.form.get('quantity').value);
    }
  }

  setDefault() {
    this.isDefaultSet = true;
    this.form.setValue({ quantity: this.getDefaultQty() });
  }

  quantityChangeListener(): void {
    this.form.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      if (this.form.valid && !isNaN(this.form.value.quantity)) {
        this.qtyChange.emit(this.form.value.quantity);
      }
    });
  }

  getDefaultQty(): number {
    if (this.existingQty) return this.existingQty;
    if (this.limits.restrictedQuantities.length) return this.limits.restrictedQuantities[0];
    return this.limits.minPerOrder;
  }

  // TODO - handle these error situations

  // if (inventory < min) {
  //   error.ProductQuantityError.message = `Out of stock.`;
  //   error.ProductQuantityError.outOfStock = true;
  //   return error;
  // }
  // if (qty < min) {
  //   error.ProductQuantityError.message = `At least ${min} must be ordered.`;
  //   return error;
  // }
  // if (qty > inventory) {
  //   error.ProductQuantityError.message = `Only ${inventory} available in inventory.`;
  //   return error;
  // }
  // if (qty > max) {
  //   error.ProductQuantityError.message = `At most ${max} allowed per order.`;
  //   return error;
  // }
}
