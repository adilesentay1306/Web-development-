import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="nav-brand">🎵 Album Browser</div>
      <div class="nav-links">
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/albums" routerLinkActive="active">Albums</a>
      </div>
    </nav>

    <!-- Сюда Angular вставляет нужный компонент в зависимости от URL -->
    <main class="main-content">
      <router-outlet />
    </main>
  `,
  styles: [`
    * { box-sizing: border-box; margin: 0; padding: 0; }

    :host {
      display: block;
      font-family: 'Segoe UI', sans-serif;
      background: #0f0f1a;
      min-height: 100vh;
      color: #e8e8f0;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: #1a1a2e;
      border-bottom: 1px solid #2a2a4a;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav-brand {
      font-size: 1.3rem;
      font-weight: 700;
      color: #7c6af7;
      letter-spacing: 0.5px;
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
    }

    .nav-links a {
      color: #a0a0c0;
      text-decoration: none;
      font-size: 0.95rem;
      padding: 0.4rem 0.9rem;
      border-radius: 6px;
      transition: all 0.2s;
    }

    .nav-links a:hover {
      color: #e8e8f0;
      background: #2a2a4a;
    }

    .nav-links a.active {
      color: #7c6af7;
      background: #2a2a4a;
      font-weight: 600;
    }

    .main-content {
      padding: 2rem;
      max-width: 1100px;
      margin: 0 auto;
    }
  `]
})
export class AppComponent {}
