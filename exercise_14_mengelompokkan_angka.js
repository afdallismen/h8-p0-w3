function mengelompokkanAngka(arr) {
    var hasil = [[], [], []]
    if (arr.length > 0) {
        for (var i=0; i<arr.length; i++) {
            if (arr[i] % 3 === 0) {
                hasil[2].push(arr[i])
            } else if (arr[i] % 2 === 0) {
                hasil[0].push(arr[i])
            } else {
                hasil[1].push(arr[i])
            }
        }
    }
    return hasil
}

console.log(mengelompokkanAngka([2, 4, 6]))
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(mengelompokkanAngka([100, 151, 122, 99, 111]))
console.log(mengelompokkanAngka([]))
