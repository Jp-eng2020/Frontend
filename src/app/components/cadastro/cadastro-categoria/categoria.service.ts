import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { LoginService } from '../../login/login/login.service';
import { Categoria, CategoryPostDto, CategoryPutDto } from '../cadastro-filmes/categoria';
import { Idioma } from './idioma';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly API = 'http://localhost:8080/idioma'
  private readonly Categorias = 'http://localhost:8080/categoria'

  constructor(private http: HttpClient, private loginService: LoginService) {  }
  


  list(){
    return this.http.get<Idioma[]>(this.API);
  }
  listcategorias(){
    return this.http.get<Categoria[]>(this.Categorias);
  }

  create(objPost: CategoryPostDto): Observable<Categoria> {

    return this.http.post<Categoria>(this.Categorias, objPost, this.loginService.headerOptions()).pipe(take(1))
  }

  update(categoryPut: CategoryPutDto): Observable<Categoria> {
    return this.http.put<Categoria>(this.Categorias, categoryPut, this.loginService.headerOptions()).pipe(take(1))
  }

  delete(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(`${this.Categorias}/${id}`, this.loginService.headerOptions()).pipe(take(1))
  }

}
