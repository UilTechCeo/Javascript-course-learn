
// function decleration
function calcAge1(birthYear) {
    const age = 2024 - birthYear;
    return age
}

console.log(calcAge1(2005))

// an anonymous function, this is a function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear
}

console.log(calcAge2(2002))

//  some differences - function declerations can be called before the decleration, function expressions cannot: this happens because of a process called hoisting.