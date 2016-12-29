//Functions

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = "<ol>";
  for ( var j = 0; j < arr.length(); j+= 1) {
    listHTML +="<li>" + arr[j] + "</li>";
  }
  listHTML += "</ol>";
  return listHTML;
}

//Arrays

var qAndA = [
  ["Which language is used to add content to a webpage?", "html"],
  ["Which language is used to style a webpage?", "css"],
  ["Which language is used to add interactivity to a web page?", "javascript"],
]
var correct = []
var incorrect = []

//Variable Declarations  

var answer;
var noCorrect = 0;
var noIncorrect = 0;
var question;
var html;
//Loops  

for ( var i = 0; i < qAndA.length; i+= 1 ) {
  question = qAndA[i][0];
  answer = prompt( qAndA[i][0] );
  if ( answer.toLowerCase() === qAndA[i][1] ) {
    noCorrect += 1;
    correct.push(question);
  } else {
    noIncorrect +=1;
    incorrect.push(question);
  }
}  

html = "<h2>You got " + noCorrect + " question(s) right.</h2>";
html += buildList(correct);
html +="<h2>You got " + noCorrect + " question(s) wrong.</h2>";
html += buildList(incorrect);
print(html);
