let dummySubmission = ``;

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
    let studentSubmisson = rawSubmission[9].innerText;
    // let studentSubmisson = dummySubmission;

    eval(studentSubmisson);

    // 1 -------------------------- calculateTaxFeedback testing starts here
    try {
      // test cases
      let sampleInput = [
        [1000, 200],
        [2000, 400],
        [3000, 600],
        [-100, 100],
      ];
      let expectedOutput = [160, 320, 480, "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map(
        ([singleIn1, singleIn2], index) => {
          try {
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
          } catch (error) {
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
    // 2 -------------------------- sendNotificationFeeback testing starts here
    try {
      // test cases
      let sampleInput = [
        "mahmud12@gmail.com",
        "arif.khan9@outlook.com",
        "sadia8icloud.com",
      ];
      let expectedOutput = [
        "mahmud12 sent you an email from gmail.com",
        "arif.khan9 sent you an email from outlook.com",
        "Random Text",
      ];
      let [out1, out2, out3] = sampleInput.map((singleIn, index) => {
        try {
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
        } catch (error) {
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
    // 3 -------------------------- checkDigitsInNameFeedback testing starts here
    try {
      // test cases
      let sampleInput = ["Hello1", "Hello", "1Hello", {}];
      let expectedOutput = [true, false, true, "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map((singleIn, index) => {
        try {
          let evalOut = checkDigitsInName(singleIn);
          if (
            JSON.stringify(evalOut) === JSON.stringify(expectedOutput[index])
          ) {
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
        } catch (error) {
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
    // 4 -------------------------- calculateFinalScoreFeedback testing starts here
    try {
      // test cases
      let sampleInput = [
        {
          name: "Rajib",
          testScore: 40,
          schoolGrade: 20,
          isFFamily: true,
        },
        {
          name: "Rajib",
          testScore: 50,
          schoolGrade: 30,
          isFFamily: false,
        },
        {
          name: "Rajib",
          testScore: 35,
          schoolGrade: 20,
          isFFamily: false,
        },
        "Hello",
      ];
      let expectedOutput = [true, true, false, "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map((singleIn, index) => {
        try {
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
        } catch (error) {
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
    // 5 -------------------------- waitingTimeFeedback testing starts here
    try {
      // test cases
      let sampleInput = [
        [[5, 5, 5, 5], 10],
        [[1, 1, 1, 1, 1], 6],
        [123, ""],
      ];
      let expectedOutput = [25, 0, "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map(
        ([singleIn1, singleIn2], index) => {
          try {
            let evalOut = waitingTime(singleIn1, singleIn2);
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
          } catch (error) {
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
