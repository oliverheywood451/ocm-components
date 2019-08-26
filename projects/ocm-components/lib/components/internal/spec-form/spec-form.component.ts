import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { BuyerSpec } from '@ordercloud/angular-sdk';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {
  get as _get,
  find as _find,
  keys as _keys,
  pickBy as _pickBy,
  identity as _identity,
} from 'lodash';
import { FullSpecOption } from '../../../models/full-spec-option.interface';
import { __generator } from 'tslib';

@Component({
  templateUrl: './spec-form.component.html',
  styleUrls: ['./spec-form.component.scss'],
})
export class OCMSpecForm implements OnInit, OnChanges {
  @Input() specs: BuyerSpec[] = [];
  @Output() formUpdated = new EventEmitter<FullSpecOption[]>();
  specForm: FormGroup;

  constructor() {
    this.specForm = new FormGroup({});
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (!this.specs) return;
    this.specs = this.specs.sort((s1, s2) => s1.Options.length - s2.Options.length);
    this.specs.forEach((spec) => {
      const defaultOption = this.getDefaultOptionID(spec);
      const input = new FormControl(defaultOption, spec.Required ? [Validators.required] : []);
      this.specForm.addControl(spec.ID, input);
    });
    this.onChange();
  }

  getDefaultOptionID(spec: BuyerSpec): string {
    if (spec.DefaultOptionID) return spec.DefaultOptionID;
    if (!spec.Required) return null;
    return _get(spec, 'Options[0].ID', null);
  }

  onChange() {
    const specIDs = _keys(_pickBy(this.specForm.value, _identity));
    const selections: FullSpecOption[] = specIDs.map((specID) => {
      const spec = this.specs.find((s) => s.ID === specID);
      const optionID = this.specForm.value[specID];
      const option: any = spec.Options.find((o) => o.ID === optionID);
      option.SpecID = specID;
      return option;
    });
    this.formUpdated.emit(selections);
  }
}
