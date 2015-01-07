exports = module.exports = {};

exports.is_match = function(pattern, sample){
  console.log("Pattern: " + pattern + " Sample: " + sample);

  var pat = pattern.split("");
  var sam = sample.split("");

  var isMatch = true;

  var samIndex = 0;
  var isLastCharStar = false;

  for(var i = 0; i < pat.length; i++){

    if(i != 0){
      samIndex++;
    }
    console.log("Pattern index: " + i);
    console.log("Sample index: " + samIndex);

    //If last pattern char was *, go through sample till a char
    //matching current pattern char is found, else match is false
    // if(isLastCharStar){
    //   while(pat[i] != sam[samIndex]){
    //
    //   }
    // }

    if(pat[i] == '.'){

      console.log("Pattern char is [.]");

      if(typeof sam[samIndex] != "string"){
        console.log("Match failed because sample doesnt have a char in place.");
        isMatch = false;
        break;
      }

    }else if(pat[i] == '*'){

      console.log("Pattern char is [*]");

      isLastCharStar = true;

      console.log("isLastCharStar set to true");

    }else{

      console.log("Pattern char is [" + pat[i] + "]");
      console.log("Sample char is [" + sam[samIndex] + "]");

      if((pat[i] != sam[samIndex]) && !isLastCharStar){
        console.log("Pattern char [" + pat[i] + "] is not equal to sample char [" + sam[samIndex] + "]");
        isMatch = false;
        break;
      }else{
        isLastCharStar = false;
        console.log("isLastCharStar set to false;");
      }
    }

    //If last char of pattern is reached, its not star and sample still
    //has more chars, match fails
    if((i+1 == pat.length) && !isLastCharStar && (typeof sam[samIndex+1] == "string")){

      console.log("Sample is too long compared to pattern. Match failed.");

      isMatch = false;
      break;
    }

  }

  return isMatch;
}
