//Business Logic

function vowelCheck(word) {
  const vowels = ["a", "i", "e", "o", "u"];
  const wordArray = word.split("");
  if (vowels.includes(wordArray[0])) {
    return("it starts with a vowel")
  } else {
    return("consonant") 
  }
}
  
  
  // User Logic
  $(document).ready(function(){
    $("form#english").submit(function() {
      event.preventDefault();
      
      let word = $("input#original").val();
      let result = vowelCheck(word);
    
    
    $(".originalOutput").append("<p>" + word + "</p>");
    $(".translateOutput").append("<p>" + result + "</p>");
    $("#result").show();
  });
});

// const vowels = ["a", "i", "e", "o", "u"];
// const string = "Replace all of the vowels with an X, please!";
// const stringArray = string.split("");
// let xArray = [];
// stringArray.forEach(function(letter) {
//   if (vowels.includes(letter)) {
//     xArray.push("x");
//   } else {
//     xArray.push(letter);
//   }
// });
// const finalString = xArray.join("");