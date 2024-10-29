function checkAnswer() {
    const answer = document.getElementById("answer").value;
   
    if (answer === "elephant size" || answer === "size of elephants") {
     //* alert("Correct!");
     $("#message").text("you guessed it");
     $(".reveal-vid").addClass("reveal");
    } 
  
    else if (answer === "size" || answer === "elephant" || answer === "video" || answer === "youtube" || answer === "animal" || answer === "thing" || answer === "life" || answer === "time" || answer === "mammal" || answer === "africa"){
       //* document.getElementById("message"). textContent("close"); didnt work
    
     $("#message").text("close");
     $(".guesses").after("<p class='close'>" + answer + "</p>");
    }
  
    else {
      $("#message").text(" ");
      $(".guesses").after("<p class='wrong'>" + answer + "</p>");
    }
  }