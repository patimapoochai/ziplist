function ziplist(list1, list2) {
  let returnList = [];
  for (let i = 0;i < list1.length + list2.length; i+= 1) {
    returnList[i] = list1[i];
    returnList[i + 1] = list2[i];
  }
  return returnList;
}

console.log(ziplist(["a", "b", "c"],["1", "2", "3"]));

//time #1: DNF 17min12s