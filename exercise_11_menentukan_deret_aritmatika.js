function tentukanDeretAritmatika (arr) {
    var langkahPertama = arr[1] - arr[0]
    var langkahSama = true
    var i = 0
    while (langkahSama && i < arr.length-1) {
        langkahSama = (arr[i+1] - arr[i]) === langkahPertama
        i++
    }
    return langkahSama
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6]))
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24]))
console.log(tentukanDeretAritmatika([2, 4, 6, 8]))
console.log(tentukanDeretAritmatika([2, 6, 18, 54]))
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9]))
