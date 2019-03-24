/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var sum = 0;
  preferences.unshift("");
  var i = 0;
  preferences.forEach(function(item, i, preferences){
    var k = preferences[i];
    var m = preferences[k];
    var n = preferences[m];
    if ((n == i) && (i !=k)){
    sum = sum + 1;   
   } 
     
  })
  return sum/3;
};