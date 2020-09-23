const sortAscend = (li) => {
    return li.sort((a, b) => {
        return a - b
    })
}

console.log(sortAscend([99, 100, 101, 1]))
