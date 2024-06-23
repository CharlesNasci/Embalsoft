import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LivroComponentService } from './livro.component.service';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { FormBuilder } from '@angular/forms';
import { ModalFunctions } from 'src/app/functions/modal-functions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  constructor(
    private router: Router,
    private service: LivroComponentService,
    private modalFunctions: ModalFunctions,
    private formBuilder: FormBuilder
  ) {}

  @ViewChild(CadastroComponent)
  private cadastro = {} as CadastroComponent;
  toChild() {
    this.cadastro.ParentLista();
  }
  groupLista = this.CreateForm();
  novo = {
    id: 1,
    titulo: 'Os corvos',
    autor: 'Edgar Allan Poe',
    genero: 'Terror',
    ano: 2022,
  };
  modal: ModalFunctions = this.modalFunctions;
  itens: Array<any> = [this.novo];

  ngOnInit(): void {}
  OpenNew() {
    this.router.navigate(['/novo-livro']);
  }
  CreateForm() {
    return this.formBuilder.group({
      id: [0],
      titulo: [''],
      autor: [''],
      genero: [''],
      ano: [''],
    });
  }
  GetLivros() {
    this.service.getAllLivros().subscribe((res) => {
      res.body.forEach((array: any) => {
        this.itens.push(array);
      });
    }).unsubscribe;
  }
  Edit(i: any) {
    console.log(this.itens[i]);

    this.formCadastro.style.display = 'block';
    this.form.style.display = 'none';

    this.groupLista.patchValue({
      titulo: this.itens[i].titulo,
      autor: this.itens[i].autor,
      genero: this.itens[i].genero,
      ano: this.itens[i].ano,
    });

    this.toChild();
  }
  FilterLista() {
    this.form.style.display = 'block';
  }
  WindowA_Toggle(opcao: string) {
    if (opcao == 'close') {
      this.modal.ModalClose('lista');
    } else {
      this.modal.ModalOpen('lista');
    }
  }
  get formCadastro() {
    return <HTMLElement>document.getElementById('form-sa-cadastro');
  }
  get form() {
    return <HTMLElement>document.getElementById('lista');
  }
}
