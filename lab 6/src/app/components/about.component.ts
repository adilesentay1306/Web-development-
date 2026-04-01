import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h1>About This App</h1>

      <div class="info-block">
        <h2>📖 Project</h2>
        <p><strong>Lab 6</strong> — Routing & HTTP</p>
        <p>Course: <strong>Web Development</strong></p>
      </div>

      <div class="info-block">
        <h2>👤 Author</h2>
        <p>Your Name Here</p>
      </div>

      <div class="info-block">
        <h2>🛠️ Technologies Used</h2>
        <ul>
          <li>Angular 17+ (Standalone Components)</li>
          <li>Angular Router — client-side navigation</li>
          <li>HttpClient — REST API requests</li>
          <li>RxJS Observables — async data handling</li>
          <li>JSONPlaceholder API — fake REST backend</li>
        </ul>
      </div>

      <div class="info-block">
        <h2>🔗 API</h2>
        <p>
          All data comes from
          <a href="https://jsonplaceholder.typicode.com" target="_blank">
            jsonplaceholder.typicode.com
          </a>
          — a free fake REST API for testing.
        </p>
      </div>
    </div>
  `,
  styles: [`
    .about-container { max-width: 650px; }

    h1 {
      font-size: 2rem;
      color: #7c6af7;
      margin-bottom: 2rem;
    }

    .info-block {
      background: #1a1a2e;
      border: 1px solid #2a2a4a;
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1rem;
    }

    h2 {
      color: #e8e8f0;
      margin-bottom: 0.8rem;
      font-size: 1.1rem;
    }

    p { color: #a0a0c0; line-height: 1.6; }

    strong { color: #e8e8f0; }

    ul {
      list-style: none;
      padding: 0;
    }

    ul li {
      color: #a0a0c0;
      padding: 0.3rem 0;
    }

    ul li::before { content: "→ "; color: #7c6af7; }

    a { color: #7c6af7; }
  `]
})
export class AboutComponent {}
