exports = module.exports = {};

exports.is_match = function(pattern, sample){
  var pat = pattern.split("");
  var sam = sample.split("");

  var isMatch = true;

  //index for the sample chars array
  var samIndex = 0;
  //boolean to be set to true if last pattern char was *
  var isLastCharStar = false;

  for(var i = 0; i < pat.length; i++){

    //If this is first iteration, don't increment sample array index
    if(i != 0){
      samIndex++;
    }

    //If previous char of pattern was *, go through sample till a char
    //matching current char of is found or we run out of chars in sample
    if(isLastCharStar && pat[i] != '*'){
      while((pat[i] != sam[samIndex]) && (samIndex < sam.length)){
        samIndex++;
      }

      //If no matching char could be found, then match not found
      if(pat[i] != sam[samIndex]){
        isMatch = false;
        break;
      }else{  //else, previous char of pattern isn't star anymore so just carry on
        isLastCharStar = false;
      }

    }else{

      //If char of pattern is . then sample just needs a string to be present
      if(pat[i] == '.'){

        if(typeof sam[samIndex] != "string"){
          isMatch = false;
          break;
        }

      }else if(pat[i] == '*'){  //If char of pattern is *, set isLastCharStar to true

        isLastCharStar = true;

        //Set sample array index back to previous value as * can match anything
        samIndex--;

      }else{  //else, both chars are just alphabets so see if they match up

        //If they don't match up, match failed
        if(pat[i] != sam[samIndex]){
          isMatch = false;
          break;
        }
      }

    }

    //If last char of pattern is reached, its not star and sample still
    //has more chars, match fails
    if((i+1 == pat.length) && !isLastCharStar && (typeof sam[samIndex+1] == "string")){
      isMatch = false;
      break;
    }

  }

  return isMatch;
}
