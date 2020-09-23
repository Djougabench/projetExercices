const makeUnique = (li) => {
    return li.map((item) => {
        if (item === item) {
            return item.pop
        }
    })
}

console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))
