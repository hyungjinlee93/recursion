// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  let coll = document.getElementsByTagName('*');
  // let list = Array.prototype.slice.call(coll, 0);
  let returnList = [];
  for(let i = 0; i < coll.length; i++){
    if(coll[i].classList.contains(className))
    {
      returnList.push(coll[i]);
    }
  }
  return returnList;
};
