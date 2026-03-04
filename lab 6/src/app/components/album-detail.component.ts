import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="detail-container">
      <button class="btn-back" (click)="goBack()">← Back to Albums</button>

      <div *ngIf="loading" class="loading">
        <div class="spinner"></div>
        <p>Loading album...</p>
      </div>

      <div *ngIf="!loading && album" class="detail-card">
        <div class="meta">
          <span class="label">Album ID</span>
          <span class="value">#{{ album.id }}</span>
        </div>
        <div class="meta">
          <span class="label">User ID</span>
          <span class="value">{{ album.userId }}</span>
        </div>

        <div class="edit-section">
          <label class="label">Album Title</label>
          <!-- [(ngModel)] — двусторонняя привязка: поле ↔ переменная editTitle -->
          <input
            type="text"
            [(ngModel)]="editTitle"
            class="title-input"
            placeholder="Enter album title"
          />
          <div class="action-buttons">
            <!-- Save вызывает PUT запрос через сервис -->
            <button class="btn-save" (click)="saveAlbum()" [disabled]="saving">
              {{ saving ? 'Saving...' : '💾 Save' }}
            </button>
            <!-- routerLink для перехода на /albums/:id/photos -->
            <a [routerLink]="['/albums', album.id, 'photos']" class="btn-photos">
              🖼️ View Photos
            </a>
          </div>
        </div>

        <div *ngIf="saveSuccess" class="success-msg">✅ Album title updated!</div>
      </div>
    </div>
  `,
  styles: [`
    .detail-container { max-width: 600px; }

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

    .detail-card {
      background: #1a1a2e;
      border: 1px solid #2a2a4a;
      border-radius: 12px;
      padding: 2rem;
    }

    .meta {
      display: flex;
      justify-content: space-between;
      padding: 0.6rem 0;
      border-bottom: 1px solid #2a2a4a;
      margin-bottom: 0.5rem;
    }

    .label { color: #a0a0c0; font-size: 0.85rem; }
    .value { color: #e8e8f0; font-weight: 600; }

    .edit-section { margin-top: 1.5rem; }

    .title-input {
      width: 100%;
      background: #0f0f1a;
      border: 1px solid #2a2a4a;
      border-radius: 8px;
      color: #e8e8f0;
      padding: 0.7rem 1rem;
      font-size: 1rem;
      margin: 0.5rem 0 1rem;
      outline: none;
      transition: border-color 0.2s;
    }

    .title-input:focus { border-color: #7c6af7; }

    .action-buttons { display: flex; gap: 1rem; }

    button {
      padding: 0.6rem 1.2rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
      transition: opacity 0.2s;
    }

    button:disabled { opacity: 0.5; cursor: not-allowed; }

    .btn-save { background: #7c6af7; color: white; }
    .btn-save:hover:not(:disabled) { opacity: 0.85; }

    .btn-photos {
      background: #1a3a2e;
      color: #50c090;
      padding: 0.6rem 1.2rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      display: inline-flex;
      align-items: center;
    }

    .success-msg {
      margin-top: 1rem;
      color: #50c090;
      font-size: 0.9rem;
    }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';      // Значение в поле ввода
  loading = true;
  saving = false;
  saveSuccess = false;

  constructor(
    private route: ActivatedRoute,   // Читаем :id из URL
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    // Получаем :id из URL (например /albums/5 → id = 5)
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editTitle = data.title;  // Предзаполняем поле
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load album', err);
        this.loading = false;
      }
    });
  }

  saveAlbum(): void {
    if (!this.album) return;
    this.saving = true;
    this.saveSuccess = false;

    // Создаём обновлённый объект и отправляем PUT запрос
    const updated: Album = { ...this.album, title: this.editTitle };

    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        this.album!.title = this.editTitle;  // Обновляем UI локально
        this.saving = false;
        this.saveSuccess = true;
        setTimeout(() => (this.saveSuccess = false), 3000);
      },
      error: (err) => {
        console.error('Failed to update', err);
        this.saving = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
