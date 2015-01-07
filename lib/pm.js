exports = module.exports = {};

exports.is_match = function(pattern, sample){
  console.log("Pattern: " + pattern + " Sample: " + sample);

  var pat = pattern.split("");
  var sam = sample.split("");

  var isMatch = true;

  var samIndex = 0;
  var isLastCharStar = false;

  for(var i = 0; i < pat.length; i++){

    samIndex = i;

    if(pat[i] == '.'){
      if(typeof sam[samIndex] != "string"){
        isMatch = false;
        break;
      }
    }else if(pat[i] == '*'){
      isLastCharStar = true;

    }else{
      if((pat[i] != sam[samIndex]) && !isLastCharStar){
        isMatch = false;
        break;
      }else{
        isLastCharStar = false;
      }
    }

    if((i+1 == pat.length) && !isLastCharStar && (typeof sam[samIndex+1] == "string")){
      isMatch = false;
      break;
    }

  }

  return isMatch;
}
