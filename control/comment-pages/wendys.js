function checkAnswer() {
    const answer = document.getElementById("answer").value;
   
    if (answer === "reeses"|| answer === "Reeses" || answer === "reeses cup" || answer === "Reeses Cup") {
     //* alert("Correct!");
     $("#message").text("you guessed it");
     $(".reveal-vid").addClass("reveal");
    } 
  
    else if (answer === "candy" || answer === "chocolate" || answer === "food" || answer === "thing" || answer === "post" || answer === "reddit" || answer === "hershey" || answer === "peanut butter" || answer === "sweet"){
       //* document.getElementById("message"). textContent("close"); didnt work
    
     $("#message").text("close");
     $(".guesses").after("<p class='close'>" + answer + "</p>");
    }
  
    else {
      $("#message").text(" ");
      $(".guesses").after("<p class='wrong'>" + answer + "</p>");
    }
  }