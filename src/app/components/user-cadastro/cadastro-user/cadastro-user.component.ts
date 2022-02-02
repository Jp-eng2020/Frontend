import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Idioma } from '../../cadastro/cadastro-categoria/idioma';
import { UserService } from './user.service';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.scss']
})
export class CadastroUserComponent implements OnInit {

  idioma: Idioma[] = [];
  form: FormGroup  = new FormGroup({});
  font_size = 40

  constructor(private fb: FormBuilder, private service: UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null],
      cpf: [null],
      telefone: [null],
      email: [null],
      password: [null],
      role: [null],
      idioma: [null],
    }
    );
    this.service.listIdioma().subscribe(dados => this.idioma = dados);
    this.font_size = Number(sessionStorage.getItem("font-size"))
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







}
