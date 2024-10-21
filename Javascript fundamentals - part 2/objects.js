// before
const harry = [
    "power",
    19,
    1993,
    ["mark", "arnold"]
]

// now, with objects - Each of the keys are also called properties, this is the object literal syntax
// order of properties do not matter
const harry2 = {
    nickname: "power",
    age: 19,
    year: 1990,
    friends: ["mark", "arnold"]
}

// Accesing object values; we could use the dot notation or bracket notation, it returns undefined if the property does not exist

// . notation
console.log(harry2.nickname)

// bracket notation
console.log(harry2["age"])

// difference btw them is that an expression could be put inside the bracket as opposed to the dot notation


// this can also be used to assign new items to the object. Rules for the dot notation and bracket notation still apply
harry2.location = "florida"
console.log(harry2)

harry2["Gender"] = "male"
console.log(harry2)



// we can add a method by using an expression type of function and NOT a function decleration

const harry3 = {
    nickname: "power",
    age: 19,
    year: 1990,
    friends: ["mark", "arnold"],

    // so the property/key will be the function name and the value will be the function
    introduce: function() {
        return `this is me harry3 speaking`
    }
}

console.log(harry3.introduce())


// what if we wanted to access it directly from the object
const harry4 = {
    nickname: "power",
    age: 19,
    year: 1990,
    friends: ["mark", "arnold"],

    // We have access to a this "keyword" that allows us to use properties from the object.
    // the this keyword will be equal to the object calling the method
    // it helps us to reference the object name instead of hardcoding the object name when we want to use the property, helps incase of future changes
    introduce: function() {
        return `my nickname is ${this.nickname}`
    }
}

console.log(harry4.introduce())
