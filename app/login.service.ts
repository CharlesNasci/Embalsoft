import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralProperty } from './functions/general-properties';
import { distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient, private prop: GeneralProperty) {}

  getLogin(object: object) {}

  refreshToken() {}

  getCEP(cep: string) {
    return this.httpClient
      .get<any>('http://viacep.com.br/ws/' + cep + '/json/')
      .pipe(distinctUntilChanged());
  }
}
