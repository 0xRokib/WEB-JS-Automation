// ---------------------paste code below space------------------------------

function calculateTax(income, expenses) {
  if (expenses > income) {
    return "Invalid Input";
  } else if (
    income < 0 ||
    expenses < 0 ||
    typeof income !== "number" ||
    typeof expenses !== "number"
  ) {
    return "Invalid Input";
  } else {
    const monthlyIncome = income - expenses;
    const tax = monthlyIncome * 0.2;
    return tax;
  }
}

function sendNotification(email) {
  const fullUser = email.split("@");
  if (fullUser.length !== 2) {
    return "Invalid Email";
  } else {
    const userName = fullUser[0];
    const DomainName = fullUser[1];
    const notificationMessage =
      userName + "sent you an email from" + DomainName;
    return notificationMessage;
  }
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (let i = 0; i < name.length; i++) {
    const char = name.charAt(i);
    if (char >= "0" && char <= "9") {
      return true;
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  const { name, testScore, schoolGrade, isFFamily } = obj;

  if (
    typeof obj !== "object" ||
    obj === null ||
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    typeof schoolGrade !== "number" ||
    typeof isFFamily !== "boolean" ||
    testScore < 0 ||
    testScore > 50 ||
    schoolGrade < 0 ||
    schoolGrade > 30
  ) {
    return "Invalid Input";
  }

  let finalScore = testScore + schoolGrade;
  if (isFFamily) {
    finalScore += 20;
  }
  return finalScore >= 80;
}

function waitingTime(waitingTimes, serialNumber) {
  if (
    serialNumber <= waitingTimes.length ||
    !Array.isArray(waitingTimes) ||
    typeof serialNumber !== "number"
  ) {
    return "Invalid Input";
  }

  let totalWaitingTime = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    totalWaitingTime += waitingTimes[i];
  }

  const totalMember = waitingTimes.length;
  const averageWaitingTime = totalWaitingTime / totalMember;
  const averageTime = Math.round(averageWaitingTime);
  const remainingMember = serialNumber - totalMember - 1;
  const remainingTime = remainingMember * averageTime;

  return remainingTime;
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
