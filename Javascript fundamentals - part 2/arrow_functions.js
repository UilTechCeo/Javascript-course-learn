
//  after func_decleration_vs_expression.js
//  this is a newly added way of writing functions, it is shorter and therefore faster to write.
//  it has no this keyword

// a simple type where we have just one parameter and one return statement


const calcAge3 = birthYear => 2024 - birthYear

console.log(calcAge3(2003))

// when we have multiple lines of code
const yearsUntilRetirement = birthYear => {
    const current_age = 2024 - birthYear
    return 65 - current_age
}

console.log(yearsUntilRetirement(2005))

// multiple parameters, we just use parantheses
const multiply = (a,b) => a * b

console.log(multiply(4, 5))
