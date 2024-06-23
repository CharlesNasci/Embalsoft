import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './interface/cadastro/cadastro.component';
import { ListaComponent } from './interface/lista/lista.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'lista-livros', component: ListaComponent },
  { path: 'novo-livro', component: CadastroComponent },
  {
    path: 'lista-livros',
    component: ListaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
