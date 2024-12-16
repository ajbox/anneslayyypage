$(document).ready(function() {
  let secretNumber = 5; // Set the secret number
  let attempts = 0;

  $("#checkButton").click(function() {
    let guess = parseInt($("#guessInput").val());

    attempts++;

    if (guess === secretNumber) {
      $("#message").text("Congratulations! You guessed it in " + attempts + " attempts.");
      $("#checkButton").prop("disabled", true);
    } else if (guess < secretNumber) {
      $("#message").text("Too low! Try a higher number.");
    } else {
      $("#message").text("Too high! Try a lower number.");
    }
  });
});