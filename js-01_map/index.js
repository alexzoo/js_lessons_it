let arr1 = [9, 25, 144, 169];

let res = arr1.map(el => Math.sqrt(el));
console.log(res);


//Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

let strings = ['cat', 'dog', 'giraffe']

let res2 = strings.map(el => el + '!')
console.log(res2)


//Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

res2 = strings.map(el => {
    return [...el].reverse().join('') // [...el] = el.split('')
})

console.log(res2)


//
let arr = ['123', '456', '789'];

res2 = arr.map(el => {
    let arr2 = []
    let splited = el.split('')
    arr2.push(splited)
    return arr2
})

console.log(res2)



// Дан массив с числами. Используя метод map запишите в каждый элемент массива
// значение этого элемента, умноженное на его порядковый номер в массиве.

arr = [1, 2, 3, 4, 5]
res = arr.map((el, index) => {
    return el * index
})
console.log(res)


//

res = Math.max(...arr)
console.log(res)

res = Math.min(...arr)
console.log(res)
