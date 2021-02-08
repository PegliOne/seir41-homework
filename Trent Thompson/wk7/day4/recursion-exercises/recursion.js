// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion



////without recursion////////////////////////////////////////////////////////////
const maximum = function (array) {
  largestNumber = 0;
  for(let i = 0; i < array.length; i++){
    if (array[i] > largestNumber) {
      largestNumber = (array[i])
    }
  }
  return largestNumber
};

console.log(maximum([1,2,3,4,5,6,66]))

//with recursion/////////////////////////////////////////////////////////////////
function findMax(array, index = 0, max = 0){ // This function returns the largest number in a given array.
  if(index === array.length){
    return max;
  }
  if( array[index] > max){
    max = array[index]
    return findMax(array, index + 1, max)
  }
  return max
};

console.log(findMax([1,4,6,8,32]));
console.log(findMax([1,44,6,800,32]));

///////////////////JOELS////////////////////////////////////////////////////////
function findMax(array, largest=-Infinity) {
  if (array.length === 0){
    return largest;//base case//have we reached the base case??
  }
    //if we havent reached rthe base case
  if (array[0] > largest) {
    largest = array[0];
  }

  const rest = array.slice(1);

  //RECURSION bit
  return findMax(rest, largest);
}




function factorial(){
    // This function returns the factorial of a given number.
}



function fibonacci(){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips(tosses){ //not recursive
    const combinations = [];

    //Helper: recursion
    const flip = function (soFar=""){
      console.log()
      if (soFar.length === tosses){
        combinations.push (soFar); //base case
      } else {
        flip(soFar + 'H')
        flip(soFar + 'T')
      }
    }

    flip();
    return combinations
}
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"



function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

// module.exports = {
//     findMax,
//     factorial,
//     fibonacci,
//     coinFlips,
//     letterCombinations
// }
