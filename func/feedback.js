// random feedbacks

const defaultMessage = {
  BEST: [
    "Awesome work!🌟 Keep it up! 💪",
    "Wow! 👏 You did very well! It must have been your dedication and hard work behind it. Keep up the fantastic effort! 🚀",
    "Congratulations 🎉 on achieving a perfect score! You should be very proud! 🏆",
  ],
  GOOD: [
    "Good job! 👏 Keep working hard! 💪",
    "Solid effort!📈 Keep practicing, and you'll reach your goals! 🎯",
    "You're on the right track!📈 Keep up the good work! 👏",
  ],
  AVERAGE: [
    "There's always room for improvement. Keep practicing, and you'll see results! 💪",
    "It looks like you could use some extra practice. Don’t give up—keep at it! 🚀",
    "Remember, progress takes time ⏳. Keep working hard, and you'll improve! 🌟",
  ],
  BAD: [
    "Stay focused and keep pushing forward—wishing you the best of luck! 💪",
    "It looks like you faced some challenges this time. Don't be discouraged; keep at it! 💪",
    "Remember, everyone makes mistakes. Keep learning and growing! 🌟",
  ],
};

function getFeedBack(submittedMarks, obtainedMarks) {
  switch (submittedMarks) {
    case "60":
      // console.log("60");
      if (obtainedMarks >= submittedMarks * 0.9) {
        //54-60
        return defaultMessage["BEST"][
          Math.floor(Math.random() * defaultMessage["BEST"].length)
        ];
      } else if (obtainedMarks >= submittedMarks * 0.7) {
        //42-53
        return defaultMessage["GOOD"][
          Math.floor(Math.random() * defaultMessage["GOOD"].length)
        ];
      } else if (obtainedMarks >= submittedMarks * 0.5) {
        // 30-41
        return defaultMessage["AVERAGE"][
          Math.floor(Math.random() * defaultMessage["AVERAGE"].length)
        ];
      } else {
        //0-29
        return defaultMessage["BAD"][
          Math.floor(Math.random() * defaultMessage["BAD"].length)
        ];
      }

    case "50":
      console.log("50");
      if (obtainedMarks >= submittedMarks * 0.9) {
        //45-50
        return defaultMessage["BEST"][
          Math.floor(Math.random() * defaultMessage["BEST"].length)
        ];
      } else if (obtainedMarks >= submittedMarks * 0.7) {
        //35-44
        return defaultMessage["GOOD"][
          Math.floor(Math.random() * defaultMessage["GOOD"].length)
        ];
      } else if (obtainedMarks >= submittedMarks * 0.5) {
        // 25-34
        return defaultMessage["AVERAGE"][
          Math.floor(Math.random() * defaultMessage["AVERAGE"].length)
        ];
      } else {
        //0-24
        return defaultMessage["BAD"][
          Math.floor(Math.random() * defaultMessage["BAD"].length)
        ];
      }

    case "30":
      console.log("30");
      if (obtainedMarks >= submittedMarks * 0.9) {
        //27-30
        return defaultMessage["BEST"][
          Math.floor(Math.random() * defaultMessage["BEST"].length)
        ];
      } else if (obtainedMarks >= submittedMarks * 0.7) {
        //21-26
        return defaultMessage["GOOD"][
          Math.floor(Math.random() * defaultMessage["GOOD"].length)
        ];
      } else if (obtainedMarks >= submittedMarks * 0.5) {
        // 15-20
        return defaultMessage["AVERAGE"][
          Math.floor(Math.random() * defaultMessage["AVERAGE"].length)
        ];
      } else {
        //0-14
        return defaultMessage["BAD"][
          Math.floor(Math.random() * defaultMessage["BAD"].length)
        ];
      }

    default:
      return "Invalid marks.";
  }
}

function generateFeedbacks() {
  let ourMarks;

  if (cat === "Assignment_04_Category_001") {
    ourMarks = [
      { name: "cashOut", ...cashOutFeedback },
      { name: "validEmail", ...validEmailFeedback },
      { name: "electionResult", ...electionResultFeedback },
      { name: "isBestFriend", ...isBestFriendFeedback },
      {
        name: "calculateWatchTime",
        ...calculateWatchTimeFeedback,
      },
    ];
  } else if (cat === "Assignment_04_Category_002") {
    ourMarks = [
      { name: "calculateVAT", ...calculateVATFeedback },
      { name: "validContact", ...validContactFeedback },
      { name: "willSuccess", ...willSuccessFeedback },
      { name: "validProposal", ...validProposalFeedback },
      {
        name: "calculateSleepTime",
        ...calculateSleepTimeFeedback,
      },
    ];
  } else {
    alert("Error Category not found");
    return;
  }

  // console.log(ourMarks);
  let totalMarkers = ourMarks.reduce((prev, next) => prev + next.marks || 0, 0);

  // assignment submited at
  let submitedNum = document.getElementsByClassName("font-weight-bold pl-2 ")[0]
    .innerText;

  if (submitedNum == 60) {
    totalMarkers = 60 - (60 - totalMarkers);
  } else if (submitedNum == 50) {
    totalMarkers = Math.ceil(50 - ((60 - totalMarkers) * 50) / 60);
  } else {
    totalMarkers = Math.ceil(30 - (60 - totalMarkers) / 2);
  }

  let feedback = ``;
  feedback += `<strong>Assignment Feedback:</strong>
    `;

  for (finalFeedback of ourMarks) {
    feedback += `
  <strong style="text-align:left;">${
    finalFeedback.name
  }:</strong>&nbsp&nbsp<span>${
      finalFeedback?.message + "\n&nbsp&nbsp" + finalFeedback.bonusMessage
    }</span>
      `;
  }

  feedback += `
  <strong>Examiner Feedback:</strong> ${getFeedBack(submitedNum, totalMarkers)}
  
  <strong>Important Instructions:</strong>
    → Don't post any marks-related issues on Facebook.
    → Make sure to read all the feedback carefully.
    → If you think some mistake happen from the examiner's end, give a recheck request or join support session for help.
    → After recheck 2 marks will be deducted automatically. but don't worry, if your recheck reason is valid then your marks will be increased.
    → If your recheck reason is not valid, 2 marks will be deducted from your current marks.
  <br/>
  <strong>Let's Code_ Your Career</strong>`;

  // Quil Feedback Box
  const textArea = document.querySelector(".ql-editor p");
  textArea.innerHTML = feedback;

  // Actual Marks Box
  const markField = document.getElementById("Mark");
  markField.focus();
  // setTimeout(() => {
  //   document.getElementById("Mark").value = totalMarkers;
  // }, 200);

  const gotMark = document.createElement("p");
  gotMark.className = "m-2 w-50 markSuggestions";
  gotMark.id = "markSuggestions";
  gotMark.innerText = `${totalMarkers} ?`;

  markField.after(gotMark);
}

function showLogs(logs) {
  const feedbackBox = document.getElementsByClassName(
    "feedback-box p-3 mx-4 box-shadow"
  )[0];
  let text = document.getElementById("load-feedback");
  if (!text) {
    const link = document.createElement("link");
    link.href = "https://fonts.cdnfonts.com/css/sf-mono";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    text = document.createElement("div");
    text.setAttribute("class", " container cantdupli");
    text.setAttribute("id", "load-feedback");
    feedbackBox.insertBefore(text, feedbackBox.firstChild);
  }
  text.innerHTML = `<p style="font-size: 32px;">Logs</p>`;
  text.innerHTML += `<p id="feed-box" class="" style="
white-space: pre; overflow-x: auto;font-family: 'SF mono', SFMono-Regular, ui-monospace, monospace !important; padding: 2px;">${logs}</p>`;
}
