//Business Logic

function vowelCheck(word) {
  const pigArray = [];
  const vowels = ["a", "i", "e", "o", "u"];
  const wordArray = word.split(" ");
  for (let i = 0; i <wordArray.length; i++) {
    let letterArray = wordArray[i].split("");
    if (vowels.includes(letterArray[0])) {
      let vowelFirst = letterArray.join("");
      pigArray.push(vowelFirst + "way");
    } else {
      let constFirst = letterArray.shift();
      let newWord = letterArray.concat(constFirst);
      
      let joinConst = (newWord.join("")); 
      pigArray.push(joinConst + "ay");
    }
    
  }
  return pigArray;
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