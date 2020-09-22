const count = (min, max, step) => {
    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}
console.log(count(0, 200, 8))
