// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({
  length: (stop - start) / step + 1
}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = (n) => {
//your code goes here
  let result = "";

  //is n divisible by 3?
  if (n % 3 == 0) {
    return = `${result}Bit`;
  }

  //is n divisible by 5?
  if (n % 5 == 0) {
    return = `${result}Bat`;
  }

  if (n % 7 == 0) {
    return = `${result}Bot`;
  }

  else (n) {
    return = `${result}Not`;
  }

  return result;
}

let findAllbitBatBotOrNots1 = (arr) => {
  return arr.map(each => `${each}:`+ bitBotOrNot(each));
}

let findAllbitBatBotOrNots2 = (arr) => {
  let result = [];
  for(var i= 0; i < arr.length; i++){
    sum += arr[i];
    result.push(arr[each]+ ":" + bitBatBotOrNot(arr[each]));
  }
  return result;
}

let findAllbitBatBotOrNots3 = (arr) => {
  let result = [];
  for(each of arr){
    result.push(each + ":" + bitBatBotOrNot(each));
  }
  return result;
};

let findAllbitBatBotOrNots4 = (arr) => {
  let result = [];
  for(each in arr){
    result.push(each + ":" + bitBatBotOrNot(each))
  }
  return result;
};

let findAllbitBatBotOrNotXC = 9arr) => {
  let result = [];
  for(each in arr){
    result.push(arr[each]+ ":" + bitBatBotOrNot(arr[each]));
  }
  return result;
}

//test the functions

findAllbitBatBotOrNots1(arrOf1To100)

findAllbitBatBotOrNots2(arrOf1To100)

findAllbitBatBotOrNots3(arrOf1To100)

findAllbitBatBotOrNots4(arrOf1To100)
