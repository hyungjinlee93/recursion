// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(Array.isArray(obj)){
    return stringifyArray(obj);
  }
  if(typeof obj === 'object' && obj !== null){
    return stringifyObject(obj);
  }

  if(typeof obj === 'string'){
    return '\"' + obj + '\"';
  }
  return String(obj);
};

var stringifyObject = function(obj, strungArray, entries){
  if(entries === undefined){
    entries = Object.entries(obj);
  }

  if(strungArray === undefined){
    var strungArray = '{';
  }

  if(!entries.length){
    strungArray += '}';
    return strungArray;
  }

  let firstElement = entries.shift();
  if(strungArray != '{'){
    strungArray += ',';
  }

  strungArray += '\"';
  strungArray += firstElement[0];
  strungArray += '\"';
  strungArray += ':';

  if(typeof firstElement[1] === 'string'){
    strungArray += '\"';
    strungArray += firstElement[1];
    strungArray += '\"';
    return stringifyObject(obj, strungArray, entries);
  }

  if(Array.isArray(firstElement[1])){
    let tempString = stringifyArray(firstElement[1]);
    strungArray += tempString;
    return stringifyObject(obj, strungArray, entries);
  }

  if(typeof firstElement[1] === 'object' && firstElement[1] !== null){
    strungArray += '{';
    for(let key in firstElement[1]){
      strungArray += '\"';
      strungArray += key;
      strungArray += '\"';
      strungArray += ':';
      if(typeof firstElement[1][key] === 'string'){
        strungArray += '\"';
        strungArray += firstElement[1][key];
        strungArray += '\"';
      } else {
        strungArray += firstElement[1][key];
      }
    }
    strungArray += '}';
    return stringifyObject(obj, strungArray, entries);
  }

  strungArray += firstElement[1];
  return stringifyObject(obj, strungArray, entries);
}

var stringifyArray = function(obj, strungArray){
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
    strungArray += '\"';
    strungArray += firstElement;
    strungArray += '\"';
    return stringifyArray(obj, strungArray);
  }

  if(Array.isArray(firstElement)){
    let tempString = stringifyArray(firstElement);
    strungArray += tempString;
  }

  if(typeof firstElement === 'object'){
    //to be filled
  }

  strungArray += String(firstElement);
  return stringifyArray(obj, strungArray);
}
