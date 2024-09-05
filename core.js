let dummySubmission = ``;
function calculateTax(income, expenses) {
  if (
    typeof income !== "number" ||
    income < 0 || // it should be less than you wrote less than or equal
    typeof expenses !== "number" ||
    expenses < 0
  ) {
    return "Invalid Input";
  }

  var taxableAmount = income - expenses;
  var tax = taxableAmount * 0.2;

  return tax;
}
function sendNotification(email) {
  if (!email.includes("@")) return "Invalid Email";

  const splittedEmail = email.split("@");
  const userName = splittedEmail[0];
  const domain = splittedEmail[1];
  const newString = `${userName} send you a message from ${domain}`;
  return newString;
}
function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }

  let containsDigits = false;
  for (let i = 0; i < name.length; i++) {
    if (name[i] >= "0" && name[i] <= "9") {
      containsDigits = true;
      break;
    }
  }

  if (containsDigits) {
    return true;
  } else {
    return false;
  }
}
function calculateFinalScore(input) {
  // if (typeof input !== "object" || input === null) {
  //   return "Invalid Input";
  // }

  const { name, testScore, schoolGrade, isFFFamily } = input;

  // if (
  //   typeof name !== "string" ||
  //   typeof testScore !== "number" ||
  //   typeof schoolGrade !== "number" ||
  //   typeof isFFFamily !== "boolean"
  // ) {
  //   return "Invalid Input";
  // }

  let finalScore = testScore + schoolGrade;
  if (isFFFamily) {
    finalScore += 20;
  }

  if (finalScore >= 80) {
    return true;
  } else {
    return false;
  }
}
function waitingTime(array, serial) {
  // if (!Array.isArray(array) || typeof serial != "number") {
  //   return "Invalid";
  // }
  const done = array.length;
  const averageTime = Math.round(array?.reduce((a, b) => a + b, 0) / done);
  const remainingPerson = serial - 1 - done;
  let reamining_time = 0;
  if (remainingPerson > 0) {
    reamining_time = remainingPerson * averageTime;
  }
  return reamining_time;
}
``;

let sampleNoBonus = {
  isBonus: false,
  marks: 0, //if no mark for commenting ==> marks: 0
  bonusMessage: "Your validation is not working so no mark for validation.", //no marks for validation
};

let calculateTaxFeedback = { ...sampleNoBonus };
let sendNotificationFeeback = { ...sampleNoBonus };
let checkDigitsInNameFeedback = { ...sampleNoBonus };
let calculateFinalScoreFeedback = { ...sampleNoBonus };
let waitingTimeFeedback = { ...sampleNoBonus };

const startSpyings = async () => {
  try {
    let rawSubmission = document.getElementsByClassName("col-12 col-md-11");
    // let studentSubmisson = rawSubmission[9].innerText;
    let studentSubmisson = dummySubmission;

    eval(studentSubmisson);

    //-------------------------- calculateTaxFeedback testing starts here
    try {
      // test cases
      let sampleInput = [
        [9000, 2500],
        [0, 0],
        [0, 0],
        [-1000, 1000],
      ];
      let expectedOutput = [1300, 0, 0, "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map(
        ([singleIn1, singleIn2], index) => {
          let evalOut = calculateTax(singleIn1, singleIn2);
          if (evalOut === expectedOutput[index]) {
            return true;
          } else if (
            //validation part
            index === 3 &&
            typeof evalOut === "string" &&
            evalOut.length > 4
          ) {
            calculateTaxFeedback = {
              ...calculateTaxFeedback,
              marks: (calculateTaxFeedback.marks || 0) + 2, // +2
              isBonus: true,
              gotBonus: true,
              bonusMessage: "You got bonus marks for validation", // you got bonus for validation
            };
            return true;
          } else {
            return false;
          }
        }
      );

      if (out1 && out2 && out3) {
        calculateTaxFeedback = {
          ...calculateTaxFeedback,
          marks: (calculateTaxFeedback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true, //if I get output from function then true
          gotFunction: true, //if all output matched
          message: !out4
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! calculateTax function working fine. Great job!",
        };
      } else {
        calculateTaxFeedback = {
          ...calculateTaxFeedback,
          isSuccess: null,
          marks:
            calculateTaxFeedback.marks > 0 ? calculateTaxFeedback.marks + 3 : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: calculateTaxFeedback.isBonus
            ? calculateTaxFeedback.bonusMessage
            : "No marks for validation.", //"No marks for validation"
        };
      }
    } catch (err) {
      calculateTaxFeedback = {
        ...calculateTaxFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running calculateTax function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // ----------------------------- calculateTaxFeedback testing ends here
    //-------------------------- sendNotificationFeeback testing starts here
    try {
      // test cases
      let sampleInput = [
        "zihad@gmail.com",
        "shabaj@gmail.com",
        "zihadgmail.com",
      ];
      let expectedOutput = [
        "zihad send you a message from gmail.com",
        "shabaj send you a message from gmail.com",
        "Random Text",
      ];
      let [out1, out2, out3] = sampleInput.map((singleIn, index) => {
        let evalOut = sendNotification(singleIn);
        if (evalOut === expectedOutput[index]) {
          return true;
        } else if (
          //validation part
          index === 2 &&
          typeof evalOut === "string" &&
          evalOut.length > 4
        ) {
          sendNotificationFeeback = {
            ...sendNotificationFeeback,
            marks: (sendNotificationFeeback.marks || 0) + 2, // +2
            isBonus: true,
            gotBonus: true,
            bonusMessage: "You got bonus marks for validation", // you got bonus for validation
          };
          return true;
        } else {
          return false;
        }
      });

      if (out1 && out2) {
        sendNotificationFeeback = {
          ...sendNotificationFeeback,
          marks: (sendNotificationFeeback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out3
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! sendNotification function working fine. Great job!",
        };
      } else {
        sendNotificationFeeback = {
          ...sendNotificationFeeback,
          isSuccess: null,
          marks:
            sendNotificationFeeback.marks > 0
              ? sendNotificationFeeback.marks + 3
              : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: sendNotificationFeeback.isBonus
            ? sendNotificationFeeback.bonusMessage
            : "No marks for validation.", //"No marks for validation"
        };
      }
    } catch (err) {
      sendNotificationFeeback = {
        ...sendNotificationFeeback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running sendNotification function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // -----------------------------sendNotificationFeeback testing ends here
    //-------------------------- checkDigitsInNameFeedback testing starts here
    try {
      // test cases
      let sampleInput = ["Hello1", "Hello", "1Hello", {}];
      let expectedOutput = [true, false, true, "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map((singleIn, index) => {
        let evalOut = checkDigitsInName(singleIn);
        if (JSON.stringify(evalOut) === JSON.stringify(expectedOutput[index])) {
          return true;
        } else if (
          //validation part
          index === 3 &&
          typeof evalOut === "string" &&
          evalOut.length > 4
        ) {
          checkDigitsInNameFeedback = {
            ...checkDigitsInNameFeedback,
            marks: (checkDigitsInNameFeedback.marks || 0) + 2, // +2
            isBonus: true,
            gotBonus: true,
            bonusMessage: "You got bonus marks for validation", // you got bonus for validation
          };
          return true;
        } else {
          return false;
        }
      });

      if (out1 && out2 && out3) {
        checkDigitsInNameFeedback = {
          ...checkDigitsInNameFeedback,
          marks: (checkDigitsInNameFeedback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out4
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! checkDigitsInName function working fine. Great job!",
        };
      } else {
        checkDigitsInNameFeedback = {
          ...checkDigitsInNameFeedback,
          isSuccess: null,
          marks:
            checkDigitsInNameFeedback.marks > 0
              ? checkDigitsInNameFeedback.marks + 3
              : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: checkDigitsInNameFeedback.isBonus
            ? checkDigitsInNameFeedback.bonusMessage
            : "No marks for validation.", //"No marks for validation"
        };
      }
    } catch (err) {
      checkDigitsInNameFeedback = {
        ...checkDigitsInNameFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running checkDigitsInName function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // -----------------------------checkDigitsInNameFeedback testing ends here
    //-------------------------- calculateFinalScoreFeedback testing starts here
    try {
      // test cases
      let sampleInput = [
        {
          name: "Rajib",
          testScore: 45,
          schoolGrade: 25,
          isFFFamily: true,
        },
        {
          name: "Rajib",
          testScore: 45,
          schoolGrade: 25,
          isFFFamily: false,
        },
        {
          name: "Rajib",
          testScore: 15,
          schoolGrade: 25,
          isFFFamily: true,
        },
        "hello",
      ];
      let expectedOutput = [true, false, false, "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map((singleIn, index) => {
        let evalOut = calculateFinalScore(singleIn);
        if (evalOut === expectedOutput[index]) {
          return true;
        } else if (
          //validation part
          index === 3 &&
          typeof evalOut === "string" &&
          evalOut.length > 4
        ) {
          calculateFinalScoreFeedback = {
            ...calculateFinalScoreFeedback,
            marks: (calculateFinalScoreFeedback.marks || 0) + 2, // +2
            isBonus: true,
            gotBonus: true,
            bonusMessage: "You got bonus marks for validation", // you got bonus for validation
          };
          return true;
        } else {
          return false;
        }
      });

      if (out1 && out2 && out3) {
        calculateFinalScoreFeedback = {
          ...calculateFinalScoreFeedback,
          marks: (calculateFinalScoreFeedback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out4
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! calculateFinalScore function working fine. Great job!",
        };
      } else {
        calculateFinalScoreFeedback = {
          ...calculateFinalScoreFeedback,
          isSuccess: null,
          marks:
            calculateFinalScoreFeedback.marks > 0
              ? calculateFinalScoreFeedback.marks + 3
              : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: calculateFinalScoreFeedback.isBonus
            ? calculateFinalScoreFeedback.bonusMessage
            : "No marks for validation.", //"No marks for validation"
        };
      }
    } catch (err) {
      calculateFinalScoreFeedback = {
        ...calculateFinalScoreFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running calculateFinalScore function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // -----------------------------calculateFinalScoreFeedback testing ends here
    //-------------------------- waitingTimeFeedback testing starts here
    try {
      // test cases
      let sampleInput = [
        [[3, 5, 7, 21, 6], 10],
        [[13, 2, 10, 7, 10, 20, 2], 6],
        ["", "9999"],
      ];
      let expectedOutput = [32, 0, "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map(
        ([singleIn1, singleIn2], index) => {
          let evalOut = waitingTime(singleIn1, singleIn2);
          console.log("four-", index + 1, "-ans-", evalOut);
          if (evalOut === expectedOutput[index]) {
            return true;
          } else if (
            //validation part
            index === 2 &&
            typeof evalOut === "string" &&
            evalOut.length > 4
          ) {
            waitingTimeFeedback = {
              ...waitingTimeFeedback,
              marks: (waitingTimeFeedback.marks || 0) + 2, // +2
              isBonus: true,
              gotBonus: true,
              bonusMessage: "You got bonus marks for validation", // you got bonus for validation
            };
            return true;
          } else {
            return false;
          }
        }
      );

      if (out1 && out2) {
        waitingTimeFeedback = {
          ...waitingTimeFeedback,
          marks: (waitingTimeFeedback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out3
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! waitingTime function working fine. Great job!",
        };
      } else {
        waitingTimeFeedback = {
          ...waitingTimeFeedback,
          isSuccess: null,
          marks:
            waitingTimeFeedback.marks > 0 ? waitingTimeFeedback.marks + 3 : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: waitingTimeFeedback.isBonus
            ? waitingTimeFeedback.bonusMessage
            : "No marks for validation.", //"No marks for validation"
        };
      }
    } catch (err) {
      waitingTimeFeedback = {
        ...waitingTimeFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running waitingTime function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // -----------------------------waitingTimeFeedback testing ends here
  } catch (err) {
    const feedbackSample = {
      marks: 0,
      isFunctionAvailable: null,
      isError: true,
      isSuccess: null,
      isBonus: null,
      bonusMessage: "No bonus marks for validation",
      message:
        err.name === "SyntaxError"
          ? "No functions found or You may have misspelled your function name."
          : err.message,
    };
    calculateTaxFeedback = feedbackSample;
    sendNotificationFeeback = feedbackSample;
    checkDigitsInNameFeedback = feedbackSample;
    calculateFinalScoreFeedback = feedbackSample;
    waitingTimeFeedback = feedbackSample;
  }
};
