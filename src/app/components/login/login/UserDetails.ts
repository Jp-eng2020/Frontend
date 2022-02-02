import { Idioma } from "../../cadastro/cadastro-categoria/idioma";

class Usuario {
    email: string
    password: string
    constructor(email: string = "", senha: string = "") {
        this.email = email
        this.password = senha
    }
}


export class UserDetailAuth {
    id: number;
    token: string;
    role: string;
    constructor(id: number = 0, token: string = "", roles: string = "") {
        this.id = id
        this.token = token
        this.role = roles
    }
}

class UserDetail {
    id: number
    name: string
    cpf: string
    telephone: string
    email: string
    password: string
    perfil: string
    language: Idioma
    roles: string
    active: boolean
    constructor(id: number = 0,
        name: string = "",
        cpf: string = "",
        telefone: string = "",
        email: string = "",
        password: string = "",
        perfil: string = "",
        roles: string = "",
        language: Idioma,
        active: boolean = true) {

        this.id = id
        this.name = name
        this.cpf = cpf
        this.telephone = telefone
        this.email = email
        this.password = password
        this.perfil = perfil
        this.language = language
        this.roles = roles
        this.active = active
    }
}
