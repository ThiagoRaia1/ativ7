class Estudante {
    constructor(nome, email, RA, curso, disciplinas) {
        this.nome = nome
        this.email = email
        this.RA = RA
        this.curso = curso
        this.disciplinas = disciplinas
    }

    primeiraDisciplina() {
        return this.disciplinas[0]
    }

    ultimaDisciplina() {
        return this.disciplinas[this.disciplinas.length - 1]
    }
}

const pessoa1 = new Estudante("pessoa1", "pessoa1@gmail.com", "1050482313025", "ADS", [
    "Inglês",
    "Linguagem de programação",
    "Cálculo"
])

const pessoa2 = new Estudante("pessoa2", "pessoa2@gmail.com", "1111111111111", "ADS", [
    "Inglês",
    "Engenharia de software",
    "Sistemas de informação"
])

console.log(pessoa1.primeiraDisciplina())
console.log(pessoa1.ultimaDisciplina())

console.log(`\n`+pessoa2.primeiraDisciplina())
console.log(pessoa2.ultimaDisciplina())