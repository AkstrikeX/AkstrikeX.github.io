var array1 = [12, 34, 56, 12, 67]
var array2 = ['js', 'java', 'c#', 'python']

// Todas as funções devem ser implementadas sem efeitos colaterais, isto é,
// elas não devem modificar o array de entrada (não são in-place).

function first(array, quant) {
    arraynovo = []
    if (quant) {
        if (array.length <= quant) {
            arraynovo = Array.from(array)

        } else {
            for (var i = 0; i < quant; i++) {
                arraynovo.push(array[i])
            }
        }
    } else {
        arraynovo.push(array[0])
    }
    return arraynovo
}

function last(array, quant) {
    arraynovo = []
    if (quant) {
        if (array.length <= quant) {
            arraynovo = Array.from(array)

        } else {
            let i = array.length - 1
            for (let j = 0; j < quant; j++) {
                arraynovo.push(array[i])
                i--
            }

            arrayextra = []
            for (let i = arraynovo.length - 1; i >= 0; i--) {
                arrayextra.push(arraynovo[i])

            }
            arraynovo = Array.from(arrayextra)
        }
    } else {
        arraynovo.push(array[array.length - 1])
    }
    return arraynovo
}
function tail(array) {
    arraynovo = []
    for (var i = 1; i < array.length; i++) {
        arraynovo.push(array[i])
    }
    return arraynovo
}
function without(array, valor) {
    arraynovo = []
    for (var i = 0; i < array.length; i++) {
        if (valor == array[i]) { } else {
            arraynovo.push(array[i])
        }
    }
    return arraynovo
}
function union(...args) {
    var arraynovo = []
    for (var i = 0; i < args.length; i++) {
        for (var j = 0; j < args[i].length; j++) {
            for (var k = 0; k < arraynovo.length; k++) {
                if (arraynovo[k] == args[i][j]) {
                    var repete = true;
                    break
                }
            }
            if (repete) {
                repete = false
                continue
            }
            arraynovo.push(args[i][j])
        }
    }
    return arraynovo
}
function unique(array) { 
    arraynovo = []
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < arraynovo.length; j++) {
            if (arraynovo[j] == array[i]) {
                var repete = true;
                break
            }
        }
        if(repete){
            repete = false
            continue
        }
        arraynovo.push(array[i])
    }
    return arraynovo
}
function intersection(array1, array2) { 
    var arraynovo = []
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                for (element of arraynovo){   
                    if(element == array2[j]){
                        
                    }
                }
                arraynovo.push(array2[j])
                break
            }
        }    
    }
    return arraynovo
}
function difference() { }
function zip() { }
function compact() { }
function flatten() { }
function equals() { }

console.log(first(array1)) // 12
console.log(first(array1, 3)) // [12, 34, 56]
console.log(first([], 3)) // []

console.log(last(array1)) // 67
console.log(last(array1, 3)) // [56, 12, 67]

console.log(tail(array1)) // [34, 56, 12, 67]
console.log(tail([])) // []

console.log(without(array1, 34)) // [12, 56, 12, 67]
console.log(without(array1, 12)) // [34, 56, 67]

console.log(union(array1, array2)) // [12, 34, 56, 67, 'js', 'java', 'c#', 'python']
console.log(union(array1, array2, [89, 34, 'ruby', 'js'])) // [12, 34, 56, 67, 'js', 'java', 'c#', 'python', 89, 'ruby']

console.log(unique(array1)) // [12, 34, 56, 67]
console.log(unique(['a', 'a', 'a'])) // ['a']
console.log(unique(['a', 'b', 'a', 'b'])) // ['a', 'b']

console.log(intersection(['a', 4, 'c', 8], [8, 'b', 'c', 34])) // ['c', 8]
console.log(intersection([8, 'a', 4, 'c', 8], [8, 'b', 'c', 34])) // [8, 'c']

console.log(difference(['a', 4, 'c', 8], [8, 'b', 'c', 34])) // ['a', 4, 'b', 34]
console.log(difference([], array1)) // []
console.log(difference(array1, [])) // [12, 34, 56, 12, 67]
console.log(difference(array1, array2)) // [12, 34, 56, 12, 67]
console.log(difference(array1, [56, 67])) // [12, 34, 12]

console.log(zip([12, 45], [67, 90])) // [[12, 67], [45, 90]]
console.log(zip(array2, [67, 90, 52, 56])) // [['js', 67], ['java', 90], ['c#', 52], ['python', 56]]
console.log(zip(array1, [67, 90, 52, 56], ['brendan eich', 'james gosling', 'anders hejlsberg', 'guido van rossum']))
// [['js', 67, 'brendan eich'], ['java', 90, 'james gosling'], ['c#', 52, 'anders hejlsberg'], ['python', 56, 'guido van rossum']]
console.log(zip([12, 45, 89], [67, 90])) // [[12, 67], [45, 90], [89, undefined]]
console.log(zip([12, 45])) // [[12], [45]]

console.log(compact([45, 23])) // [45, 23]
console.log(compact([45, 23, null])) // [45, 23]
console.log(compact([NaN, 23, null, 12])) // [23, 12]
console.log(compact([NaN, 23, null, 12, undefined, 78])) // [23, 12, 78]
console.log(compact([NaN, 23, null, 12, undefined, 78, 0, false, ''])) // [23, 12, 78, 0, false, '']
console.log(compact(array1)) // [12, 34, 56, 12, 67]

var depth = 2 // profundidade
var nested = [34, 54, [45, 23, [78, 90, [65]]], 12]
console.log(flatten([34, 54, [45, 23], 12])) // [34, 54, 45, 23, 12]
console.log(flatten([34, 54, [45, 23], 12, [78, 90]])) // [34, 54, 45, 23, 12, 78, 90]
console.log(flatten([34, 54, [45, 23, [78, 90]], 12])) // [34, 54, 45, 23, [78, 90], 12]
console.log(flatten([34, 54, [45, 23, [78, 90]], 12], depth)) // [34, 54, 45, 23, 78, 90, 12]
console.log(flatten(nested, depth)) // [34, 54, 45, 23, 78, 90, [65], 12]
console.log(flatten(nested, 3)) // [34, 54, 45, 23, 78, 90, 65, 12]
console.log(flatten(array1)) // [12, 34, 56, 12, 67]

console.log(equals([1, 2, 3], [1, 2, 3])) // true
console.log(equals([1, 2, 3], [1, 3, 2])) // false
console.log(equals(array1, array2)) // false
console.log(equals([1, [2, 3], 4], [1, [2, 3], 4])) // true
console.log(equals([1, [2, 3], 4], [1, [3, 2], 4])) // false
console.log(equals(nested, nested)) // true
console.log(equals(nested, [34, 54, [45, 23, [78, 90, [65]]], 12])) // true
console.log(equals([34, 54, [45, 23, [78, 90, [65]]], 12], nested)) // true

console.log(array1) // [12, 34, 56, 12, 67]
console.log(array2) // ['js', 'java', 'c#', 'python']
