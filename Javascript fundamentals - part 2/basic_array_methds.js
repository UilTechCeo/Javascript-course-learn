

const friends = ["mark", "harry", "jay"]

// ADD ELEMENTS

// to append a new element to the array, we could use the .push method, the method returns the length of the new array
friends.push("arnold")
console.log(friends)

// to prepend to an array, you could use the unshift() method, it also returns the new length
friends.unshift("Larry")
console.log(friends)

//  REMOVE ELEMENTS

// to remove an element based on the index is done with the .pop method, it returns the element that was removed: opp of push
friends.pop();
console.log(friends)

// to remove the first element, you use the .shift, also returns removed element
friends.shift()
console.log(friends)

// finding an element

// to get the index of an element, you use the .indexof method, it returns the index or -1 if the element does not exist
console.log(friends.indexOf("harry"))
console.log(friends.indexOf("har"))

// Another is the includes method that returns a boolean of the whether or not the element is in the list, this dosen't do type coercion
console.log(friends.includes("harry"))