// lista-filmes.component.ts
import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css'],
})
export class ListaFilmesComponent implements OnInit {
  public filmeHover: any = null;
  public filmes: any[] = [];
  public detalhesVisiveis = false;
  public filmesEncontrados: any[] = [];
  public filmeSelecionado: any[] = [];
  public assistirDeNovo: any[] = [];
  assistirDeNovoFilmes: any[] = [];
selecionarFilme: any;
filme: any;

  constructor(
    public filmesService: FilmesService,
    ) {}

  ngOnInit(): void {
    this.carregarFilmesPopulares();
    this.assistirDeNovoFilmes = this.filmesService.assistirDeNovo;
  }

  carregarFilmesPopulares(): void {
    this.filmesService.getListaFilmesPopulares().subscribe((data: any) => {
      this.filmes = data.results;
    });
  }

  realizarPesquisa(query: string): void {
    this.filmesService.searchFilmes(query).subscribe((data: any) => {
      this.filmesEncontrados = data.results;
    });
  }

  verDetalhes(filme: any): void {
    this.filmesService.getDetalhesFilme(filme.id).subscribe((detalhes: any) => {
      this.filmeSelecionado = [detalhes];
      this.detalhesVisiveis = true;
    });
  }

  ocultarDetalhes(): void {
    this.filmeHover = null;
  }

  exibirDetalhes(filme: any): void {
    this.filmeHover = filme;
    this.detalhesVisiveis = true;

    this.filmesService.getDetalhesFilme(filme.id).subscribe((detalhes: any) => {
      console.log(detalhes);
    });
  }

  scrollParaDetalhes(): void {
    const detalhesContainer = document.getElementById('detalhesContainer');

    if (detalhesContainer) {
      detalhesContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
