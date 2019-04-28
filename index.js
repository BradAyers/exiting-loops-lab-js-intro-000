function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  var found = null;
  array.forEach((number, index, array) => {
    //debugger;
    if (findFn(number)) {
      //return number;
      found = number;
      console.log("Got a 'true' here!");
      console.log(number);
    }
    console.log(findFn(number));
    console.log(number);
  })



  //var temp = findFn();
  //console.log(temp);
  //for (var i = 0; i < array.length; i++) {
  //    console.log(array[i]);
  //}
  return found;
}
