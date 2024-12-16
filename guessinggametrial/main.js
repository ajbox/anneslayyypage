
function checkAnswer() {
  const answer = document.getElementById("answer").value;
 
  if (answer === "mall piano") {
   //* alert("Correct!");
   $("#message").text("you guessed it");
   //*  $(".reveal-words").addClass("reveal");
  } 

  else if (answer === "piano" || answer === "mall" || answer === "video" || answer === "youtube" || answer === "music" || answer === "performance" || answer === "instrument" || answer === "public" || answer === "place"){
     //* document.getElementById("message"). textContent("close"); didnt work
  
   $("#message").text("close");
   $(".guesses").after("<p class'close'>" + answer + "</p>");
  }

  else {
    $(".guesses").after("<p class='wrong'>" + answer + "</p>");
  }
}