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

    //UI for instructors
    let html = `<div id="functional-assignment">`;
    html += `
    <div class="bg-danger text-center py-2 rounded mb-2">
    <h4 class="m-0">Assignment 4 Result</h4>
    <p class="m-0">হুররে!!! জাভাস্ক্রিপ্টের সাথে স্টুডেন্টের ভালোবাসার ফলাফল নিচে চলে এসেছে । এখনোই নাম্বার দিয়ে ছোট করে সাবমিট বাটনে ক্লিক করে ফেলুন আর পাঠিয়ে দিন রেজাল্ট স্টুডেন্টের কাছে । কি আছে জীবনে !!!</p>
    </div>`;

    // UI for feedback
    for (let i = 0; i < ourMarks.length; i++) {
      html += `<div class="d-flex align-items-center border rounded my-2 p-2" style="font-size: 15px;">
   <div><strong>${
     i + 1 + ".&nbsp" + ourMarks[i].name
   }:</strong>&nbsp&nbsp<span>${
        ourMarks[i]?.message + " " + ourMarks[i].bonusMessage
      }</span>
      <div>
      <strong>Marks:</strong>&nbsp&nbsp<span>${
        ourMarks[i]?.gotBonus && ourMarks[i]?.gotFunction
          ? "10 for Function & 2 for Bonus"
          : !ourMarks[i]?.gotBonus && ourMarks[i]?.gotFunction
          ? "10 for Function  & 0 for Bonus"
          : ourMarks[i]?.gotBonus && !ourMarks[i]?.gotFunction
          ? "3 for Function (Partial Marks) & 2 for Bonus"
          : ourMarks[i]?.gotBonus &&
            ourMarks[i]?.isFunctionAvailable &&
            !ourMarks[i]?.gotFunction
          ? "3 for Function (Partial Marks) & 2 for bonus"
          : !ourMarks[i]?.gotBonus &&
            ourMarks[i]?.isFunctionAvailable &&
            !ourMarks[i]?.gotFunction
          ? "3 for Function (Partial Marks) and 0 for Bonus"
          : "0 for Function & 0 for Bonus"
      }</span>
      </div>
      ${
        ourMarks[i]?.isError && ourMarks[i]?.isFunctionAvailable
          ? `<div class="mt-3">
      <strong>Submited Function:</strong>&nbsp&nbsp<span class="text-danger">
      ${retriveFunction(studentSubmisson, ourMarks[i]?.name)}</span>
      </div>`
          : ""
      }
      </div>
   </div>`;
    }

    html += `
    <div style="font-size: 15px; margin: 10px 0;"><strong><i>Note:</i></strong>&nbsp&nbsp<span class="text-danger">কোন ফাংশন এ যদি ভুল আউটপুট আসে কিন্তু সেইটার কন্ডিশন গুলী যদি কাছাকাছি থাকে বা কিছুটা ঠিক মনে হয়, তাহলে ২ মার্ক্স বাড়িয়ে দিবেন ।</span></div>
    </div>`;

    const feedbackBox = document.getElementsByClassName(
      "feedback-box p-3 mx-4 box-shadow"
    )[0];
    feedbackBox.insertAdjacentHTML("afterbegin", html);
    // console.log(feedbackBox);
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
