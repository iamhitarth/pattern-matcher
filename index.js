function is_match(pattern, sample, shouldBe){
  console.log("Pattern: " + pattern + " Sample: " + sample + " [" + shouldBe + "]");

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

  }

  return isMatch;
}

console.log(is_match("abc", "abc", true));
console.log(is_match("abc", "ab", false));
console.log(is_match("ab", "abc", false));

console.log(is_match("ab.", "abc", true));
console.log(is_match("ab.", "abd", true));
console.log(is_match("abc.", "abc", false));
console.log(is_match(".b.", "abc", true));

console.log(is_match("a*", "abc", true));
console.log(is_match("abc*", "abc", true));
console.log(is_match("*c", "abc", true));
console.log(is_match("*d", "abc", false));

console.log(is_match("abc*d", "abcefghijd", true));
console.log(is_match("dabc*d", "dabcefghijd"));
//Multiple stars
//Empty array
