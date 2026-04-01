import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Albums</h1>

    <!-- Индикатор загрузки пока данные с API не пришли -->
    <div *ngIf="loading" class="loading">
      <div class="spinner"></div>
      <p>Loading albums...</p>
    </div>

    <!-- Список альбомов -->
    <div *ngIf="!loading" class="albums-list">
      <div
        *ngFor="let album of albums"
        class="album-item"
      >
        <!-- Клик по заголовку → переход на /albums/:id -->
        <div class="album-info" (click)="goToDetail(album.id)">
          <span class="album-id">#{{ album.id }}</span>
          <span class="album-title">{{ album.title }}</span>
        </div>

        <div class="album-actions">
          <button class="btn-view" (click)="goToDetail(album.id)">View</button>
          <!-- Кнопка Delete: вызывает сервис, потом убирает из локального массива -->
          <button class="btn-delete" (click)="deleteAlbum(album.id)">Delete</button>
        </div>
      </div>

      <p *ngIf="albums.length === 0" class="empty">No albums left.</p>
    </div>
  `,
  styles: [`
    h1 { font-size: 2rem; color: #7c6af7; margin-bottom: 1.5rem; }

    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 3rem;
      color: #a0a0c0;
    }

    .spinner {
      width: 40px; height: 40px;
      border: 3px solid #2a2a4a;
      border-top-color: #7c6af7;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    .albums-list { display: flex; flex-direction: column; gap: 0.6rem; }

    .album-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #1a1a2e;
      border: 1px solid #2a2a4a;
      border-radius: 8px;
      padding: 0.8rem 1rem;
      transition: border-color 0.2s;
    }

    .album-item:hover { border-color: #7c6af7; }

    .album-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      flex: 1;
    }

    .album-id {
      color: #7c6af7;
      font-weight: 700;
      min-width: 40px;
      font-size: 0.85rem;
    }

    .album-title {
      color: #e8e8f0;
      font-size: 0.95rem;
      text-transform: capitalize;
    }

    .album-actions { display: flex; gap: 0.5rem; }

    button {
      padding: 0.4rem 0.9rem;
      border: none;
      border-radius: 6px;
      font-size: 0.85rem;
      cursor: pointer;
      font-weight: 500;
      transition: opacity 0.2s;
    }

    button:hover { opacity: 0.8; }

    .btn-view { background: #2a2a4a; color: #a0a0c0; }
    .btn-delete { background: #4a1a2e; color: #f07090; }

    .empty { color: #a0a0c0; text-align: center; padding: 2rem; }
  `]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];   // Массив альбомов, который рендерится в шаблоне
  loading = true;          // Флаг загрузки

  constructor(
    private albumService: AlbumService,  // Сервис для HTTP запросов
    private router: Router               // Для программной навигации
  ) {}

  ngOnInit(): void {
    // При инициализации компонента делаем GET /albums
    // subscribe() — "подписываемся" на Observable, получаем данные когда придут
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load albums', err);
        this.loading = false;
      }
    });
  }

  goToDetail(id: number): void {
    // Программная навигация на /albums/:id
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number): void {
    // 1. Вызываем DELETE через сервис
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        // 2. Локально убираем альбом из массива (UI обновится автоматически)
        this.albums = this.albums.filter(a => a.id !== id);
      },
      error: (err) => console.error('Failed to delete', err)
    });
  }
}
