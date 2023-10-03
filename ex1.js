function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function dividir(a, b) {
    if (b === 0) {
        return(`Não é possível dividir um número por 0`)
    } else {
        return a / b
    }
}

function multiplicar(a, b) {
    return a * b
}

function calcular(a, b, callbackOperacao) {
    return callbackOperacao(a, b)
}

console.log(calcular(10, 20, somar))
console.log(calcular(10, 20, subtrair))
console.log(calcular(10, 20, dividir))
console.log(calcular(10, 0, dividir))
console.log(calcular(10, 20, multiplicar))