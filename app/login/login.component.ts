import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    document.addEventListener('keydown', (event) => {
      if (event.key == 'Enter') this.Login();
    });
    this.loginForm = this.formBuilder.group({
      empresa: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  Login() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.LoadScreen('open');
      var json = this.loginForm.getRawValue();
      this.loginService.getLogin(json).subscribe({
        next: (res) => {
          if (res.status == 200) {
            this.errorMessage = '';
            localStorage.setItem('dvjPetWeb_user', 'tiaozinho');
            localStorage.setItem(
              'dvjPetWeb_nome',
              'Sebastião Tiaozinho da Peste'
            );
            localStorage.setItem(
              'dvjPetWeb_empresa',
              'Minha Empresa Internacional'
            );
            // localStorage.setItem('user', res.body.login);
            // localStorage.setItem('nome', res.body.nome_Fantasia);
            // localStorage.setItem('empresa', res.body.empresa.empresa);
            this.router.navigate(['/interface']);
          }
        },
        error: (error) => {
          this.LoadScreen('close');
          console.clear();
          if (error.error == 'Usuário ou senha inválida') {
            this.errorMessage = error.error;
          } else {
            this.errorMessage = 'Erro ao logar, tente novamente';
          }
        },
      }).unsubscribe;
    } else {
      console.log('Formulário inválido');
    }
  }

  LoadScreen(opcao: string) {
    switch (opcao) {
      case 'open':
        this.form.style.display = 'none';
        this.loading.style.display = 'block';
        this.interface.classList.add('loading');
        break;
      case 'close':
        this.form.style.display = 'block';
        this.loading.style.display = 'none';
        this.interface.classList.remove('loading');
        break;
    }
  }

  get form() {
    return document.getElementById('login-form') as HTMLElement;
  }
  get loading() {
    return document.getElementById('loading-container') as HTMLElement;
  }
  get interface() {
    return document.getElementById('login-interface') as HTMLElement;
  }
  get empresa() {
    return this.loginForm.get('empresa');
  }
  get login() {
    return this.loginForm.get('login');
  }
  get senha() {
    return this.loginForm.get('senha');
  }
}
