// arrays are used for collections

// it can be defined thus, this is the literal syntax
const friends = ["Mark", 90, "ray"]
console.log(friends)

//  or with a constructor
const years = new Array(1990, 6000, 500)
console.log(years)

// to get an element from an array, you use square brackets. it is 0 based
console.log(years[0])

// to get the length of an array, you use the .length. not 0 based
console.log(years.length)

// you can change the value of an array,  y using the square brackets but assigning it to something
// even thoughcit is defined using const, it can still be changed because it is not a primitive value, only primitive values cannot be changed.
// but even so, we cannot reassign the const array even while it is not primitive.
friends[1] = "harry"
console.log(friends)


// An expression can be used in an array too, and also whole arrays
const wow = ["go" + "od", 2024 - 2007, friends]
console.log(wow)