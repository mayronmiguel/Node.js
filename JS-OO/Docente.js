import User from "./User.js";

class Docente extends User{
    constructor(nome, email, nascimento, role = "docente", ativo = "true"){
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso){
        return `estudante ${estudante} passou no curso de  ${curso}, responsável ${this.nome}.`
    }
}

const novoDocente = new Docente("Ana", "a@a.com", "2024-01-01")
console.log(novoDocente.aprovarEstudante('Juliana', 'JavaScript'));