// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe('shuffledArray', () => {
  const expected1 = ["yellow", "blue", "pink", "green"]
  const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  it('matches even if received contains elements in a different order', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse","indigo","periwinkle","ochre","aquamarine","saffron"]
    expect(colors1).toEqual(expect.arrayContaining(expected1));
    expect(colors2).toEqual(expect.arrayContaining(expected2));
  });
});
// b) Create the function that makes the test pass.
const shuffledArray = (array) => {
  array.shift();

  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

// Pseudo code:
// the functions name is shuffle (array) the argument will be an array
// us the shift method to to take of  the element at 0 index
// use a for loop to loop throught the array and then shuffle it

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("voteCount", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    const votes2 = { upVotes: 2, downVotes: 33 }
    expect(voteCount(votes1)).toEqual(11)
    expect(voteCount(votes2)).toEqual(-31)
  })
})
// b) Create the function that makes the test pass.
const votes1 = { upVotes: 13, downVotes: 2 }
const votes2 = { upVotes: 2, downVotes: 33 }

const voteCount = (object) => {
return object.upVotes - object.downVotes
}

// Pseudo code:
// Create function named voteCount it will one parameter that will accept and obeject
// on the passed in object access the first and second key
// return the result of subtracting the value of the first and second key

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("noDuplicates", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    expect(noDuplicates(dataTypesArray1,dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
// b) Create the function that makes the test pass.
const noDuplicates = (array1, array2) => {
  let newArray = array1.concat([...array2])
  let uniqueArray = [...new Set(newArray)];
  return uniqueArray
}

// Pseudo code:
// named the function noDuplicates 
// takes two arrays as argument
// concat the two arrays into one new variable
// use some sort of filter to get the duplicates off




