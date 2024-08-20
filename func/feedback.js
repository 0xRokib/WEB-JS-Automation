// random feedbacks

const defaultMessage = {
  BEST: [""],
  GOOD: [""],
  AVERAGE: [""],
  BAD: [""],
};
// function for generating feedback
// function getFeedBack(submit, num) {
//   console.log(submit, num);
//   switch (true) {
//     case submit === 50 ? num > 49 : num >= 59:
//       console.log("one");
//       return defaultMessage["BEST"][
//         Math.floor(Math.random() * defaultMessage["BEST"].length)
//       ];

//     case submit === 50 ? num >= 40 && num < 49 : num >= 50 && num < 59:
//       console.log("two");
//       return defaultMessage["GOOD"][
//         Math.floor(Math.random() * defaultMessage["GOOD"].length)
//       ];

//     case submit === 50 ? num >= 30 && num < 40 : num >= 40 && num < 50:
//       console.log("three");
//       return defaultMessage["AVERAGE"][
//         Math.floor(Math.random() * defaultMessage["AVERAGE"].length)
//       ];

//     default:
//       console.log("four");
//       return defaultMessage["BAD"][
//         Math.floor(Math.random() * defaultMessage["BAD"].length)
//       ];
//   }
// }
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
  let ourMarks = [
    { name: "calculateMoney", ...calculateMoneyFeedback },
    { name: "checkName", ...checkNameFeeback },
    { name: "deleteInvalids", ...deleteInvalidsFeedback },
    { name: "password", ...passwordFeedback },
    { name: "monthlySavings", ...monthlySavingsFeedback },
  ];
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
      finalFeedback?.message + " " + finalFeedback.bonusMessage
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

  const gotMark = document.createElement("p");
  gotMark.className = "m-2 w-50 markSuggestions";
  gotMark.id = "markSuggestions";
  gotMark.innerText = `${totalMarkers} ?`;

  markField.after(gotMark);
}
