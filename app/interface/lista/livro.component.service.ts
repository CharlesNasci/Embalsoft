import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralProperty } from 'src/app/functions/general-properties';
@Injectable({
  providedIn: 'root',
})
export class LivroComponentService {
  constructor(private httpClient: HttpClient, private prop: GeneralProperty) {}

  getAllLivros() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      observe: 'response' as 'response',
    };
    return this.httpClient.get<any>(
      this.prop.apiURL + '/api/Livro',
      httpOptions
    );
  }
  getivroById(id: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      observe: 'response' as 'response',
    };
    return this.httpClient.get<any>(
      this.prop.apiURL + '/api/Livro/' + id,
      httpOptions
    );
  }
  posLivro(element: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
      observe: 'response' as 'response',
    };
    return this.httpClient.post<any>(
      this.prop.apiURL + '/api/Livro/',
      element,
      httpOptions
    );
  }
}
