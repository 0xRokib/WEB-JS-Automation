document.addEventListener("keydown", async function (event) {
  // handle re-run the function keypress
  if (
    document.getElementById("functional-assignment") &&
    event.code === "Backslash"
  ) {
    return;
  }

  // run the function using proper keypress
  if (event.code === "Backslash") {
    calculateTaxFeedback = { ...sampleNoBonus };
    sendNotificationFeeback = { ...sampleNoBonus };
    checkDigitsInNameFeedback = { ...sampleNoBonus };
    calculateFinalScoreFeedback = { ...sampleNoBonus };
    waitingTimeFeedback = { ...sampleNoBonus };

    // Call the evaluation function
    startSpyings();

    let ourMarks = [
      { name: "calculateTax", ...calculateTaxFeedback },
      { name: "sendNotification", ...sendNotificationFeeback },
      { name: "checkDigitsInName", ...checkDigitsInNameFeedback },
      { name: "calculateFinalScore", ...calculateFinalScoreFeedback },
      {
        name: "waitingTime",
        ...waitingTimeFeedback,
      },
    ];

    // student's submission get
    let rawSubmission = document.getElementsByClassName("col-12 col-md-11");
    let studentSubmisson = rawSubmission[9].innerText;

    //feedback generation funciton call
    generateFeedbacks();
  } else if (event.code === "KeyR") {
    calculateTaxFeedback = { ...sampleNoBonus };
    sendNotificationFeeback = { ...sampleNoBonus };
    checkDigitsInNameFeedback = { ...sampleNoBonus };
    calculateFinalScoreFeedback = { ...sampleNoBonus };
    waitingTimeFeedback = { ...sampleNoBonus };
    var elementToRemove = document.querySelector("#functional-assignment");
    var marSug = document.getElementById("markSuggestions");
    elementToRemove.remove();
    marSug.remove();
  }
});
