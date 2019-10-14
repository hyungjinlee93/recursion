// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  let coll = document.getElementsByTagName("*");
  let list = Array.prototype.slice.call(coll, 0);
  let returnList = [];
  for(let i = 0; i < list.length; i++){
    let names = list[i].className.split(' ');
    for(let j = 0; j < names.length; j++){
      if(names[j] === className){
        returnList.push(list[i]);
      }
    }
  }
  return returnList;
};
