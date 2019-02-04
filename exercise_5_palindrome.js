function palindrome (kata) {
    return kata === kata.split('').reverse().join('')
}

console.log(palindrome('katak'))
console.log(palindrome('blanket'))
console.log(palindrome('civic'))
console.log(palindrome('kasur rusak'))
console.log(palindrome('mister'))
