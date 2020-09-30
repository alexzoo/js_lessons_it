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