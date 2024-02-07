// detalhes-filme.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css'],
})
export class DetalhesFilmeComponent implements OnInit {
  
  
  @Input() filme: any;

  constructor(
    public filmesService: FilmesService,
    public route: ActivatedRoute
  ) {}

  voltar(): void {
    
  }

  ngOnInit(): void {
    const filmeId = this.route.snapshot.params['id'];

    this.filmesService.getDetalhesFilme(filmeId).subscribe((data: any) => {
      this.filme = data;
    });
  }
}
