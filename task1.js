// nums=[2,4,6]
// nums.forEach(element => { console.log(element*2)
// });


const numbers = [2,4,6];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 2;
}
console.log(numbers)