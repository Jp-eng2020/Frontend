import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from 'src/app/cards/card-capa-filme/card';
import { Idioma } from '../cadastro-categoria/idioma';
import { Categoria } from './categoria';
import { MovieDetail } from './filmes';
import { FilmesService } from './filmes.service';

@Component({
  selector: 'app-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  filmes: MovieDetail[] = [];
  idioma: Idioma[] = [];
  categorias: Categoria[] = [];
  formFilmes: FormGroup  = new FormGroup({});
  idUpdate = -1
  idDelete = -1
  font_size = 40

  constructor(private fb: FormBuilder, private service: FilmesService) { }

  ngOnInit(): void {
    this.font_size = Number(sessionStorage.getItem("font-size"))
    this.service.listIdioma().subscribe(dados => this.idioma = dados);
    this.service.listcategorias().subscribe(dados => this.categorias = dados);
    this.service.listFilme().subscribe(dados => this.filmes = dados);

    this.formFilmes = this.fb.group({
      titulo: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)] ],
      sinopse: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)] ],
      categoriaId: [null],
      imagem: [null],
      datadeLancamento: [null],
      duracao: [null],
      idioma: [null]
    });
  }

  onSubmit(): void {
    console.log(this.formFilmes.value);
    if (this.formFilmes.valid) {
      console.log("Submit");
      this.service.create(this.formFilmes.value).subscribe(
        success => console.log(success),
        error => console.log(error)
      );
    }
  }
 delete(id:number){
   this.service.delete(id).subscribe(  success => alert(success),
   error => alert(error))
 }
 

}
