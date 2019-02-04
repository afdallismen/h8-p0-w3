function pasanganTerbesar(num) {
    var max = 0
    for (var i=0; i<String(num).length-1; i++) {
        var pasanganAngka = String(num)[i] + String(num)[i+1]
        max = Number(pasanganAngka) > max ? Number(pasanganAngka) : max
    }
    return max
}

console.log(pasanganTerbesar(641573))
console.log(pasanganTerbesar(12783456))
console.log(pasanganTerbesar(910233))
console.log(pasanganTerbesar(71856421))
console.log(pasanganTerbesar(79918293))
