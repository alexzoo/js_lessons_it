const tlId1 = '123-orf'
const tlId2 = '253-rr3'

const TodoLists = [
    {id: tlId1, title: 'What to buy'},
    {id: tlId2, title: 'What to learn'}
]

const tasks = {
    [tlId1]: [
        {name: 'Beer', isDone: false},
        {name: 'Fish', isDone: false}
    ],
    [tlId2]: [
        {name: 'HTML', isDone: true},
        {name: 'CSS', isDone: true}
    ]
}

// Reduce - сжимает, урезает до одного значения
let numbers = [24, 22, 1, 54, 45, 56]
let average = numbers.reduce((acc, el) => acc + el, 0) / numbers.length
console.log(average)


function itReduce(arr, fn, initValue) {
    let acc = initValue

    for (let i = 0; i < arr.length; i++) {
        acc = fn(acc, arr[i])
    }

    return acc
}

console.log(itReduce(numbers, (acc, el) => acc + el, 0) / numbers.length)

let maxArray = numbers.reduce((acc, el) => acc > el ? acc : el)
console.log(maxArray)


let students = [
    {
        name: 'Bob',
        age: 23,
        isMarried: false,
        scores: 67
    },
    {
        name: 'Alex',
        age: 30,
        isMarried: false,
        scores: 135
    },
    {
        name: 'Jora',
        age: 20,
        isMarried: false,
        scores: 125
    },
    {
        name: 'Vasya',
        age: 31,
        isMarried: true,
        scores: 54
    }
];

console.log(students.reduce((acc, el) => acc + el.scores, 0))

let name = 'Alex'

function findName(acc, el) {
    if (el.name === name) {
        acc = el
    }
    return acc
}

console.log(students.reduce(findName, null))


let scores = 100

function filterByScores(acc, el) {
    if (el.scores >= scores) {
        acc.push(el)
    }
    return acc
}

console.log(students.reduce(filterByScores, []))

function addAge(acc, el) {
    acc.push({...el, age: el.age + 1})
    return acc
}

console.log(students.reduce(addAge, []))