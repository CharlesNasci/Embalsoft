import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LivroComponentService } from '../lista/livro.component.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  elementForm!: FormGroup;
  @Input() formLista: any = null;
  @Output() callParent = new EventEmitter<any>();

  onClick() {
    this.callParent.emit();
  }
  constructor(
    private formBuilder: FormBuilder,
    private service: LivroComponentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.elementForm = this.CreateForm();
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

  Insert() {
    var form = this.elementForm.getRawValue();
    this.service.posLivro(form.getRawValue()).subscribe((res) => {});
  }

  ParentLista() {
    console.log(this.listaTitulo);
    this.elementForm.patchValue({
      titulo: this.listaTitulo,
      autor: this.listaAutor,
      genero: this.listaGenero,
      ano: this.listaAno,
    });
  }
  Retorna() {
    this.router.navigate(['/lista-livros']);
  }
  get listaTitulo() {
    return this.formLista.get('titulo')?.value;
  }
  get listaAutor() {
    return this.formLista.get('autor')?.value;
  }
  get listaGenero() {
    return this.formLista.get('genero')?.value;
  }
  get listaAno() {
    return this.formLista.get('ano')?.value;
  }
}
