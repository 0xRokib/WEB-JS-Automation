function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  } else {
    return ticketSale * 120 - (500 + 400);
  }
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  var theLastChar = name[name.length - 1].toLowerCase();
  if (
    theLastChar === "a" ||
    theLastChar === "e" ||
    theLastChar === "i" ||
    theLastChar === "o" ||
    theLastChar === "u" ||
    theLastChar === "y" ||
    theLastChar === "w"
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

function deleteInvalids(array) {
  var newArray = [];
  if (Array.isArray(array) === true) {
    for (let element of array) {
      if (typeof element === "number" && isNaN(element) == false) {
        newArray.push(element);
      }
    }
    return newArray;
  } else {
    return "Invalid Array";
  }
}

function password(obj) {
  if (!obj.siteName || !obj.birthYear || !obj.name) {
    return "invalid";
  }
  if (obj.birthYear.toString().length != 4) {
    return "invalid";
  }

  obj.siteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  return obj.siteName + "#" + obj.name + "@" + obj.birthYear;
}

function monthlySavings(arr, livingCost) {
  let sum = 0;
  if (Array.isArray(arr) == true && typeof livingCost == "number") {
    for (let income of arr) {
      if (income >= 3000) {
        income = income * 0.8;
      }
      sum += income;
    }
    var savings = sum - livingCost;
    if (savings >= 0) {
      return savings;
    } else {
      return "earn more";
    }
  } else {
    return "invalid input";
  }
}

// ---------------------------------------------------
console.log(
  "calculateMoney ",
  calculateMoney(1), // -780
  calculateMoney(17), // 1140
  calculateMoney(39), // 3780
  calculateMoney(-99) // "Random Text"
);

console.log(
  "checkName ",
  checkName("Sadee"), // "Good Name"
  checkName("SadSS"), // "Bad Name"
  checkName(10) // "Random Text"
);

console.log(
  "deleteInvalids ",
  deleteInvalids([1, 2, "1", "2"]), // [1, 2]
  deleteInvalids(["1", NaN, 3, undefined, null, 4]), // [3, 4]
  deleteInvalids([{ num: 2 }, [1, 2, "1"], 5, 6]), // [5, 6]
  deleteInvalids({ name: "x" }) // "Random Text"
);

console.log(
  "password ",
  password({ name: "msKhan", birthYear: 2001, siteName: "p-hero.com" }), // "P-hero.com#msKhan@2001"
  password({ name: "msKhan", birthYear: 2001, siteName: "something.com" }), // "Something.com#msKhan@2001"
  password({ name: "msKhan", birthYear: 2001, siteName: "xyz.com" }), // "Xyz.com#msKhan@2001"
  password({ name: "msKhan", birthYear: 200, siteName: "p-hero" }) // "Random Text"
);

console.log(
  "monthlySavings",
  monthlySavings([1000, 2000, 6000], 7800), // 0
  monthlySavings([1000, 2000, 2000], 4000), // 1000
  monthlySavings([1000, 2000, 500], 4000), // 3500
  monthlySavings([{}], "5000") // "Random Text"
);
