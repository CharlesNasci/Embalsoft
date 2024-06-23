import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralProperty } from '../functions/general-properties';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient, private prop: GeneralProperty) {}

  getLogin(object: object) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      observe: 'response' as 'response',
    };
    return this.httpClient.post<any>(
      this.prop.apiURL + '/api/Account/login',
      object,
      httpOptions
    );
  }

  refreshToken() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      observe: 'response' as 'response',
    };
    return this.httpClient.post<any>(
      this.prop.apiURL + '/api/Account/Refresh',
      null,
      httpOptions
    );
  }
}
