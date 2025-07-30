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
    ///cat1
    cashOutFeedback = { ...sampleNoBonus };
    validEmailFeedback = { ...sampleNoBonus };
    electionResultFeedback = { ...sampleNoBonus };
    isBestFriendFeedback = { ...sampleNoBonus };
    calculateWatchTimeFeedback = { ...sampleNoBonus };

    ///cat2
    calculateVATFeedback = { ...sampleNoBonus };
    validContactFeedback = { ...sampleNoBonus };
    willSuccessFeedback = { ...sampleNoBonus };
    validProposalFeedback = { ...sampleNoBonus };
    calculateSleepTimeFeedback = { ...sampleNoBonus };

    const assignmentInfo = document.querySelector(
      ".assignment-evaluation-form"
    ).innerText;

    cat = new RegExp(/Variant\n(.*?)\n/gm).exec(assignmentInfo)?.[1] || "";

    // Call the evaluation function
    startSpyings();

    // let ourMarks = [
    //   { name: "cashOut", ...cashOutFeedback },
    //   { name: "validEmail", ...validEmailFeedback },
    //   { name: "electionResult", ...electionResultFeedback },
    //   { name: "isBestFriend", ...isBestFriendFeedback },
    //   {
    //     name: "calculateWatchTime",
    //     ...calculateWatchTimeFeedback,
    //   },
    // ];

    // student's submission get
    // let rawSubmission = document.getElementsByClassName("col-12 col-md-11");
    // let studentSubmisson = rawSubmission[9].innerText;

    //feedback generation funciton call
    generateFeedbacks();
  } else if (event.code === "KeyR") {
    ///cat1
    cashOutFeedback = { ...sampleNoBonus };
    validEmailFeedback = { ...sampleNoBonus };
    electionResultFeedback = { ...sampleNoBonus };
    isBestFriendFeedback = { ...sampleNoBonus };
    calculateWatchTimeFeedback = { ...sampleNoBonus };

    ///cat2
    calculateVATFeedback = { ...sampleNoBonus };
    validContactFeedback = { ...sampleNoBonus };
    willSuccessFeedback = { ...sampleNoBonus };
    validProposalFeedback = { ...sampleNoBonus };
    calculateSleepTimeFeedback = { ...sampleNoBonus };

    var elementToRemove = document.querySelector("#functional-assignment");
    var marSug = document.getElementById("markSuggestions");
    elementToRemove.remove();
    marSug.remove();
  }
});
