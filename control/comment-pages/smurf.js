function checkAnswer() {
    const answer = document.getElementById("answer").value;
   
    if (answer === "ariana grande" || answer === "Ariana Grande" || answer === " ariana grande red carpet") {
     //* alert("Correct!");
     $("#message").text("you guessed it");
     $(".reveal-vid").addClass("reveal");
    } 
  
    else if (answer === "singer" || answer === "celebrity" || answer === "video" || answer === "twitter" || answer === "music" || answer === "person" || answer === "red carpet" || answer === "meme"){
       //* document.getElementById("message"). textContent("close"); didnt work
    
     $("#message").text("close");
     $(".guesses").after("<p class='close'>" + answer + "</p>");
    }
  
    else {
      $("#message").text(" ");
      $(".guesses").after("<p class='wrong'>" + answer + "</p>");
    }
  }