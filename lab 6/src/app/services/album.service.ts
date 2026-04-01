import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  // Базовый URL API — все запросы идут сюда
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  // HttpClient внедряется через конструктор (Dependency Injection)
  constructor(private http: HttpClient) {}

  // GET /albums — получить все альбомы (возвращает Observable со списком)
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  // GET /albums/:id — получить один альбом по ID
  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  // GET /albums/:id/photos — получить фото альбома
  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  // PUT /albums/:id — обновить название альбома (симулируется сервером)
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  // DELETE /albums/:id — удалить альбом (симулируется сервером)
  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }
}
