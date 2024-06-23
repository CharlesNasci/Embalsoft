import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InterfaceComponent } from './interface.component';
import { InterfaceRoutingModule } from './interface-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [InterfaceComponent, CadastroComponent, ListaComponent],
  imports: [
    CommonModule,
    InterfaceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class InterfaceModule {}
