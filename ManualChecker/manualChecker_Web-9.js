// ---------------------paste code below space------------------------------

//problem-1

function calculateTax(income, expenses) {
  if (income >= 0 && expenses >= 0 && income >= expenses) {
    const profit = income - expenses;
    const tax = profit * 0.2;
    return tax;
  } else {
    return "Invalid Input";
  }
}

function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  } else {
    const emailArr = email.split("@");
    const userName = emailArr[0];
    const domainName = emailArr[1];
    const notification = userName + " sent you an email from " + domainName;
    return notification;
  }
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  } else {
    for (const letter of name) {
      if (!isNaN(letter)) {
        return true;
      }
    }
    return false;
  }
}

function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  } else {
    const testScore = obj.testScore;
    const schoolGrade = obj.schoolGrade;
    const isFFamily = obj.isFFamily;
    let finalScore = 0;
    if (isFFamily === true) {
      finalScore = testScore + schoolGrade + 20;
      if (finalScore >= 80) {
        return true;
      }
      return false;
    }
    return false;
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) && typeof serialNumber === "number") {
    let totalTimes = 0;
    for (const time of waitingTimes) {
      totalTimes = totalTimes + time;
    }
    let averageTime = totalTimes / waitingTimes.length;
    averageTime = Math.round(averageTime);
    const remainingSerial = serialNumber - 1 - waitingTimes.length;
    const waitTime = remainingSerial * averageTime;
    return waitTime;
  } else {
    return "Invalid Input";
  }
}

// ---------------------paste code upper space------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
console.log("-------------------------------------------");
try {
  console.log(
    "calculateTax ",
    calculateTax(1000, 200),
    "|",
    calculateTax(2000, 400),
    "|",
    calculateTax(3000, 600),
    "|",
    calculateTax(-100, 100)
  );
  console.log("Solution      160 | 320 | 480 | Invalid Input");
} catch (error) {
  console.log("error in calculateTax");
}
console.log("-------------------------------------------");
try {
  console.log(
    "sendNotification ",
    sendNotification("mahmud12@gmail.com"),
    "|",
    sendNotification("arif.khan9@outlook.com"),
    "|",
    sendNotification("sadia8icloud.com")
  );
  console.log(
    "Solution          mahmud12 sent you an email from gmail.com | arif.khan9 sent you an email from outlook.com | Invalid Email"
  );
} catch (error) {
  console.log("error in sendNotification");
}
console.log("-------------------------------------------");
try {
  console.log(
    "checkDigitsInName ",
    checkDigitsInName("Hello1"),
    "|",
    checkDigitsInName("Hello"),
    "|",
    checkDigitsInName("1Hello"),
    "|",
    checkDigitsInName({})
  );
  console.log("Solution           true | false | true | Invalid Input");
} catch (error) {
  console.log("error in checkDigitsInName");
}
console.log("-------------------------------------------");
try {
  console.log(
    "calculateFinalScore ",
    calculateFinalScore({
      name: "Rajib",
      testScore: 40,
      schoolGrade: 20,
      isFFamily: true,
    }),
    "|",
    calculateFinalScore({
      name: "Rajib",
      testScore: 50,
      schoolGrade: 30,
      isFFamily: false,
    }),
    "|",
    calculateFinalScore({
      name: "Rajib",
      testScore: 35,
      schoolGrade: 20,
      isFFamily: false,
    }),
    "|",
    calculateFinalScore("sdfjsdklj")
  );
  console.log("Solution             true | true | false | Invalid Input");
} catch (error) {
  console.log("error in calculateFinalScore");
}
console.log("-------------------------------------------");
try {
  console.log(
    "waitingTime ",
    waitingTime([5, 5, 5, 5], 10),
    "|",
    waitingTime([1, 1, 1, 1, 1], 6),
    "|",
    waitingTime(123, "")
  );
  console.log("Solution     25 | 0 | Invalid Input");
} catch (error) {
  console.log("error in waitingTime");
}
console.log("-------------------------------------------");
