function generateLogs1(studentSubmisson) {
  const script = document.createElement('script');
  script.textContent = studentSubmisson;
  document.head.appendChild(script);

  const capturedLogs = [];
  const log = function (...args) {
    // Store the log (arguments as an array)
    capturedLogs.push(
      args.map((arg) => {
        if (typeof arg === "object") {
          return JSON.stringify(arg);
        } else {
          return arg ?? "undefined";
        }
      })
    );
  };
  log("-------------------------------------------");
  try {
    log(
      "cashOut ",
      cashOut(2000),
      "|",
      cashOut(100),
      "|",
      cashOut(0),
      "|",
      cashOut("validation")
    );
    log("Solution 35 | 1.75 | 0 | Invalid");
  } catch (error) {
    log("error in cashOut:", error.message);
  }
  log("-------------------------------------------");
  try {
    log(
      "validEmail ",
      validEmail("mahmud12@gmail.com"),
      "|",
      validEmail("-king@yahoo.com"),
      "|",
      validEmail(["jhankar@hero.coom"])
    );
    log("Solution    true | false | Invalid");
  } catch (error) {
    log("error in validEmail:", error.message);
  }
  log("-------------------------------------------");
  try {
    log(
      "electionResult ",
      electionResult(["banana", "banana", "age e valo chilam", "no"]),
      "|",
      electionResult(["mango", "banana", "mango", "banana", "mango"]),
      "|",
      electionResult(["mango", "banana", "jaker party", "nope"]),
      "|",
      electionResult("Invalid")
    );
    log("Solution        Banana | Mango | Draw | Invalid");
  } catch (error) {
    log("error in electionResult:", error.message);
  }
  log("-------------------------------------------");
  try {
    log(
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
    log("Solution      true | false | false | Invalid");
  } catch (error) {
    log("error in isBestFriend:", error.message);
  }
  log("-------------------------------------------");
  try {
    log(
      "calculateWatchTime ",
      calculateWatchTime([100, 99, 119, 300]),
      "|",
      calculateWatchTime([]),
      "|",
      calculateWatchTime([100, 3800, "90"])
    );
    log(
      `Solution            {"hour":0,"minute":10,"second":18} | {"hour":0,"minute":0,"second":0} | Invalid`
    );
  } catch (error) {
    log("error in calculateWatchTime:", error.message);
  }
  log("-------------------------------------------");

  const logs = capturedLogs.map((cl) => cl.join(" ")).join("\n");

  return logs;
}
