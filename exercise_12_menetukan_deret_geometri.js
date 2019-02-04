function tentukanDeretGeometri (arr) {
    var langkahPertama = arr[1] / arr[0]
    var langkahSama = true
    var i = 0
    while (langkahSama && i<arr.length-1) {
        langkahSama = (arr[i+1] / arr[i]) === langkahPertama
        i++
    }
    return langkahSama
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]))
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32]))
console.log(tentukanDeretGeometri([2, 4, 6, 8]))
console.log(tentukanDeretGeometri([2, 6, 18, 54]))
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9]))
