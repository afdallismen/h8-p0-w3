function perkalianUnik(arr) {
    var hasil = []
    for (var i=0; i<arr.length; i++) {
        var sum = 1
        var elses = arr.slice()
        elses.splice(i, 1)
        for (var j=0; j<elses.length; j++) {
            sum = sum * elses[j]
        }
        hasil.push(sum)
    }
    return hasil
}

console.log(perkalianUnik([2, 4, 6]))
console.log(perkalianUnik([1, 2, 3, 4, 5]))
console.log(perkalianUnik([1, 4, 3, 2, 5]))
console.log(perkalianUnik([1, 3, 3, 1]))
console.log(perkalianUnik([2, 1, 8, 10, 2]))
