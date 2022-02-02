import { Idioma } from "../cadastro-categoria/idioma";

export interface Categoria{
    id: number;
    nome: string,
	tag: string,
	idioma: Idioma
}

export class CategoryPostDto {
    id: number;
    nome: string;
    tag: string;
    idiomaId: number;

    constructor(id: number = 0, nome: string = "", tag: string = "", idiomaId: number = 0) {
        this.id = id;
        this.nome = nome;
        this.tag = tag;
        this.idiomaId = idiomaId;
    }
}


export class CategoryPutDto {
    id: number;
    nome: string;
    tag: string;
    idiomaId: number;
    active: boolean;

    constructor(id: number = 0, nome: string = "", tag: string = "", idiomaId: number = 0, active: boolean = true) {
        this.id = id;
        this.nome = nome;
        this.tag = tag;
        this.idiomaId = idiomaId;
        this.active = active;
    }
}