function angkaPalindrome (num) {
    var found = false
    while (!found) {
        num++
        var angka = String(num)
        if (angka.split('').reverse().join('') === angka) {
            found = true
        }
    }
    return num
}

console.log(angkaPalindrome(8))
console.log(angkaPalindrome(10))
console.log(angkaPalindrome(117))
console.log(angkaPalindrome(175))
console.log(angkaPalindrome(1000))
