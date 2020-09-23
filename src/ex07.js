const add = (nombre1, nombre2) => {
    return nombre1 + nombre2
}

const sub = (nombre1, nombre2) => {
    return nombre1 - nombre2
}

const mul = (nombre1, nombre2) => {
    return nombre1 * nombre2
}

const div = (nombre1, nombre2) => {
    return nombre1 / 2
}
// trouvé aveec correction//
const calc = (op, nb1, nb2) => {
    switch (op) {
        case '+':
            return add(nb1, nb2)
        case '-':
            return sub(nb1, nb2)
        case '*':
            return mul(nb1, nb2)
        case '/':
            return div(nb1, nb2)
        default:
            console.log('Error: Unknown operator')
    }
}
console.log(calc('+', 10, 11))
console.log(calc('-', 6, 4))
console.log(calc('*', 4, 5))
console.log(calc('/', 10, 2))
console.log(calc('%', 10, 5))
