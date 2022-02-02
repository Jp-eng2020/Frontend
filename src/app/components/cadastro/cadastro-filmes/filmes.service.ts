import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Card } from 'src/app/cards/card-capa-filme/card';
import { LoginService } from '../../login/login/login.service';
import { Idioma } from '../cadastro-categoria/idioma';
import { Categoria } from './categoria';
import { MovieDetail, MoviePostDto, MoviePutDto } from './filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private filmes: MovieDetail[] = []


  private readonly API = 'http://localhost:8080/idioma'
  private readonly Categorias = 'http://localhost:8080/categoria'
  private readonly Filmes = 'http://localhost:8080/filmes'

  constructor(private http: HttpClient, private loginService: LoginService) { }

  listIdioma(){
    return this.http.get<Idioma[]>(this.API);
  }

  listcategorias(){
    return this.http.get<Categoria[]>(this.Categorias);
  }

  listFilme(){
    return this.http.get<MovieDetail[]>(this.Filmes);
  }

  
  create(objPost: MoviePostDto): Observable<MovieDetail> {

    return this.http.post<MovieDetail>(this.API, objPost, this.loginService.headerOptions()).pipe(take(1))

  }

  update(moviePut: MoviePutDto): Observable<MovieDetail> {

    return this.http.put<MovieDetail>(this.API, moviePut, this.loginService.headerOptions()).pipe(take(1))

  }

  delete(id: number): Observable<MovieDetail> {
    return this.http.delete<MovieDetail>(`${this.Filmes}/${id}`, this.loginService.headerOptions()).pipe(take(1))
  }

}
