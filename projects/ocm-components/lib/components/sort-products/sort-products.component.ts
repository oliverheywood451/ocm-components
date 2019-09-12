import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OCMComponent } from '../shopper-context';

@Component({
  templateUrl: './sort-products.component.html',
  styleUrls: ['./sort-products.component.scss'],
})
export class OCMProductSort extends OCMComponent implements OnInit, OnChanges {
  form: FormGroup;
  options = [
    { value: 'ID', label: 'ID: A to Z' },
    { value: '!ID', label: 'ID: Z to A' },
    { value: 'Name', label: 'Name: A to Z' },
    { value: '!Name', label: 'Name: Z to A' },
  ];

  ngOnInit() {
    this.form = new FormGroup({ sortBy: new FormControl(null) });
  }

  ngOnChanges() {
    this.context.productFilterActions.onFiltersChange((filters) => {
      this.setForm(filters.sortBy);
    });
  }

  private setForm(sortBy: string) {
    sortBy = sortBy || null;
    this.form.setValue({ sortBy });
  }

  sortStrategyChanged() {
    const sortValue = this.form.get('sortBy').value;
    this.context.productFilterActions.sortBy(sortValue);
  }
}
