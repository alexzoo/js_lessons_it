
class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greetings = () => {
        console.log(`Hi, I'm ${this.name}`)
    }
    sayAge() {
        console.log(`I'm ${this.age} years old`)
    }
}

class Student extends Human {
    constructor(name, age, scores) {
        super(name, age)
        this._scores = scores
    }
    get scores() {
        return this._scores
    }
    set scores(value) {
        if (typeof value === 'number') {
            this._scores = value
        } else {
            alert('Not a number')
        }
    }
}

let john = new Human('John', 23)

const btn = document.getElementById('btn')

btn.onClick = john.greetings
// const boundedJohn = john.greetings.bind(john)
// btn.onclick = boundedJohn

const bob = new Student('Bob', 25, 100)
console.dir(bob)