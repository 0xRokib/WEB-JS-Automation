function retriveFunction(code, fnName) {
  const positions = [
    "MindGame",
    "EvenOdd",
    "IsLGSeven",
    "FindingBadData",
    "GemsToDiamond",
  ];

  let i = 4;
  const input = [
    "mindGame",
    "evenOdd",
    "isLGSeven",
    "findingBadData",
    "gemsToDiamond",
  ];
  const j = [];
  while (i >= 0) {
    let startIndex = code.indexOf(input[i]);
    let endIndex = code.lastIndexOf("}") + 1;
    let func2 = code.substring(startIndex, endIndex);
    // console.log(func2)
    // j.push("function " + func2);
    j[i] = "function " + func2;
    const x = code.replace(func2, "");
    code = x;
    i--;
  }

  let index = positions.indexOf(fnName);
  console.log("from retreive", j[index]);
  return j[index];
}
