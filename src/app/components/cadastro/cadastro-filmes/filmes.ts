import { Idioma } from "../cadastro-categoria/idioma";
import { Categoria } from "./categoria";

export class MovieDetail {
    id: number;
    titulo: string;
    imagemmm: string;
    sinopse: string;
    duracao: number;
    datadeLancamento: string;
    categoria: Categoria;
    idioma: Idioma
    constructor(id: number=0,
      titulo: string = "",
      imagemmm: string = "",
      sinopse: string = "",
      duracao: number = 0,
      datadeLancamento: string = "",
      categoria: Categoria ,
      idioma: Idioma) {
      this.id = id;
      this.titulo = titulo;
      this.imagemmm = imagemmm;
      this.sinopse = sinopse;
      this.duracao = duracao;
      this.datadeLancamento = datadeLancamento;
      this.categoria = categoria;
      this.idioma = idioma
    }
  }

 export class MoviePostDto {
    titulo: string;
    imagemm: string;
    sinopse: string;
    duracao: number;
    datadeLancamento: string;
    categoriaId: number;
    idiomaId: number
    constructor(titulo: string = "",
      imagemm: string = "",
      sinopse: string = "",
      duracao: number = 0,
      datadeLancamento: string = "",
      categoriaId: number = 0,
      idiomaId: number = 0) {
      this.titulo = titulo;
      this.imagemm = imagemm;
      this.sinopse = sinopse;
      this.duracao = duracao;
      this.datadeLancamento = datadeLancamento;
      this.categoriaId = categoriaId;
      this.idiomaId = idiomaId;
    }
  }

  export class MoviePutDto {
    id: number;
    titulo: string;
    imagem: string;
    sinopse: string;
    duracao: number;
    datadeLancamento: string;
    categoriaId: number;
    idiomaId: number;
    active:boolean;
    constructor(id: number = 0,
      titulo: string = "",
      imagem: string = "",
      sinopse: string = "",
      duracao: number = 0,
      datadeLancamento: string = "",
      categoriaId: number = 0,
      idiomaId: number = 0,
      active:boolean = true) {
      this.id = id;
      this.titulo = titulo;
      this.imagem = imagem;
      this.sinopse = sinopse;
      this.duracao = duracao;
      this.datadeLancamento = datadeLancamento;
      this.categoriaId = categoriaId;
      this.idiomaId = idiomaId;
      this.active = active;
    }
  }