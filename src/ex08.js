const isPalindrome = (str) => {
    if (str.split('').reverse().join('') === str) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome('tenet'))

const isPalindrome2 = (str) => {
    if (str.split('').reverse().join('') === str) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome2('Alyra'))
