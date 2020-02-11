function ziplist(list1, list2) {
  let returnList = [];
  for (let i = 0; i < list1.length; i++) {
    returnList.push(list1[i], list2[i]);
  }
  return returnList;
}

function ziplistTheSimpleWay (list1, list2) {
 return _.flatten(_.zip(list1, list2));
}

console.log(ziplist(["a","b","c"], ["1","2","3"]));
console.log(ziplistTheSimpleWay(["a","b","c"], ["1","2","3"]));