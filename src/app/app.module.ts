import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgImageSliderModule } from 'ng-image-video-gallery';
import { EmbedVideo } from 'ngx-embed-video';import { NgxYoutubePlayerModule } from 'ngx-youtube-player';


import { CardCapaFilmeComponent } from './cards/card-capa-filme/card-capa-filme.component';
import { CardPosterFilmeComponent } from './cards/card-poster-filme/card-poster-filme.component';

import { NavFilmeComponent } from './header/nav-filme/nav-filme.component';
import { NavFooterComponent } from './header/nav-footer/nav-footer.component';

import { CadastroCategoriaComponent } from './components/cadastro/cadastro-categoria/cadastro-categoria.component';
import { CadastroFilmesComponent } from './components/cadastro/cadastro-filmes/cadastro-filmes.component';

import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login/login.component';
import { CadastroUserComponent } from './components/user-cadastro/cadastro-user/cadastro-user.component';


@NgModule({
  declarations: [
    AppComponent,
    CardCapaFilmeComponent,
    CardPosterFilmeComponent,
    NavFilmeComponent,
    NavFooterComponent,
    CadastroCategoriaComponent,
    CadastroFilmesComponent,
    HomeComponent,
    LoginComponent,
    CadastroUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    EmbedVideo,
    NgxYoutubePlayerModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
