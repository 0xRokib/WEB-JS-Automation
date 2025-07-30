// ---------------------paste code in submission.js------------------------------
const fs = require("fs");

const studentSubmisson = fs.readFileSync("submission.js", "utf8");
eval(studentSubmisson);
// ---------------------paste code in submission.js------------------------------


console.log("-------------------------------------------");
try {
  console.log(
    "calculateVAT ",
    calculateVAT(1500),
    "|",
    calculateVAT(200),
    "|",
    calculateVAT(3000),
    "|",
    calculateVAT(-100)
  );
  console.log("Solution      112.5 | 15 | 225 | Invalid");
} catch (error) {
  console.log("error in calculateVAT");
}
console.log("-------------------------------------------");
try {
  console.log(
    "validContact ",
    validContact("01819234567"),
    "|",
    validContact("018192345679"),
    "|",
    validContact(true)
  );
  console.log("Solution      true | false | Invalid");
} catch (error) {
  console.log("error in validContact");
}
console.log("-------------------------------------------");
try {
  console.log(
    "willSuccess ",
    willSuccess([60, 70, 80, 40, 30]),
    "|",
    willSuccess([]),
    "|",
    willSuccess([90, 99, 87, 48, 34, 49]),
    "|",
    willSuccess("100 , 100")
  );
  console.log("Solution     true | false | false | Invalid");
} catch (error) {
  console.log("error in willSuccess");
}
console.log("-------------------------------------------");
try {
  console.log(
    "validProposal ",
    validProposal(
      { name: "Rahul", gender: "male", age: 28 },
      { name: "Joya", gender: "female", age: 21 }
    ),
    "|",
    validProposal(
      { name: "toya", gender: "female", age: 20 },
      { name: "kader", gender: "male", age: 25 }
    ),
    "|",
    validProposal(
      { name: "toya", gender: "female", age: 24 },
      { name: "bjoy", gender: "male", age: 32 }
    ),
    "|",
    validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan")
  );
  console.log("Solution       true | true | false | Invalid");
} catch (error) {
  console.log("error in validProposal");
}
console.log("-------------------------------------------");
try {
  console.log(
    "calculateSleepTime ",
    calculateSleepTime([1000, 2000, 725]),
    "|",
    calculateSleepTime([5600]),
    "|",
    calculateSleepTime([100, 3800, "90"])
  );
  console.log(
    "Solution            { hour: 1, minute: 2, second: 5 } | { hour: 1, minute: 33, second: 20 } | Invalid"
  );
} catch (error) {
  console.log("error in calculateSleepTime");
}
console.log("-------------------------------------------");
