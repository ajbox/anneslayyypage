function checkAnswer() {
    const answer = document.getElementById("answer").value;
   
    if (answer === "kids tv show"|| answer === "kids tv show theme song" || answer === "kids tv show song" || answer === "childrens show") {
     //* alert("Correct!");
     $("#message").text("you guessed it");
     $(".reveal-vid").addClass("reveal");
    } 
  
    else if (answer === "kids" || answer === "tv show" || answer === "television" || answer === "youtube" || answer === "video" || answer === "theme song" || answer === "intro" || answer === "thing" || answer === "children" || answer === "childrens"){
       //* document.getElementById("message"). textContent("close"); didnt work
    
     $("#message").text("close");
     $(".guesses").after("<p class='close'>" + answer + "</p>");
    }
  
    else {
      $("#message").text(" ");
      $(".guesses").after("<p class='wrong'>" + answer + "</p>");
    }
  }