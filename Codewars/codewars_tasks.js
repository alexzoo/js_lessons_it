function even_or_odd(number) {
    if (number % 2 == 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] >= 0) {
            sum += arr[i]
        } else {
            continue
        }
    }
    return sum
}

function removeChar(str){
    // It's pretty straightforward. Your goal is to create a function that
    // removes the first and last characters of a string. You're given one parameter,
    // the original string. You don't have to worry with strings with less than two characters.

    return str.slice(1, -1)
}

function repeatStr (n, s) {
    return s.repeat(n);
}

console.log(repeatStr(5, 'li'))


function multiTable(number) {
    let result = ''
    for (let i = 1; i < 11; i++) {
        let res =+ number * i
        result +=`${i} * ${number} = ${res}\n`
    }
    return result.slice(0, result.length-1);
}

console.log(multiTable(5))
