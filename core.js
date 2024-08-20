let dummySubmission = `function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Input";
  } else {
    return ticketSale * 120 - (500 + 8 * 50);
  }
}

function checkName(name) {
  if (typeof name != "string") {
    return "Invalid";
  } else {
    let result = name.toLowerCase();
    let flag1 = false;
    let validLastDigit = "ayieouw";
    let char = result[result.length - 1];
    if (validLastDigit.includes(char)) {
      flag1 = true;
    } else {
      flag1 = false;
    }
    if (flag1 == true) {
      return "Good Name";
    } else return "Bad Name";
  }
}

function deleteInvalids(numbers) {
  if (Array.isArray(numbers) == false) {
    return "Invalid Input";
  } else {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
      let ans = typeof numbers[i];
      if (ans == "number") {
        if (!isNaN(numbers[i])) {
          result.push(numbers[i]);
        }
      }
    }
    return result;
  }
}

function password(obj) {
  let year = parseInt(obj.birthYear);
  if (Object.keys(obj).length != 3) {
    return "Invalid";
  } else if (year < 1000 || year > 9999) {
    return "Invalid";
  } else {
    let result = "";
    let tmp = obj.siteName;
    let tmp1 = tmp.toUpperCase();
    result = tmp1[0];
    for (let i = 1; i < tmp.length; i++) {
      result += tmp[i];
    }
    result += "#";
    result += obj.name;
    result += "@";
    result += obj.birthYear;
    return result;
  }
}

function monthlySavings(a, livingCost) {
  if (Array.isArray(a) == false || typeof livingCost != "number") {
    return "Invalid Input";
  }
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= 3000) {
      let tax = 20 * a[i];
      tax = tax / 100;
      let tmp = a[i] - tax;
      ans += tmp;
    } else ans += a[i];
  }
  let savings = ans - livingCost;
  if (savings < 0) {
    return "Earn More";
  } else return savings;
}`;
let sampleNoBonus = {
  isBonus: false,
  marks: 0, //if no mark for commenting ==> marks: 0
  bonusMessage: "Your validation is not working so no mark for validation.", //no marks for validation
};
let calculateMoneyFeedback = { ...sampleNoBonus };
let checkNameFeeback = { ...sampleNoBonus };
let deleteInvalidsFeedback = { ...sampleNoBonus };
let passwordFeedback = { ...sampleNoBonus };
let monthlySavingsFeedback = { ...sampleNoBonus };

const startSpyings = async () => {
  try {
    let rawSubmission = document.getElementsByClassName("col-12 col-md-11");
    let studentSubmisson = rawSubmission[9].innerText;
    // let studentSubmisson = dummySubmission;

    eval(studentSubmisson);

    //-------------------------- calculateMoneyFeedback testing starts here
    try {
      // test cases
      let sampleInput = [1, 17, 39, -99];
      let expectedOutput = [-780, 1140, 3780, "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map((singleIn, index) => {
        let evalOut = calculateMoney(singleIn);
        if (evalOut === expectedOutput[index]) {
          return true;
        } else if (
          //validation part
          index === 3 &&
          typeof evalOut === "string" &&
          evalOut.length > 4
        ) {
          calculateMoneyFeedback = {
            ...calculateMoneyFeedback,
            marks: (calculateMoneyFeedback.marks || 0) + 2, // +2
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
        calculateMoneyFeedback = {
          ...calculateMoneyFeedback,
          marks: (calculateMoneyFeedback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true, //if I get output from function then true
          gotFunction: true, //if all output matched
          message: !out4
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! calculateMoney function working fine. Great job!",
        };
      } else {
        calculateMoneyFeedback = {
          ...calculateMoneyFeedback,
          isSuccess: null,
          marks:
            calculateMoneyFeedback.marks > 0
              ? calculateMoneyFeedback.marks + 3
              : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: calculateMoneyFeedback.isBonus
            ? calculateMoneyFeedback.bonusMessage
            : "No marks for validation.", //"No marks for validation"
        };
      }
    } catch (err) {
      calculateMoneyFeedback = {
        ...calculateMoneyFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running calculateMoney function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // -----------------------------calculateMoneyFeedback testing ends here
    //-------------------------- checkNameFeeback testing starts here
    try {
      // test cases
      let sampleInput = ["Sadee", "SadSS", 10];
      let expectedOutput = ["Good Name", "Bad Name", "Random Text"];
      let [out1, out2, out3] = sampleInput.map((singleIn, index) => {
        let evalOut = checkName(singleIn);
        if (evalOut === expectedOutput[index]) {
          return true;
        } else if (
          //validation part
          index === 2 &&
          typeof evalOut === "string" &&
          evalOut.length > 4
        ) {
          checkNameFeeback = {
            ...checkNameFeeback,
            marks: (checkNameFeeback.marks || 0) + 2, // +2
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
        checkNameFeeback = {
          ...checkNameFeeback,
          marks: (checkNameFeeback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out3
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! checkName function working fine. Great job!",
        };
      } else {
        checkNameFeeback = {
          ...checkNameFeeback,
          isSuccess: null,
          marks: checkNameFeeback.marks > 0 ? checkNameFeeback.marks + 3 : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: checkNameFeeback.isBonus
            ? checkNameFeeback.bonusMessage
            : "No marks for validation.", //"No marks for validation"
        };
      }
    } catch (err) {
      checkNameFeeback = {
        ...checkNameFeeback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running checkName function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // -----------------------------checkNameFeeback testing ends here
    //-------------------------- deleteInvalidsFeedback testing starts here
    try {
      // test cases
      let sampleInput = [
        [1, 2, "1", "2"],
        ["1", NaN, 3, undefined, null, 4],
        [{ num: 2 }, [1, 2, "1"], 5, 6],
        { name: "x" },
      ];
      let expectedOutput = [[1, 2], [3, 4], [5, 6], "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map((singleIn, index) => {
        let evalOut = deleteInvalids(singleIn);
        if (JSON.stringify(evalOut) === JSON.stringify(expectedOutput[index])) {
          return true;
        } else if (
          //validation part
          index === 3 &&
          typeof evalOut === "string" &&
          evalOut.length > 4
        ) {
          deleteInvalidsFeedback = {
            ...deleteInvalidsFeedback,
            marks: (deleteInvalidsFeedback.marks || 0) + 2, // +2
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
        deleteInvalidsFeedback = {
          ...deleteInvalidsFeedback,
          marks: (deleteInvalidsFeedback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out4
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! deleteInvalids function working fine. Great job!",
        };
      } else {
        deleteInvalidsFeedback = {
          ...deleteInvalidsFeedback,
          isSuccess: null,
          marks:
            deleteInvalidsFeedback.marks > 0
              ? deleteInvalidsFeedback.marks + 3
              : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: deleteInvalidsFeedback.isBonus
            ? deleteInvalidsFeedback.bonusMessage
            : "No marks for validation.", //"No marks for validation"
        };
      }
    } catch (err) {
      deleteInvalidsFeedback = {
        ...deleteInvalidsFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running deleteInvalids function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // -----------------------------deleteInvalidsFeedback testing ends here
    //-------------------------- passwordFeedback testing starts here
    try {
      // test cases
      let sampleInput = [
        { name: "msKhan", birthYear: 2001, siteName: "p-hero.com" },
        { name: "msKhan", birthYear: 2001, siteName: "something.com" },
        { name: "msKhan", birthYear: 2001, siteName: "xyz.com" },
        { name: "msKhan", birthYear: 200, siteName: "p-hero" },
      ];
      let expectedOutput = [
        "P-hero.com#msKhan@2001",
        "Something.com#msKhan@2001",
        "Xyz.com#msKhan@2001",
        "Random Text",
      ];
      let [out1, out2, out3, out4] = sampleInput.map((singleIn, index) => {
        let evalOut = password(singleIn);
        if (evalOut === expectedOutput[index]) {
          return true;
        } else if (
          //validation part
          index === 3 &&
          typeof evalOut === "string" &&
          evalOut.length > 4
        ) {
          passwordFeedback = {
            ...passwordFeedback,
            marks: (passwordFeedback.marks || 0) + 2, // +2
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
        passwordFeedback = {
          ...passwordFeedback,
          marks: (passwordFeedback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out4
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! password function working fine. Great job!",
        };
      } else {
        passwordFeedback = {
          ...passwordFeedback,
          isSuccess: null,
          marks: passwordFeedback.marks > 0 ? passwordFeedback.marks + 3 : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: passwordFeedback.isBonus
            ? passwordFeedback.bonusMessage
            : "No marks for validation.", //"No marks for validation"
        };
      }
    } catch (err) {
      passwordFeedback = {
        ...passwordFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running password function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // -----------------------------passwordFeedback testing ends here
    //-------------------------- monthlySavingsFeedback testing starts here
    try {
      // test cases
      let sampleInput = [
        [[1000, 2000, 6000], 7800],
        [[1000, 2000, 2000], 4000],
        [[1000, 2000, 500], 4000],
        [[{}], "5000"],
      ];
      let expectedOutput = [0, 1000, `earn more/"earn more"`, "Random Text"];
      let [out1, out2, out3, out4] = sampleInput.map(
        ([singleIn1, singleIn2], index) => {
          let evalOut = monthlySavings(singleIn1, singleIn2);
          if (evalOut === expectedOutput[index]) {
            return true;
          } else if (
            //validation part
            index === 2 &&
            typeof evalOut === "string" &&
            (evalOut == "earn more" || evalOut == `"earn more"`)
          ) {
            return true;
          } else if (
            //validation part
            index === 3 &&
            typeof evalOut === "string" &&
            evalOut.length > 4 &&
            evalOut != "earn more" &&
            evalOut != `"earn more"`
          ) {
            monthlySavingsFeedback = {
              ...monthlySavingsFeedback,
              marks: (monthlySavingsFeedback.marks || 0) + 2, // +2
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
        monthlySavingsFeedback = {
          ...monthlySavingsFeedback,
          marks: (monthlySavingsFeedback.marks || 0) + 10,
          isSuccess: true,
          isFunctionAvailable: true,
          gotFunction: true,
          message: !out4
            ? "😞 Good job! But need improvement!"
            : "🏆 Nice!!! monthlySavings function working fine. Great job!",
        };
      } else {
        monthlySavingsFeedback = {
          ...monthlySavingsFeedback,
          isSuccess: null,
          marks:
            monthlySavingsFeedback.marks > 0
              ? monthlySavingsFeedback.marks + 3
              : 3,
          isError: true,
          isFunctionAvailable: true,
          message:
            "❌ Wrong output! But You got some partial marks. Need improvement.",
          bonusMessage: monthlySavingsFeedback.isBonus
            ? monthlySavingsFeedback.bonusMessage
            : "No marks for validation.", //"No marks for validation"
        };
      }
    } catch (err) {
      monthlySavingsFeedback = {
        ...monthlySavingsFeedback,
        marks: 0,
        isFunctionAvailable: null,
        isSuccess: null,
        isError: true,
        message:
          err.name === "ReferenceError"
            ? `❌ Error occurred while running monthlySavings function. The error was: "${err.message}"`
            : err.message,
      };
    }
    // -----------------------------monthlySavingsFeedback testing ends here
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
    calculateMoneyFeedback = feedbackSample;
    checkNameFeeback = feedbackSample;
    deleteInvalidsFeedback = feedbackSample;
    passwordFeedback = feedbackSample;
    monthlySavingsFeedback = feedbackSample;
  }
};
