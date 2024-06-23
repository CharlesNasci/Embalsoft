import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceComponent } from './interface.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista-livros', pathMatch: 'full' },
  { path: '**', redirectTo: 'lista-livros', pathMatch: 'full' },
  {
    path: 'interface',
    component: InterfaceComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfaceRoutingModule {}
