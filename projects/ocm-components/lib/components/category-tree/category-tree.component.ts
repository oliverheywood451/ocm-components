import { Component, Input, OnChanges } from '@angular/core';
import { ListCategory, Category } from '@ordercloud/angular-sdk';
import { ITreeOptions } from 'angular-tree-component';
import { transform as _transform } from 'lodash';
import { OCMComponent } from '../shopper-context';
import { CategoryTreeNode } from '../../models/category-tree-node.class';

@Component({
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.scss'],
})
export class OCMCategoryTree extends OCMComponent implements OnChanges {
  @Input() categories: ListCategory;
  categoryTree: CategoryTreeNode[];
  treeOptions: ITreeOptions = this.buildTreeOptions();
  activeCategoryID: string;

  ngOnChanges() {
    if (!this.categoryTree) this.categoryTree = this.buildCategoryTree(this.categories.Items);
    this.context.productFilterActions.onFiltersChange((filters) => {
      this.activeCategoryID = filters.categoryID;
    });
  }

  buildTreeOptions(): ITreeOptions {
    return {
      nodeClass: (node: CategoryTreeNode) => {
        return this.activeCategoryID === node.id ? 'font-weight-bold' : null;
      },
      actionMapping: {
        mouse: {
          click: (tree, node, $event) => {
            this.context.productFilterActions.filterByCategory(node.id);
          },
        },
      },
      animateExpand: true,
    };
  }

  buildCategoryTree(categories: Category[]): CategoryTreeNode[] {
    // key is ID, value is Node
    const nodeDictionary = this.buildNodeDictionary(categories);
    categories.forEach((category) => this.setParentsAndChildren(nodeDictionary, category.ID));
    // Return all top-level nodes in order
    return categories.map((category) => nodeDictionary[category.ID]).filter((x) => !x.parent);
  }

  private setParentsAndChildren(nodeDictionary: any, categoryID: string) {
    if (!nodeDictionary[categoryID].category.ParentID || !nodeDictionary[nodeDictionary[categoryID].category.ParentID]) {
      // category is not a child node
      return;
    }

    nodeDictionary[nodeDictionary[categoryID].category.ParentID].children.push(nodeDictionary[categoryID]);
    nodeDictionary[categoryID].parent = nodeDictionary[nodeDictionary[categoryID].category.ParentID];
  }

  // returns an object with a key for each categoryID
  private buildNodeDictionary(categories: Category[]): any {
    return _transform(categories, (toReturn, category) => (toReturn[category.ID] = new CategoryTreeNode(category)));
  }
}
