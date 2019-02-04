function dataHandling2 (data) {
    data.splice(1, 4, data[1]+'Elsharawy', 'Provinsi '+data[2], data[3], 'Pria', 'SMA Internasional Metro')
    console.log(data)
    
    var tanggal = data[3].split('/')
    var bulan = tanggal[1]
    switch (bulan) {
        case '01':
            console.log('Januari')
            break
        case '02':
            console.log('Februari')
            break
        case '03':
            console.log('Maret')
            break
        case '04':
            console.log('April')
            break
        case '05':
            console.log('Mei')
            break
        case '06':
            console.log('Juni')
            break
        case '07':
            console.log('Juli')
            break
        case '08':
            console.log('Agustus')
            break
        case '09':
            console.log('September')
            break
        case '10':
            console.log('Oktober')
            break
        case '11':
            console.log('November')
            break
        case '12':
            console.log('Desember')
            break
    }
    console.log(tanggal.reverse())
    console.log(tanggal.reverse().join('-'))
    console.log(data[1].slice(0, 15))
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]
dataHandling2(input)
