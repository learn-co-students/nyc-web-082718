const data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

// sort each array, find the smallest/ largest based on that sort
// map the data in each row, then reduce; map would produce the differences

function sortMapReduce(data) {
  // TODO: send sort docs
  const sortedData = data.map(innerArr => {
    return innerArr.sort((prev, curr) => prev > curr)
  })
 // [1, 2, 3, 4, 5] //length is 5
 // there is nothing at indexPos 5
 // therefore, the last element is arr[arr.length - 1]
  const diffs = sortedData.map(innerArr => {
    // return the difference b/n the largest and smallest nums
    return innerArr[innerArr.length - 1] - innerArr[0]
  })
  return diffs.reduce(function(sum, currentNumber) {
    return sum + currentNumber
  }, 0)
}

console.log(sortMapReduce(data))

// Math.min/Math.max then subtract then sum

function mathMaxChecksum(data) {
  const diffs = data.map(innerArr => {
    // Math.max([1, 2, 3]) -> NaN
    // if i use the spread operator: (...innerArr), the elements of the array will be passed to Math.max:
    // Math.max(1, 2, 3) -> 3
    return Math.max(...innerArr) - Math.min(...innerArr)
    // OR i could use Function.prototype.apply()
    // return Math.max.apply(null, innerArr) - Math.min.apply(null, innerArr)
  })
  console.log(diffs)
  return diffs.reduce((sum, total) => (sum + total), 0)
}

console.log(mathMaxChecksum(data))


function mathMaxTerse(data) {
  return data.reduce((sum, innerArr) => {
    return sum + Math.max(...innerArr) - Math.min(...innerArr)
  }, 0)
}

console.log(mathMaxTerse(data))

function calculateChecksum(data) { //data is array of arrays
  const diffs = []
  for (let i = 0; i < data.length; i++) {
    let highest = null
    let lowest = null
    // data[i] [409, 194, 207, 470, 178] first nested arr
    for (let j = 0; j < data[i].length; j++) {
      //iterate over nested array
      // data[0][1] -> 194
      if (lowest === null || data[i][j] < lowest) {
        // if i do not have a lowest; lowest === null
        // set lowest
        // if i encounter a lower num than my lowest, set lowest to be that lower num
        lowest = data[i][j]
      }
      if (highest === null || data[i][j] > highest) {
        highest = data[i][j]
      }
    } //end of nested for looop
    diffs.push(highest - lowest) //keep track of our diffs
  } //end of first for loop
  console.log(diffs)
  return diffs.reduce((sum, diff) => {
    return sum + diff
  }, 0)
}

console.log(calculateChecksum(data))
