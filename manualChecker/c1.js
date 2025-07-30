// ---------------------paste code in submission.js------------------------------
const fs = require("fs");
// ---------------------paste code in submission.js------------------------------


let dummySubmission = `function cashOut(money) {

if (typeof money != "number") {
  return "Invalid";
}
  if (money < 0) {
    return "Invalid";
  }

  return (money * 1.75) / 100;
}
  function validEmail(email) {
  if (typeof email != "string") {
    return "Invalid";
  }
  let s = ".-_+@";

  if (s.includes(email[0])) {
    return false;
  }

  if (email.includes("@") == false) return false;
  if (email.includes(" ")) return false;
  if (email.endsWith(".com") == false) return false;

  return true;
}
  function electionResult(votes) {
  if (!Array.isArray(votes)) return "Invalid";

  let mangoVote = 0;
  let bananaVote = 0;

  for (let vote of votes) {
    if (vote == "mango") mangoVote++;
    if (vote == "banana") bananaVote++;
  }
  if (bananaVote == mangoVote) return "Draw";
  else if (bananaVote > mangoVote) return "Banana";
  else if (bananaVote < mangoVote) return "Mango";
}
  function isBestFriend(f1, f2) {
  if (typeof f1 != "object") return "Invalid";
  if (typeof f2 != "object") return "Invalid";

  if (f1.roll == f2.bestFriend && f2.roll == f1.bestFriend) return true;
  return false;
}
  function calculateWatchTime(times) {
  let totalTime = 0;
  for (let time of times) {
    if (typeof time !== "number") return "Invalid";
    totalTime += time;
  }

  let hour = Math.floor(totalTime / 3600);
  let rest = totalTime % 3600;
  let minute = Math.floor(rest / 60);
  let second = rest % 60;

  return {
    hour,
    minute,
    second,
  };
}
  `;

let cat = "Assignment_04_Category_001";

let sampleNoBonus = {
  isBonus: false,
  marks: 0, //if no mark for commenting ==> marks: 0
  bonusMessage: "❌ Your validation is not working so no mark for validation.", //no marks for validation
};

/// cat1
let cashOutFeedback = { ...sampleNoBonus };
let validEmailFeedback = { ...sampleNoBonus };
let electionResultFeedback = { ...sampleNoBonus };
let isBestFriendFeedback = { ...sampleNoBonus };
let calculateWatchTimeFeedback = { ...sampleNoBonus };

/// cat2
let calculateVATFeedback = { ...sampleNoBonus };
let validContactFeedback = { ...sampleNoBonus };
let willSuccessFeedback = { ...sampleNoBonus };
let validProposalFeedback = { ...sampleNoBonus };
let calculateSleepTimeFeedback = { ...sampleNoBonus };

function areEqual(a, b, absTol = 1e-9, relTol = Number.EPSILON) {
  if (typeof a !== "number" && typeof b !== "number") return false;

  if (a === b) return true; // Handles exact equality, including zero
  const diff = Math.abs(a - b);
  // Check absolute tolerance for numbers near zero
  if (diff <= absTol) return true;
  // Check relative tolerance for larger numbers
  const max = Math.max(Math.abs(a), Math.abs(b));
  return diff <= relTol * max;
}

let studentSubmisson;

const startSpyings = async () => {
  try {
    studentSubmisson = fs.readFileSync("submission.js", "utf8");
    // studentSubmisson = dummySubmission;

    eval(studentSubmisson);

    const functionNames = [
      ...studentSubmisson.matchAll(/function\s+(\w+)\s*\(/g),
    ].map((match) => match[1]);

    if (cat === "Assignment_04_Category_001") {
      //// cat1
      // 1 -------------------------- cashOutFeedback testing starts here
      try {
        // test cases
        let sampleInput = [2000, 100, 0, "validation"];
        let expectedOutput = [35, 1.75, 0, "Random Text"];
        let [out1, out2, out3, out4] = sampleInput.map((Input1, index) => {
          try {
            let evalOut = cashOut(Input1);
            if (areEqual(evalOut, expectedOutput[index])) {
              return true;
            } else if (
              //validation part
              index === 3 &&
              typeof evalOut === "string" &&
              evalOut.length > 6
            ) {
              cashOutFeedback = {
                ...cashOutFeedback,
                marks: (cashOutFeedback.marks || 0) + 2, // +2
                isBonus: true,
                gotBonus: true,
                bonusMessage: "✔️ You got bonus marks for validation", // you got bonus for validation
              };
              return true;
            } else {
              return false;
            }
          } catch (error) {
            return false;
          }
        });
        //console.log(cashOutFeedback);

        if (out1 && out2 && out3) {
          cashOutFeedback = {
            ...cashOutFeedback,
            marks: (cashOutFeedback.marks || 0) + 10,
            isSuccess: true,
            isFunctionAvailable: true, //if I get output from function then true
            gotFunction: true, //if all output matched
            message: !out4
              ? "😞 Good job! But need improvement!"
              : "🏆 Nice!!! cashOut function working fine. Great job!",
          };

          //console.log(cashOutFeedback);
        } else {
          if (functionNames.includes("cashOut")) {
            cashOutFeedback = {
              ...cashOutFeedback,
              isSuccess: null,
              marks: cashOutFeedback.marks > 0 ? cashOutFeedback.marks + 3 : 3,
              isError: true,
              isFunctionAvailable: true,
              message:
                "❌ Wrong output! But You got some partial marks. Need improvement.",
              bonusMessage: cashOutFeedback.isBonus
                ? cashOutFeedback.bonusMessage
                : "\n❌ No marks for validation.", //"No marks for validation"
            };
            //console.log(cashOutFeedback);
          } else {
            cashOutFeedback = {
              marks: 0,
              isFunctionAvailable: null,
              isError: true,
              isSuccess: null,
              isBonus: null,
              bonusMessage: "❌ No bonus marks for validation",
              message:
                "No functions found or You may have misspelled your function name.",
            };
            //console.log(cashOutFeedback);
          }
        }
      } catch (err) {
        cashOutFeedback = {
          ...cashOutFeedback,
          marks: 0,
          isFunctionAvailable: null,
          isSuccess: null,
          isError: true,
          message:
            err.name === "ReferenceError"
              ? `❌ Error occurred while running cashOut function. The error was: "${err.message}"`
              : err.message,
        };
      }
      // ----------------------------- cashOutFeedback testing ends here
      // 2 -------------------------- validEmailFeedback testing starts here
      try {
        // test cases
        let sampleInput = [
          "mahmud12@gmail.com",
          "-king@yahoo.com",
          ["jhankar@hero.coom"],
        ];
        let expectedOutput = [true, false, "Random Text"];
        let [out1, out2, out3] = sampleInput.map((singleIn, index) => {
          try {
            let evalOut = validEmail(singleIn);
            if (evalOut === expectedOutput[index]) {
              return true;
            } else if (
              //validation part
              index === 2 &&
              typeof evalOut === "string" &&
              evalOut.length > 6
            ) {
              validEmailFeedback = {
                ...validEmailFeedback,
                marks: (validEmailFeedback.marks || 0) + 2, // +2
                isBonus: true,
                gotBonus: true,
                bonusMessage: "✔️ You got bonus marks for validation", // you got bonus for validation
              };
              return true;
            } else {
              return false;
            }
          } catch (error) {
            return false;
          }
        });

        //console.log(validEmailFeedback);
        if (out1 && out2) {
          validEmailFeedback = {
            ...validEmailFeedback,
            marks: (validEmailFeedback.marks || 0) + 10,
            isSuccess: true,
            isFunctionAvailable: true,
            gotFunction: true,
            message: !out3
              ? "😞 Good job! But need improvement!"
              : "🏆 Nice!!! validEmail function working fine. Great job!",
          };
          //console.log(validEmailFeedback);
        } else {
          if (functionNames.includes("validEmail")) {
            validEmailFeedback = {
              ...validEmailFeedback,
              isSuccess: null,
              marks:
                validEmailFeedback.marks > 0 ? validEmailFeedback.marks + 3 : 3,
              isError: true,
              isFunctionAvailable: true,
              message:
                "❌ Wrong output! But You got some partial marks. Need improvement.",
              bonusMessage: validEmailFeedback.isBonus
                ? validEmailFeedback.bonusMessage
                : "\n❌ No marks for validation.", //"No marks for validation"
            };
            //console.log(validEmailFeedback);
          } else {
            validEmailFeedback = {
              marks: 0,
              isFunctionAvailable: null,
              isError: true,
              isSuccess: null,
              isBonus: null,
              bonusMessage: "❌ No bonus marks for validation",
              message:
                "No functions found or You may have misspelled your function name.",
            };
            //console.log(validEmailFeedback);
          }
        }
      } catch (err) {
        validEmailFeedback = {
          ...validEmailFeedback,
          marks: 0,
          isFunctionAvailable: null,
          isSuccess: null,
          isError: true,
          message:
            err.name === "ReferenceError"
              ? `❌ Error occurred while running validEmail function. The error was: "${err.message}"`
              : err.message,
        };
      }
      // -----------------------------validEmailFeedback testing ends here
      // 3 -------------------------- electionResultFeedback testing starts here
      try {
        // test cases
        let sampleInput = [
          ["banana", "banana", "age e valo chilam", "no"],
          ["mango", "banana", "mango", "banana", "mango"],
          ["mango", "banana", "jaker party", "nope"],
          "Invalid",
        ];
        let expectedOutput = ["Banana", "Mango", "Draw", "Random Text"];
        let [out1, out2, out3, out4] = sampleInput.map((singleIn, index) => {
          try {
            let evalOut = electionResult(singleIn);
            if (evalOut === expectedOutput[index]) {
              return true;
            } else if (
              //validation part
              index === 3 &&
              typeof evalOut === "string" &&
              evalOut.length > 6
            ) {
              electionResultFeedback = {
                ...electionResultFeedback,
                marks: (electionResultFeedback.marks || 0) + 2, // +2
                isBonus: true,
                gotBonus: true,
                bonusMessage: "✔️ You got bonus marks for validation", // you got bonus for validation
              };
              return true;
            } else {
              return false;
            }
          } catch (error) {
            return false;
          }
        });
        //console.log(electionResultFeedback);

        if (out1 && out2 && out3) {
          electionResultFeedback = {
            ...electionResultFeedback,
            marks: (electionResultFeedback.marks || 0) + 10,
            isSuccess: true,
            isFunctionAvailable: true,
            gotFunction: true,
            message: !out4
              ? "😞 Good job! But need improvement!"
              : "🏆 Nice!!! electionResult function working fine. Great job!",
          };
          //console.log(electionResultFeedback);
        } else {
          if (functionNames.includes("electionResult")) {
            electionResultFeedback = {
              ...electionResultFeedback,
              isSuccess: null,
              marks:
                electionResultFeedback.marks > 0
                  ? electionResultFeedback.marks + 3
                  : 3,
              isError: true,
              isFunctionAvailable: true,
              message:
                "❌ Wrong output! But You got some partial marks. Need improvement.",
              bonusMessage: electionResultFeedback.isBonus
                ? electionResultFeedback.bonusMessage
                : "\n❌ No marks for validation.", //"No marks for validation"
            };
            //console.log(electionResultFeedback);
          } else {
            electionResultFeedback = {
              marks: 0,
              isFunctionAvailable: null,
              isError: true,
              isSuccess: null,
              isBonus: null,
              bonusMessage: "❌ No bonus marks for validation",
              message:
                "No functions found or You may have misspelled your function name.",
            };
            //console.log(electionResultFeedback);
          }
        }
      } catch (err) {
        electionResultFeedback = {
          ...electionResultFeedback,
          marks: 0,
          isFunctionAvailable: null,
          isSuccess: null,
          isError: true,
          message:
            err.name === "ReferenceError"
              ? `❌ Error occurred while running electionResult function. The error was: "${err.message}"`
              : err.message,
        };
      }
      // -----------------------------electionResultFeedback testing ends here
      // 4 -------------------------- isBestFriendFeedback testing starts here
      try {
        // test cases
        let sampleInput = [
          [
            { name: "hashem", roll: 1, bestFriend: 2 },
            { name: "kashem", roll: 2, bestFriend: 1 },
          ],
          [
            { name: "hashem", roll: 21, bestFriend: 1 },
            { name: "kashem", roll: 1, bestFriend: 2 },
          ],
          [
            { name: "hashem", roll: 21, bestFriend: 11 },
            { name: "kashem", roll: 1, bestFriend: 21 },
          ],
          [
            { name: "kashem", roll: 2, bestFriend: 11 },
            "Kashem er Kono Bondhu Nai",
          ],
        ];
        let expectedOutput = [true, false, false, "Random Text"];
        let [out1, out2, out3, out4] = sampleInput.map(
          ([Input1, Input2], index) => {
            try {
              let evalOut = isBestFriend(Input1, Input2);
              if (evalOut === expectedOutput[index]) {
                return true;
              } else if (
                //validation part
                index === 3 &&
                typeof evalOut === "string" &&
                evalOut.length > 6
              ) {
                isBestFriendFeedback = {
                  ...isBestFriendFeedback,
                  marks: (isBestFriendFeedback.marks || 0) + 2, // +2
                  isBonus: true,
                  gotBonus: true,
                  bonusMessage: "✔️ You got bonus marks for validation", // you got bonus for validation
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

        //console.log(isBestFriendFeedback);
        if (out1 && out2 && out3) {
          isBestFriendFeedback = {
            ...isBestFriendFeedback,
            marks: (isBestFriendFeedback.marks || 0) + 10,
            isSuccess: true,
            isFunctionAvailable: true,
            gotFunction: true,
            message: !out4
              ? "😞 Good job! But need improvement!"
              : "🏆 Nice!!! isBestFriend function working fine. Great job!",
          };
          //console.log(isBestFriendFeedback);
        } else {
          if (functionNames.includes("isBestFriend")) {
            isBestFriendFeedback = {
              ...isBestFriendFeedback,
              isSuccess: null,
              marks:
                isBestFriendFeedback.marks > 0
                  ? isBestFriendFeedback.marks + 3
                  : 3,
              isError: true,
              isFunctionAvailable: true,
              message:
                "❌ Wrong output! But You got some partial marks. Need improvement.",
              bonusMessage: isBestFriendFeedback.isBonus
                ? isBestFriendFeedback.bonusMessage
                : "\n❌ No marks for validation.", //"No marks for validation"
            };
            //console.log(isBestFriendFeedback);
          } else {
            isBestFriendFeedback = {
              marks: 0,
              isFunctionAvailable: null,
              isError: true,
              isSuccess: null,
              isBonus: null,
              bonusMessage: "❌ No bonus marks for validation",
              message:
                "No functions found or You may have misspelled your function name.",
            };
            //console.log(isBestFriendFeedback);
          }
        }
      } catch (err) {
        isBestFriendFeedback = {
          ...isBestFriendFeedback,
          marks: 0,
          isFunctionAvailable: null,
          isSuccess: null,
          isError: true,
          message:
            err.name === "ReferenceError"
              ? `❌ Error occurred while running isBestFriend function. The error was: "${err.message}"`
              : err.message,
        };
      }
      // -----------------------------isBestFriendFeedback testing ends here
      // 5 -------------------------- calculateWatchTimeFeedback testing starts here
      try {
        // test cases
        let sampleInput = [[100, 99, 119, 300], [], [100, 3800, "90"]];
        let expectedOutput = [
          { hour: 0, minute: 10, second: 18 },
          { hour: 0, minute: 0, second: 0 },
          "Random Text",
        ];
        let [out1, out2, out3] = sampleInput.map((Input1, index) => {
          try {
            let evalOut = calculateWatchTime(Input1);
            // [index]);
            //console.log(evalOut?.hour, expectedOutput[index]?.hour);
            if (
              evalOut?.hour == expectedOutput[index]?.hour &&
              evalOut?.minute == expectedOutput[index]?.minute &&
              evalOut?.second == expectedOutput[index]?.second &&
              evalOut?.hour != undefined &&
              evalOut?.minute != undefined &&
              evalOut?.second != undefined
            ) {
              //console.log("evalout", evalOut);
              return true;
            } else if (
              //validation part
              index === 2 &&
              typeof evalOut === "string" &&
              evalOut.length > 6
            ) {
              //console.log("evalout1", evalOut);
              calculateWatchTimeFeedback = {
                ...calculateWatchTimeFeedback,
                marks: (calculateWatchTimeFeedback.marks || 0) + 2, // +2
                isBonus: true,
                gotBonus: true,
                bonusMessage: "✔️ You got bonus marks for validation", // you got bonus for validation
              };
              return true;
            } else {
              return false;
            }
          } catch (error) {
            return false;
          }
        });
        //
        //console.log("out", out1, out2, out3);
        //console.log(calculateWatchTimeFeedback);

        if (out1 && out2) {
          calculateWatchTimeFeedback = {
            ...calculateWatchTimeFeedback,
            marks: (calculateWatchTimeFeedback.marks || 0) + 10,
            isSuccess: true,
            isFunctionAvailable: true,
            gotFunction: true,
            message: !out3
              ? "😞 Good job! But need improvement!"
              : "🏆 Nice!!! calculateWatchTime function working fine. Great job!",
          };
          //console.log(calculateWatchTimeFeedback);
        } else {
          if (functionNames.includes("calculateWatchTime")) {
            calculateWatchTimeFeedback = {
              ...calculateWatchTimeFeedback,
              isSuccess: null,
              marks:
                calculateWatchTimeFeedback.marks > 0
                  ? calculateWatchTimeFeedback.marks + 3
                  : 3,
              isError: true,
              isFunctionAvailable: true,
              message:
                "❌ Wrong output! But You got some partial marks. Need improvement.",
              bonusMessage: calculateWatchTimeFeedback.isBonus
                ? calculateWatchTimeFeedback.bonusMessage
                : "\n❌ No marks for validation.", //"No marks for validation"
            };
            //console.log(calculateWatchTimeFeedback);
          } else {
            calculateWatchTimeFeedback = {
              marks: 0,
              isFunctionAvailable: null,
              isError: true,
              isSuccess: null,
              isBonus: null,
              bonusMessage: "❌ No bonus marks for validation",
              message:
                "No functions found or You may have misspelled your function name.",
            };
            //console.log(calculateWatchTimeFeedback);
          }
        }
      } catch (err) {
        calculateWatchTimeFeedback = {
          ...calculateWatchTimeFeedback,
          marks: 0,
          isFunctionAvailable: null,
          isSuccess: null,
          isError: true,
          message:
            err.name === "ReferenceError"
              ? `❌ Error occurred while running calculateWatchTime function. The error was: "${err.message}"`
              : err.message,
        };
      }
      // -----------------------------calculateWatchTimeFeedback testing ends here
    } else if (cat === "Assignment_04_Category_002") {
      // 1 -------------------------- calculateVATFeedback testing starts here
      try {
        // test cases
        let sampleInput = [1500, 200, 400, "validation"];
        let expectedOutput = [112.5, 15, 30, "Random Text"];
        let [out1, out2, out3, out4] = sampleInput.map((Input1, index) => {
          try {
            let evalOut = calculateVAT(Input1);
            if (areEqual(evalOut, expectedOutput[index])) {
              return true;
            } else if (
              //validation part
              index === 3 &&
              typeof evalOut === "string" &&
              evalOut.length > 6
            ) {
              calculateVATFeedback = {
                ...calculateVATFeedback,
                marks: (calculateVATFeedback.marks || 0) + 2, // +2
                isBonus: true,
                gotBonus: true,
                bonusMessage: "✔️ You got bonus marks for validation", // you got bonus for validation
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
          calculateVATFeedback = {
            ...calculateVATFeedback,
            marks: (calculateVATFeedback.marks || 0) + 10,
            isSuccess: true,
            isFunctionAvailable: true, //if I get output from function then true
            gotFunction: true, //if all output matched
            message: !out4
              ? "😞 Good job! But need improvement!"
              : "🏆 Nice!!! calculateVAT function working fine. Great job!",
          };
        } else {
          if (functionNames.includes("calculateVAT")) {
            calculateVATFeedback = {
              ...calculateVATFeedback,
              isSuccess: null,
              marks:
                calculateVATFeedback.marks > 0
                  ? calculateVATFeedback.marks + 3
                  : 3,
              isError: true,
              isFunctionAvailable: true,
              message:
                "❌ Wrong output! But You got some partial marks. Need improvement.",
              bonusMessage: calculateVATFeedback.isBonus
                ? calculateVATFeedback.bonusMessage
                : "\n❌ No marks for validation.", //"No marks for validation"
            };
          } else {
            calculateVATFeedback = {
              marks: 0,
              isFunctionAvailable: null,
              isError: true,
              isSuccess: null,
              isBonus: null,
              bonusMessage: "❌ No bonus marks for validation",
              message:
                "No functions found or You may have misspelled your function name.",
            };
          }
        }
      } catch (err) {
        calculateVATFeedback = {
          ...calculateVATFeedback,
          marks: 0,
          isFunctionAvailable: null,
          isSuccess: null,
          isError: true,
          message:
            err.name === "ReferenceError"
              ? `❌ Error occurred while running calculateVAT function. The error was: "${err.message}"`
              : err.message,
        };
      }
      // ----------------------------- calculateVATFeedback testing ends here
      // 2 -------------------------- validContactFeedback testing starts here
      try {
        // test cases
        let sampleInput = ["01819234567", "018192345679", ["01987654321"]];
        let expectedOutput = [true, false, "Random Text"];
        let [out1, out2, out3] = sampleInput.map((Input, index) => {
          try {
            let evalOut = validContact(Input);
            if (evalOut === expectedOutput[index]) {
              return true;
            } else if (
              //validation part
              index === 2 &&
              typeof evalOut === "string" &&
              evalOut.length > 6
            ) {
              validContactFeedback = {
                ...validContactFeedback,
                marks: (validContactFeedback.marks || 0) + 2, // +2
                isBonus: true,
                gotBonus: true,
                bonusMessage: "✔️ You got bonus marks for validation", // you got bonus for validation
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
          validContactFeedback = {
            ...validContactFeedback,
            marks: (validContactFeedback.marks || 0) + 10,
            isSuccess: true,
            isFunctionAvailable: true,
            gotFunction: true,
            message: !out3
              ? "😞 Good job! But need improvement!"
              : "🏆 Nice!!! validContact function working fine. Great job!",
          };
        } else {
          if (functionNames.includes("validContact")) {
            validContactFeedback = {
              ...validContactFeedback,
              isSuccess: null,
              marks:
                validContactFeedback.marks > 0
                  ? validContactFeedback.marks + 3
                  : 3,
              isError: true,
              isFunctionAvailable: true,
              message:
                "❌ Wrong output! But You got some partial marks. Need improvement.",
              bonusMessage: validContactFeedback.isBonus
                ? validContactFeedback.bonusMessage
                : "\n❌ No marks for validation.", //"No marks for validation"
            };
          } else {
            validContactFeedback = {
              marks: 0,
              isFunctionAvailable: null,
              isError: true,
              isSuccess: null,
              isBonus: null,
              bonusMessage: "❌ No bonus marks for validation",
              message:
                "No functions found or You may have misspelled your function name.",
            };
          }
        }
      } catch (err) {
        validContactFeedback = {
          ...validContactFeedback,
          marks: 0,
          isFunctionAvailable: null,
          isSuccess: null,
          isError: true,
          message:
            err.name === "ReferenceError"
              ? `❌ Error occurred while running validContact function. The error was: "${err.message}"`
              : err.message,
        };
      }
      // -----------------------------validContactFeedback testing ends here
      // 3 -------------------------- willSuccessFeedback testing starts here
      try {
        // test cases
        let sampleInput = [
          [60, 70, 80, 40, 30],
          [48, 48, 50, 50, 100],
          [],
          "Invalid",
        ];
        let expectedOutput = [true, true, false, "Random Text"];
        let [out1, out2, out3, out4] = sampleInput.map((Input, index) => {
          try {
            let evalOut = willSuccess(Input);
            if (evalOut === expectedOutput[index]) {
              return true;
            } else if (
              //validation part
              index === 3 &&
              typeof evalOut === "string" &&
              evalOut.length > 6
            ) {
              willSuccessFeedback = {
                ...willSuccessFeedback,
                marks: (willSuccessFeedback.marks || 0) + 2, // +2
                isBonus: true,
                gotBonus: true,
                bonusMessage: "✔️ You got bonus marks for validation", // you got bonus for validation
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
          willSuccessFeedback = {
            ...willSuccessFeedback,
            marks: (willSuccessFeedback.marks || 0) + 10,
            isSuccess: true,
            isFunctionAvailable: true,
            gotFunction: true,
            message: !out4
              ? "😞 Good job! But need improvement!"
              : "🏆 Nice!!! willSuccess function working fine. Great job!",
          };
        } else {
          if (functionNames.includes("willSuccess")) {
            willSuccessFeedback = {
              ...willSuccessFeedback,
              isSuccess: null,
              marks:
                willSuccessFeedback.marks > 0
                  ? willSuccessFeedback.marks + 3
                  : 3,
              isError: true,
              isFunctionAvailable: true,
              message:
                "❌ Wrong output! But You got some partial marks. Need improvement.",
              bonusMessage: willSuccessFeedback.isBonus
                ? willSuccessFeedback.bonusMessage
                : "\n❌ No marks for validation.", //"No marks for validation"
            };
          } else {
            willSuccessFeedback = {
              marks: 0,
              isFunctionAvailable: null,
              isError: true,
              isSuccess: null,
              isBonus: null,
              bonusMessage: "❌ No bonus marks for validation",
              message:
                "No functions found or You may have misspelled your function name.",
            };
          }
        }
      } catch (err) {
        willSuccessFeedback = {
          ...willSuccessFeedback,
          marks: 0,
          isFunctionAvailable: null,
          isSuccess: null,
          isError: true,
          message:
            err.name === "ReferenceError"
              ? `❌ Error occurred while running willSuccess function. The error was: "${err.message}"`
              : err.message,
        };
      }
      // -----------------------------willSuccessFeedback testing ends here
      // 4 -------------------------- validProposalFeedback testing starts here
      try {
        // test cases
        let sampleInput = [
          [
            { name: "milon", gender: "male", age: 20 },
            { name: "sumi", gender: "female", age: 25 },
          ],
          [
            { name: "shuvo", gender: "male", age: 20 },
            { name: "joy", gender: "male", age: 25 },
          ],
          [
            { name: "toya", gender: "female", age: 24 },
            { name: "bjoy", gender: "male", age: 32 },
          ],
          [{ name: "mitu", gender: "male", age: 32 }, "Mizan"],
        ];
        let expectedOutput = [true, false, false, "Random Text"];
        let [out1, out2, out3, out4] = sampleInput.map(
          ([Input1, Input2], index) => {
            try {
              let evalOut = validProposal(Input1, Input2);
              if (evalOut === expectedOutput[index]) {
                return true;
              } else if (
                //validation part
                index === 3 &&
                typeof evalOut === "string" &&
                evalOut.length > 6
              ) {
                validProposalFeedback = {
                  ...validProposalFeedback,
                  marks: (validProposalFeedback.marks || 0) + 2, // +2
                  isBonus: true,
                  gotBonus: true,
                  bonusMessage: "✔️ You got bonus marks for validation", // you got bonus for validation
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
          validProposalFeedback = {
            ...validProposalFeedback,
            marks: (validProposalFeedback.marks || 0) + 10,
            isSuccess: true,
            isFunctionAvailable: true,
            gotFunction: true,
            message: !out4
              ? "😞 Good job! But need improvement!"
              : "🏆 Nice!!! validProposal function working fine. Great job!",
          };
        } else {
          if (functionNames.includes("validProposal")) {
            validProposalFeedback = {
              ...validProposalFeedback,
              isSuccess: null,
              marks:
                validProposalFeedback.marks > 0
                  ? validProposalFeedback.marks + 3
                  : 3,
              isError: true,
              isFunctionAvailable: true,
              message:
                "❌ Wrong output! But You got some partial marks. Need improvement.",
              bonusMessage: validProposalFeedback.isBonus
                ? validProposalFeedback.bonusMessage
                : "\n❌ No marks for validation.", //"No marks for validation"
            };
          } else {
            validProposalFeedback = {
              marks: 0,
              isFunctionAvailable: null,
              isError: true,
              isSuccess: null,
              isBonus: null,
              bonusMessage: "❌ No bonus marks for validation",
              message:
                "No functions found or You may have misspelled your function name.",
            };
          }
        }
      } catch (err) {
        validProposalFeedback = {
          ...validProposalFeedback,
          marks: 0,
          isFunctionAvailable: null,
          isSuccess: null,
          isError: true,
          message:
            err.name === "ReferenceError"
              ? `❌ Error occurred while running validProposal function. The error was: "${err.message}"`
              : err.message,
        };
      }
      // -----------------------------validProposalFeedback testing ends here
      // 5 -------------------------- calculateSleepTimeFeedback testing starts here
      try {
        // test cases
        let sampleInput = [
          [1000, 499, 519, 300],
          [100, 3800],
          [100, 3800, "90"],
        ];
        let expectedOutput = [
          { hour: 0, minute: 38, second: 38 },
          { hour: 1, minute: 5, second: 0 },
          "Random Text",
        ];
        let [out1, out2, out3] = sampleInput.map((Input1, index) => {
          try {
            let evalOut = calculateSleepTime(Input1);
            //console.log("output", evalOut, expectedOutput[index]);
            if (
              evalOut?.hour == expectedOutput[index]?.hour &&
              evalOut?.minute == expectedOutput[index]?.minute &&
              evalOut?.second == expectedOutput[index]?.second &&
              typeof evalOut != "string"
            ) {
              return true;
            } else if (
              //validation part
              index === 2 &&
              typeof evalOut === "string" &&
              evalOut.length > 6
            ) {
              //console.log("else", evalOut);
              calculateSleepTimeFeedback = {
                ...calculateSleepTimeFeedback,
                marks: (calculateSleepTimeFeedback.marks || 0) + 2, // +2
                isBonus: true,
                gotBonus: true,
                bonusMessage: "✔️ You got bonus marks for validation", // you got bonus for validation
              };
              return true;
            } else {
              return false;
            }
          } catch (error) {
            return false;
          }
        });
        //console.log("out", out1, out2, out3);

        if (out1 && out2) {
          calculateSleepTimeFeedback = {
            ...calculateSleepTimeFeedback,
            marks: (calculateSleepTimeFeedback.marks || 0) + 10,
            isSuccess: true,
            isFunctionAvailable: true,
            gotFunction: true,
            message: !out3
              ? "😞 Good job! But need improvement!"
              : "🏆 Nice!!! calculateSleepTime function working fine. Great job!",
          };
        } else {
          if (functionNames.includes("calculateSleepTime")) {
            calculateSleepTimeFeedback = {
              ...calculateSleepTimeFeedback,
              isSuccess: null,
              marks:
                calculateSleepTimeFeedback.marks > 0
                  ? calculateSleepTimeFeedback.marks + 3
                  : 3,
              isError: true,
              isFunctionAvailable: true,
              message:
                "❌ Wrong output! But You got some partial marks. Need improvement.",
              bonusMessage: calculateSleepTimeFeedback.isBonus
                ? calculateSleepTimeFeedback.bonusMessage
                : "\n❌ No marks for validation.", //"No marks for validation"
            };
          } else {
            calculateSleepTimeFeedback = {
              marks: 0,
              isFunctionAvailable: null,
              isError: true,
              isSuccess: null,
              isBonus: null,
              bonusMessage: "❌ No bonus marks for validation",
              message:
                "No functions found or You may have misspelled your function name.",
            };
          }
        }
      } catch (err) {
        calculateSleepTimeFeedback = {
          ...calculateSleepTimeFeedback,
          marks: 0,
          isFunctionAvailable: null,
          isSuccess: null,
          isError: true,
          message:
            err.name === "ReferenceError"
              ? `❌ Error occurred while running calculateSleepTime function. The error was: "${err.message}"`
              : err.message,
        };
      }
      // -----------------------------calculateSleepTimeFeedback testing ends here
    } else {
      alert("Error Category not found");
      return;
    }
  } catch (err) {
    const feedbackSample = {
      marks: 0,
      isFunctionAvailable: null,
      isError: true,
      isSuccess: null,
      isBonus: null,
      bonusMessage: "❌ No bonus marks for validation",
      message:
        err.name === "SyntaxError"
          ? "No functions found or You may have misspelled your function name."
          : err.message,
    };

    /// cat1
    cashOutFeedback = feedbackSample;
    validEmailFeedback = feedbackSample;
    electionResultFeedback = feedbackSample;
    isBestFriendFeedback = feedbackSample;
    calculateWatchTimeFeedback = feedbackSample;

    /// cat2
    calculateVATFeedback = feedbackSample;
    validContactFeedback = feedbackSample;
    willSuccessFeedback = feedbackSample;
    validProposalFeedback = feedbackSample;
    calculateSleepTimeFeedback = feedbackSample;
  }
};

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
  let submitedNum = "60";

  if (submitedNum == 60) {
    totalMarkers = 60 - (60 - totalMarkers);
  } else if (submitedNum == 50) {
    totalMarkers = Math.ceil(50 - ((60 - totalMarkers) * 50) / 60);
  } else {
    totalMarkers = Math.ceil(30 - (60 - totalMarkers) / 2);
  }

  let markIn60 = 60 - (60 - totalMarkers);
  let markIn50 = Math.ceil(50 - ((60 - totalMarkers) * 50) / 60);
  let markIn30 = Math.ceil(30 - (60 - totalMarkers) / 2);

  console.log("\n----------< ObtainedMarks >----------");
  console.log(
    `---< ${markIn60}/60 >--< ${markIn50}/50 >--< ${markIn30}/30 >---\n`
  );

  let feedback = ``;
  feedback += `Assignment Feedback:
    `;

  for (finalFeedback of ourMarks) {
    feedback += `
  ${finalFeedback.name}:  ${
      finalFeedback?.message + "\n  " + finalFeedback.bonusMessage
    }
      `;
  }

  feedback += `
  Examiner Feedback: ${getFeedBack(submitedNum, totalMarkers)}
  
  Important Instructions:
    → Don't post any marks-related issues on Facebook.
    → Make sure to read all the feedback carefully.
    → If you think some mistake happen from the examiner's end, give a recheck request or join support session for help.
    → After recheck 2 marks will be deducted automatically. but don't worry, if your recheck reason is valid then your marks will be increased.
    → If your recheck reason is not valid, 2 marks will be deducted from your current marks.

  Let's Code_ Your Career\n\n`;

  console.log(feedback);
}
function generateLogs1() {
  eval(studentSubmisson);

  console.log("-------------------------------------------");
  try {
    console.log(
      "cashOut ",
      cashOut(2000),
      "|",
      cashOut(100),
      "|",
      cashOut(0),
      "|",
      cashOut("validation")
    );
    console.log("Solution 35 | 1.75 | 0 | Invalid");
  } catch (error) {
    console.log("error in cashOut:", error);
  }
  console.log("-------------------------------------------");
  try {
    console.log(
      "validEmail ",
      validEmail("mahmud12@gmail.com"),
      "|",
      validEmail("-king@yahoo.com"),
      "|",
      validEmail(["jhankar@hero.coom"])
    );
    console.log("Solution    true | false | Invalid");
  } catch (error) {
    console.log("error in validEmail:", error);
  }
  console.log("-------------------------------------------");
  try {
    console.log(
      "electionResult ",
      electionResult(["banana", "banana", "age e valo chilam", "no"]),
      "|",
      electionResult(["mango", "banana", "mango", "banana", "mango"]),
      "|",
      electionResult(["mango", "banana", "jaker party", "nope"]),
      "|",
      electionResult("Invalid")
    );
    console.log("Solution        Banana | Mango | Draw | Invalid");
  } catch (error) {
    console.log("error in electionResult:", error);
  }
  console.log("-------------------------------------------");
  try {
    console.log(
      "isBestFriend ",
      isBestFriend(
        { name: "hashem", roll: 1, bestFriend: 2 },
        { name: "kashem", roll: 2, bestFriend: 1 }
      ),
      "|",
      isBestFriend(
        { name: "hashem", roll: 21, bestFriend: 1 },
        { name: "kashem", roll: 1, bestFriend: 2 }
      ),
      "|",
      isBestFriend(
        { name: "hashem", roll: 21, bestFriend: 11 },
        { name: "kashem", roll: 1, bestFriend: 21 }
      ),
      "|",
      isBestFriend(
        { name: "kashem", roll: 2, bestFriend: 11 },
        "Kashem er Kono Bondhu Nai"
      )
    );
    console.log("Solution      true | false | false | Invalid");
  } catch (error) {
    console.log("error in isBestFriend:", error);
  }
  console.log("-------------------------------------------");
  try {
    console.log(
      "calculateWatchTime ",
      calculateWatchTime([100, 99, 119, 300]),
      "|",
      calculateWatchTime([]),
      "|",
      calculateWatchTime([100, 3800, "90"])
    );
    console.log(
      "Solution           ",
      { hour: 0, minute: 10, second: 18 },
      "|",
      { hour: 0, minute: 0, second: 0 },
      "| Invalid"
    );
  } catch (error) {
    console.log("error in calculateWatchTime:", error);
  }
  console.log("-------------------------------------------");
}

startSpyings();
generateLogs1();
generateFeedbacks();
