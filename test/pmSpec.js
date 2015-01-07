var expect = require('chai').expect;
var pm = require('../lib/pm.js');

describe("Pattern Matcher", function(){
  describe("#is_match(pattern, sample)", function(){
    it("should say abc matches abc", function(){
      var pattern = "abc";
      var sample = "abc";
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.eql(expected);
    });
    it("should say abc doesnt match ab", function(){
      var pattern = "abc";
      var sample = "ab";
      var expected = false;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });
    it("should say ab doesnt match abc", function(){
      var pattern = "ab";
      var sample = "abc";
      var expected = false;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });

    it("should say . matches a", function(){
      var pattern = ".";
      var sample = "a";
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });
    it("should say ab. matches abc", function(){
      var pattern = "ab.";
      var sample = "abc";
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });
    it("should say ab. matches abd", function(){
      var pattern = "ab.";
      var sample = "abd";
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });
    it("should say abc. doesnt match abc", function(){
      var pattern = "abc.";
      var sample = "abc";
      var expected = false;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });
    it("should say .b. matches abc", function(){
      var pattern = ".b.";
      var sample = "abc";
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });


    it("should say a* matches abc", function(){
      var pattern = "a*";
      var sample = "abc";
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });
    it("should say abc* matches abc", function(){
      var pattern = "abc*";
      var sample = "abc";
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });
    it("should say *c matches abc", function(){
      var pattern = "*c";
      var sample = "abc";
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });
    it("should say *d doesnt match abc", function(){
      var pattern = "*d";
      var sample = "abc";
      var expected = false;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });


    it("should say abc*d matches abcefghijd", function(){
      var pattern = "abc*d";
      var sample = "abcefghijd";
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });

    //This test proves that * can be matched with nothing as well
    it("should say abc*d matches abcd", function(){
      var pattern = "abc*d";
      var sample = "abcd";
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });

    it("should say '' matches ''", function(){
      var pattern = '';
      var sample = '';
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });

    //This one checks to see if algorithm caters for multiple stars in a row
    //Not sure if this would be a "legal" scenario
    it("should say ab**d matches abcefghijd", function(){
      var pattern = "ab**d";
      var sample = "abcefghijd";
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });

    it("should say ab.* matches abcefghijd", function(){
      var pattern = "ab.*";
      var sample = "abcefghijd";
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });

    it("should say ab...*d matches abcefghijd", function(){
      var pattern = "ab...*d";
      var sample = "abcefghijd";
      var expected = true;
      var result = pm.is_match(pattern, sample);

      expect(result).to.equal(expected);
    });

    //Tests that can't pass right now
    //ab*. matches abcd
    //ab.*.*d matches abcefghijd

  });
});
