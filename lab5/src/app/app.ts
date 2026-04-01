import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { CATEGORIES } from './models/categories.data';
import { PRODUCTS } from './models/products.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  categories: Category[] = CATEGORIES;
  allProducts: Product[] = PRODUCTS;

  selectedCategoryId: number | null = null;

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  getCategoryName(): string {
    return this.categories.find(c => c.id === this.selectedCategoryId)?.name ?? '';
  }
}
