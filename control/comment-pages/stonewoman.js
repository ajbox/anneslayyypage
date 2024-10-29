function checkAnswer() {
    const answer = document.getElementById("answer").value;
   
    if (answer === "forest meme"|| answer === "coincidence" || answer === "npc meme" || answer === "npc meme") {
     //* alert("Correct!");
     $("#message").text("you guessed it");
     $(".reveal-vid").addClass("reveal");
    } 
  
    else if (answer === "forest" || answer === "meme" || answer === "video" || answer === "youtube" || answer === "game" || answer === "npc" || answer === "outdoors" || answer === "nature" || answer === "place" || answer === "person"){
       //* document.getElementById("message"). textContent("close"); didnt work
    
     $("#message").text("close");
     $(".guesses").after("<p class='close'>" + answer + "</p>");
    }
  
    else {
      $("#message").text(" ");
      $(".guesses").after("<p class='wrong'>" + answer + "</p>");
    }
  }