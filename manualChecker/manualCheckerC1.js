// ---------------------paste code in submission.js------------------------------
const fs = require("fs");

const studentSubmisson = fs.readFileSync("submission.js", "utf8");
eval(studentSubmisson);
// ---------------------paste code in submission.js------------------------------


console.log("-------------------------------------------");
try {
  console.log(
    "cashOut ",
    cashOut(2000),
    "|",
    cashOut(100),
    "|",
    cashOut(500),
    "|",
    cashOut("meau")
  );
  console.log("Solution 35 | 1.75 | 8.75 | Invalid");
} catch (error) {
  console.log("error in cashOut");
}
console.log("-------------------------------------------");
try {
  console.log(
    "validEmail ",
    validEmail("ferdous@gmail.com"),
    "|",
    validEmail("1zihad@gmail.com"),
    "|",
    validEmail("chat420@gpt.net"),
    "|",
    validEmail(["jhankar@hero.com"])
  );
  console.log("Solution    true | true | false | Invalid");
} catch (error) {
  console.log("error in validEmail");
}
console.log("-------------------------------------------");
try {
  console.log(
    "electionResult ",
    electionResult(["mango", "banana", "mango", "banana", "mango"]),
    "|",
    electionResult(["mango", "banana", "jaker party", "no"]),
    "|",
    electionResult(["banana", "banana", "age e valo chilam", "no"]),
    "|",
    electionResult({})
  );
  console.log("Solution        Mango | Draw | Banana | Invalid");
} catch (error) {
  console.log("error in electionResult");
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
      { name: "hashem", roll: 1, bestFriend: 1 },
      { name: "kashem", roll: 1, bestFriend: 1 }
    ),
    "|",
    isBestFriend(
      { name: "hashem", roll: 21, bestFriend: 1 },
      { name: "kashem", roll: 1, bestFriend: 2 }
    ),
    "|",
    isBestFriend("hashem", { name: "kashem", roll: 2, bestFriend: 11 })
  );
  console.log("Solution      true | true | false | Invalid");
} catch (error) {
  console.log("error in isBestFriend");
}
console.log("-------------------------------------------");
try {
  console.log(
    "calculateWatchTime ",
    calculateWatchTime([100, 99, 119, 300]),
    "|",
    calculateWatchTime([100, 3800]),
    "|",
    calculateWatchTime([100, 3800, "90"])
  );
  console.log(
    "Solution            { hour: 0, minute: 10, second: 18 } | { hour: 1, minute: 5, second: 0 } | Invalid"
  );
} catch (error) {
  console.log("error in calculateWatchTime");
}
console.log("-------------------------------------------");
