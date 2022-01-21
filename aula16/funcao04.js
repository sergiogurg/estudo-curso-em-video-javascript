function fatorial(n) {
    fat = 1
    for (let cont = n ; cont > 1 ; cont--) {
        fat *= cont
    }
    return fat
}

let res = fatorial(5)
console.log(res)