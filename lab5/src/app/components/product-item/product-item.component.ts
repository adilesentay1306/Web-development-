import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  liked = false;

  onLike() {
    this.product.likes++;
    this.liked = true;
    setTimeout(() => this.liked = false, 300);
  }

  onDelete() {
    if (confirm(`Удалить "${this.product.name}"?`)) {
      this.delete.emit(this.product.id);
    }
  }

  getStars(rating: number): string[] {
    const stars: string[] = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) stars.push('full');
      else if (i - rating < 1) stars.push('half');
      else stars.push('empty');
    }
    return stars;
  }

  shareWhatsApp() {
    const text = encodeURIComponent(`Посмотри этот товар: ${this.product.name} — ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
