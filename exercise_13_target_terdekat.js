function targetTerdekat (arr) {
    var posX = -1
    var posO = -1
    var targetDitemukan = (posX >= 0) && (posO >= 0)
    var i = 0
    while (!targetDitemukan && i<arr.length) {
        switch (arr[i]) {
            case 'x':
                posX = i
                break
            case 'o':
                posO = i
                break
        }
        // console.log([posX, posO])
        targetDitemukan = (posX >= 0) && (posO >= 0)
        i++
    }

    if (!targetDitemukan) {
        return 0
    } else {
        return Math.abs(posX - posO)
    }
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']))
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x']))
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' ']))
console.log(targetTerdekat([' ', ' ', 'o', ' ']))
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x']))
