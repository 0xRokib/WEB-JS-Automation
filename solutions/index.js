//One------------------------------------------------------------
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
// console.log(calculateTax(9000, 2500));
// console.log(calculateTax(0, 0));
// console.log(calculateTax(0, 0));
// console.log(calculateTax(-1000, 1000));

//Two------------------------------------------------------------
function sendNotification(email) {
  if (!email.includes("@")) return "Invalid Email";

  const splittedEmail = email.split("@");
  const userName = splittedEmail[0];
  const domain = splittedEmail[1];
  const newString = `${userName} send you a message from ${domain}`;
  return newString;
}

// console.log(sendNotification("zihad@gmail.com")); //zihad send you a message from gmail.com
// console.log(sendNotification("shabaj@gmail.com")); //shabaj send you a message from gmail.com
// console.log(sendNotification("zihadgmail.com")); //random string

//Three------------------------------------------------------------
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

// console.log(checkDigitsInName("Hello1")); // true
// console.log(checkDigitsInName("Hello")); // false
// console.log(checkDigitsInName("1Hello")); // true
// console.log(checkDigitsInName({})); //random string

//Four------------------------------------------------------------
function calculateFinalScore(input) {
  if (typeof input !== "object" || input === null) {
    return "Invalid Input";
  }

  const { name, testScore, schoolGrade, isFFFamily } = input;

  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    typeof schoolGrade !== "number" ||
    typeof isFFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

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

// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFFamily: true,
//   })
// ); // Admitted
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFFamily: false,
//   })
// ); // Not Admitted
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 15,
//     schoolGrade: 25,
//     isFFFamily: true,
//   })
// ); // Not Admitted
// console.log(calculateFinalScore("hello")); // Invalid Input

//Five------------------------------------------------------------

function waitingTime(array, serial) {
  if (!Array.isArray(array) || typeof serial != "number") {
    return "Invalid";
  }
  const done = array.length;
  const averageTime = Math.round(array.reduce((a, b) => a + b, 0) / done);
  const remainingPerson = serial - 1 - done;
  let reamining_time = 0;
  if (remainingPerson > 0) {
    reamining_time = remainingPerson * averageTime;
  }
  return reamining_time;
}
// console.log(waitingTime([3, 5, 7, 21, 6], 10));
// console.log(waitingTime([13, 2, 10, 7, 10, 20, 2], 6));
// console.log(waitingTime("", "9999"));
// console.log(waitingTime(7, 101111));
// console.log(waitingTime([6], 12));
// console.log(waitingTime([13, 2], 9));
// console.log(waitingTime([7, 8, 3333, 4, 5], "9"));
