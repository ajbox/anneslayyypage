function checkAnswer() {
    const answer = document.getElementById("answer").value;
   
    if (answer === "spongebob music") {
     //* alert("Correct!");
     $("#message").text("you guessed it");
     $(".reveal-vid").addClass("reveal");
    } 
  
    else if (answer === "spongebob" || answer === "show" || answer === "tv show" || answer === "youtube" || answer === "music" || answer === "nickelodeon" || answer === "thing" || answer === "relaxing"){
       //* document.getElementById("message"). textContent("close"); didnt work
    
     $("#message").text("close");
     $(".guesses").after("<p class='close'>" + answer + "</p>");
    }
  
    else {
      $("#message").text(" ");
      $(".guesses").after("<p class='wrong'>" + answer + "</p>");
    }
  }