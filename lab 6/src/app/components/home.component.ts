import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="hero">
      <h1>🎵 Welcome to Album Browser</h1>
      <p class="subtitle">
        Explore hundreds of albums and their photos — powered by JSONPlaceholder API.
      </p>
      <a routerLink="/albums" class="btn-primary">Browse Albums →</a>
    </div>

    <div class="info-cards">
      <div class="card">
        <span class="icon">📋</span>
        <h3>100 Albums</h3>
        <p>Browse the full collection of albums fetched live from the API</p>
      </div>
      <div class="card">
        <span class="icon">🖼️</span>
        <h3>Photo Grids</h3>
        <p>View all photos for each album in a beautiful grid layout</p>
      </div>
      <div class="card">
        <span class="icon">✏️</span>
        <h3>Edit & Delete</h3>
        <p>Update album titles and remove albums from the list</p>
      </div>
    </div>
  `,
  styles: [`
    .hero {
      text-align: center;
      padding: 4rem 2rem;
    }

    h1 {
      font-size: 2.8rem;
      font-weight: 800;
      color: #7c6af7;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.1rem;
      color: #a0a0c0;
      margin-bottom: 2rem;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    .btn-primary {
      display: inline-block;
      background: #7c6af7;
      color: white;
      padding: 0.8rem 2rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: background 0.2s;
    }

    .btn-primary:hover { background: #6855e0; }

    .info-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .card {
      background: #1a1a2e;
      border: 1px solid #2a2a4a;
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
    }

    .icon { font-size: 2rem; display: block; margin-bottom: 0.8rem; }

    h3 { color: #e8e8f0; margin-bottom: 0.5rem; }

    p { color: #a0a0c0; font-size: 0.9rem; line-height: 1.5; }
  `]
})
export class HomeComponent {}
