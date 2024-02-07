// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { DetalhesFilmeComponent } from './detalhes-filme/detalhes-filme.component';

const routes: Routes = [
  { path: 'filmes', component: ListaFilmesComponent },
  { path: 'filmes/:id', component: DetalhesFilmeComponent },
  { path: '', redirectTo: '/filmes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
