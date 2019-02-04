function groupAnimals(animals) {
    var results = [[]]
    var sorted = animals.sort()
    var firstLetter = sorted[0][0]
    for (var i=0; i<sorted.length; i++) {
        if (sorted[i][0] === firstLetter) {
            results[results.length-1].push(sorted[i])
        } else {
            firstLetter = sorted[i][0]
            results.push([sorted[i]])
        }
    }
    return results
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]))
