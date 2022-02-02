import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../cadastro-filmes/categoria';
import { CategoriaService } from './categoria.service';
import { Idioma } from './idioma';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.scss']
})
export class CadastroCategoriaComponent implements OnInit {

  categorias: Categoria[] = [];
  idioma: Idioma[] = [];
  form: FormGroup  = new FormGroup({});
  font_size = 14
  constructor(private fb: FormBuilder, private service: CategoriaService) { 
   
  }

  ngOnInit(): void {
    this.font_size = Number(sessionStorage.getItem("font-size"))
    this.service.list().subscribe(dados => this.idioma = dados);
    this.service.listcategorias().subscribe(dados => this.categorias = dados);
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)] ],
      tag: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)] ],
      idioma: [null]
    }
    );
  }

  onSubmit(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      console.log("Submit");
      this.service.create(this.form.value).subscribe(
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


