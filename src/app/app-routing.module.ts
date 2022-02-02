import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//as
import { HomeComponent } from './components/home/home.component';
import { CadastroCategoriaComponent } from './components/cadastro/cadastro-categoria/cadastro-categoria.component';
import { CadastroFilmesComponent } from './components/cadastro/cadastro-filmes/cadastro-filmes.component';
import { LoginComponent } from './components/login/login/login.component';
import { CadastroUserComponent } from './components/user-cadastro/cadastro-user/cadastro-user.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'cadastrarFilmes', component:CadastroFilmesComponent},
  {path: 'cadastrarCategoria', component:CadastroCategoriaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cadastro', component:CadastroUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
