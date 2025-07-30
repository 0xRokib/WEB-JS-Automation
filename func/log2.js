function generateLogs2(studentSubmisson) {
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
      "calculateVAT ",
      calculateVAT(1500),
      "|",
      calculateVAT(200),
      "|",
      calculateVAT(400),
      "|",
      calculateVAT("validation")
    );
    log("Solution      112.5 | 15 | 30 | Invalid");
  } catch (error) {
    log("error in calculateVAT:", error.message);
  }
  log("-------------------------------------------");
  try {
    log(
      "validContact ",
      validContact("01819234567"),
      "|",
      validContact("018192345679"),
      "|",
      validContact(["01987654321"])
    );
    log("Solution      true | false | Invalid");
  } catch (error) {
    log("error in validContact:", error.message);
  }
  log("-------------------------------------------");
  try {
    log(
      "willSuccess ",
      willSuccess([60, 70, 80, 40, 30]),
      "|",
      willSuccess([48, 48, 50, 50, 100]),
      "|",
      willSuccess([]),
      "|",
      willSuccess("Invalid")
    );
    log("Solution     true | true | false | Invalid");
  } catch (error) {
    log("error in willSuccess:", error.message);
  }
  log("-------------------------------------------");
  try {
    log(
      "validProposal ",
      validProposal(
        { name: "milon", gender: "male", age: 20 },
        { name: "sumi", gender: "female", age: 25 }
      ),
      "|",
      validProposal(
        { name: "shuvo", gender: "male", age: 20 },
        { name: "joy", gender: "male", age: 25 }
      ),
      "|",
      validProposal(
        { name: "toya", gender: "female", age: 24 },
        { name: "bjoy", gender: "male", age: 32 }
      ),
      "|",
      validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan")
    );
    log("Solution       true | false | false | Invalid");
  } catch (error) {
    log("error in validProposal:", error.message);
  }
  log("-------------------------------------------");
  try {
    log(
      "calculateSleepTime ",
      calculateSleepTime([1000, 499, 519, 300]),
      "|",
      calculateSleepTime([100, 3800]),
      "|",
      calculateSleepTime([100, 3800, "90"])
    );
    log(
      `Solution            {"hour":0,"minute":38,"second":38} | {"hour":1,"minute":5,"second":0} | Invalid`
    );
  } catch (error) {
    log("error in calculateSleepTime:", error.message);
  }
  log("-------------------------------------------");

  const logs = capturedLogs.map((cl) => cl.join(" ")).join("\n");

  return logs;
}
