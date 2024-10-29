function checkAnswer() {
    const answer = document.getElementById("answer").value;
   
    if (answer === "beyonce post"|| answer === "Beyonce Post") {
     //* alert("Correct!");
     $("#message").text("you guessed it");
     $(".reveal-vid").addClass("reveal");
    } 
  
    else if (answer === "music" || answer === "singer" || answer === "celebrity" || answer === "instagram" || answer === "post" || answer === "picture" || answer === "thing" || answer === "person"){
       //* document.getElementById("message"). textContent("close"); didnt work
    
     $("#message").text("close");
     $(".guesses").after("<p class='close'>" + answer + "</p>");
    }
  
    else {
      $("#message").text(" ");
      $(".guesses").after("<p class='wrong'>" + answer + "</p>");
    }
  }