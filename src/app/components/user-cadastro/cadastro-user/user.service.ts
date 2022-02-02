import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Idioma } from '../../cadastro/cadastro-categoria/idioma';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = 'http://localhost:8080/idioma'
  private readonly APIUSER = 'http://localhost:8080/usuario'

  constructor(private http: HttpClient) { }

  listIdioma(){
    return this.http.get<Idioma[]>(this.API);
  }

  create(user: any){

    return this.http.post(this.APIUSER, user).pipe(take(1));

  }

}
