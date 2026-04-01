import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { AlbumsComponent } from './components/albums.component';
import { AlbumDetailComponent } from './components/album-detail.component';
import { AlbumPhotosComponent } from './components/album-photos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },
];
