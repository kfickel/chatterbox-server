var strIncludes = function(string) {
  if (string.slice(0, 17) === '/classes/messages') {
    return true; 
  } else {
    return false; 
  }
//check if input string sliced equals the string provided
  //return true if true
//else return false
};

exports.strIncludes = strIncludes; 