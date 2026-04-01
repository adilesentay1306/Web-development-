import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <button class="btn-back" (click)="goBack()">← Back to Album</button>

      <h1>Photos for Album #{{ albumId }}</h1>

      <div *ngIf="loading" class="loading">
        <div class="spinner"></div>
        <p>Loading photos...</p>
      </div>

      <!-- Сетка фотографий -->
      <div *ngIf="!loading" class="photo-grid">
        <div *ngFor="let photo of photos" class="photo-card">
          <!-- thumbnailUrl — ссылка на маленькую картинку -->
          <img [src]="photo.thumbnailUrl" [alt]="photo.title" />
          <p class="photo-title">{{ photo.title }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .btn-back {
      background: none;
      border: 1px solid #2a2a4a;
      color: #a0a0c0;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      cursor: pointer;
      margin-bottom: 1.5rem;
      transition: all 0.2s;
    }
    .btn-back:hover { border-color: #7c6af7; color: #7c6af7; }

    h1 { font-size: 1.8rem; color: #7c6af7; margin-bottom: 1.5rem; }

    .loading {
      display: flex; flex-direction: column;
      align-items: center; gap: 1rem;
      padding: 3rem; color: #a0a0c0;
    }

    .spinner {
      width: 40px; height: 40px;
      border: 3px solid #2a2a4a;
      border-top-color: #7c6af7;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    /* Адаптивная сетка фото — автоматически подбирает количество колонок */
    .photo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1rem;
    }

    .photo-card {
      background: #1a1a2e;
      border: 1px solid #2a2a4a;
      border-radius: 10px;
      overflow: hidden;
      transition: transform 0.2s, border-color 0.2s;
    }

    .photo-card:hover {
      transform: translateY(-4px);
      border-color: #7c6af7;
    }

    .photo-card img {
      width: 100%;
      display: block;
      aspect-ratio: 1;
      object-fit: cover;
    }

    .photo-title {
      padding: 0.5rem;
      font-size: 0.75rem;
      color: #a0a0c0;
      line-height: 1.3;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId!: number;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    // Читаем :id из URL
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    // GET /albums/:id/photos
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load photos', err);
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
