let array = [5, 7, 1, 1, 2, 3, 22]

array = [1, 1, 1, 1, 1, 7]

function nonConstructibleChange(coins) {
  let minimumValue = 0;
  coins.sort((x, y) => x - y);

  for (const coin of coins) {
    if (coin > minimumValue + 1) {
      return minimumValue + 1;
    }

    minimumValue += coin;
  }

  return minimumValue + 1;

 }

console.log('1: ' , nonConstructibleChange(array))

function sortedSquaredArray(array) {
  const toBeReturnedArray = []

  for (const item of array) {
    const squaredItem = item * item

    toBeReturnedArray.push(squaredItem)
  }

  toBeReturnedArray.sort((x, y) => x - y)

  return toBeReturnedArray
}

// array = [1, 2, 3, 5, 6, 8, 9]
// array =  [-10, -5, 0, 5, 10]
array =  [-2, -1]
console.log('2: ', sortedSquaredArray(array))