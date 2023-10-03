class Cliente {
    constructor(nome, telefone, renda, email) {
      this.nome = nome
      this.telefone = telefone
      this.renda = renda
      this.email = email
    }

    verificarCredito() {
        return new Promise((resolve, reject) => {
            if (this.renda > 2000) {
                resolve(`Crédito aprovado`)
            } else {
                reject(`Crédito recusado`)
            }
        })
    }
}

const cliente1 = new Cliente("Thiago", "(19) 99999-9999", 3000, "thiagoraia2004@gmail.com")

cliente1
    .verificarCredito()
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((erro) => {
        console.error(erro)
    })
