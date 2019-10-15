// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(Array.isArray(obj)){
    return stringifyArray(obj);
  }
  if(typeof obj === 'object'){
    //to be filled
  }

  if(typeof obj === 'string'){
    return '\"' + obj + '\"';
  }
  return String(obj);
};

var stringifyArray = function(obj, strungArray) {
  if(strungArray === undefined){
    var strungArray = '[';
  }

  if(!obj.length){
    strungArray += ']';
    return strungArray;
  }

  let firstElement = obj.shift();
  if(strungArray != '['){
    strungArray += ',';
  }

  if(typeof firstElement === 'string'){
    // if(strungArray.length !== 1){
    //   strungArray += ',';
    // }
    strungArray += '\"';
    strungArray += firstElement;
    strungArray += '\"';
    return stringifyArray(obj, strungArray);
  }

  if(Array.isArray(firstElement)){
    //to be filled
    let tempString = stringifyArray(firstElement);
    strungArray += tempString;
  }

  if(typeof firstElement === 'object'){
    //to be filled
  }

  // if(strungArray.length !== 1){
  //   strungArray += ',';
  // }
  strungArray += String(firstElement);
  return stringifyArray(obj, strungArray);
}
