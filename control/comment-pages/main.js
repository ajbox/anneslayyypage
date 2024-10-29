function checkAnswer() {
    const answer = document.getElementById("answer").value;
   
    if (answer === "mall piano"|| answer === "mall piano performance" || answer === "piano mall") {
     //* alert("Correct!");
     $("#message").text("you guessed it");
     $(".reveal-vid").addClass("reveal");
    } 
  
    else if (answer === "piano" || answer === "mall" || answer === "video" || answer === "youtube" || answer === "music" || answer === "performance" || answer === "instrument" || answer === "public" || answer === "place"){
       //* document.getElementById("message"). textContent("close"); didnt work
    
     $("#message").text("close");
     $(".guesses").after("<p class='close'>" + answer + "</p>");
    }
  
    else {
      $("#message").text(" ");
      $(".guesses").after("<p class='wrong'>" + answer + "</p>");
    }
  }