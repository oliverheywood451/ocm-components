import { Category } from '@ordercloud/angular-sdk';

// CategoryTreeNode structures category data to be consumed by the 3rd party lib TreeComponent
export class CategoryTreeNode {
  constructor(category: Category) {
    this.category = category;
    this.id = category.ID;
    this.name = category.Name;
  }

  parent: CategoryTreeNode;
  category: Category;
  // id, name, and children are required by TreeComponent library.
  id: string;
  name: string;
  children: CategoryTreeNode[] = [];
}
