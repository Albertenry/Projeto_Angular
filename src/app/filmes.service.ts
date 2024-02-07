// filmes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  private apiKey = '5a2e267d830bff34c1ee3c24fea915a9';
  private baseUrl = 'https://api.themoviedb.org/3';
  private imageUrl = 'https://image.tmdb.org/t/p/w200';
  public assistirDeNovo: any[] = [];

  constructor(private http: HttpClient) {}

  getListaFilmesPopulares(): Observable<any> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR&page=1`;
    return this.http.get(url);
  }

  getDetalhesFilme(filmeId: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${filmeId}?api_key=${this.apiKey}&language=pt-BR`;
    return this.http.get(url);
  }

  searchFilmes(query: string): Observable<any> {
    const url = `${this.baseUrl}/search/movie?query=${query}&api_key=${this.apiKey}&language=pt-BR&page=1&include_adult=false`;
    return this.http.get(url);
  }

  getCapaFilme(path: string): string {
    return `${this.imageUrl}${path}`;
  }
}
export interface Filme {
  poster_path: string;
  title: string;
  overview: string;
  percentage: number;
}
