// ---------------------paste code below space------------------------------
function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  } else {
    return ticketSale * 120 - (500 + 400);
  }
}

function checkName(name) {
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
  return obj.siteName + "-" + obj.name + "@" + obj.birthYear;
}

function monthlySaving(arr, livingCost) {
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

// ---------------------paste code upper space------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
try {
  console.log(
    "calculateMoney ",
    calculateMoney(1), // -780
    calculateMoney(17), // 1140
    calculateMoney(39) // 3780
    // calculateMoney(-99) // "Random Text"
  );
  // console.log("Solution  -780 1140 3780 Invalid Number");
  console.log("Solution  -780 1140 3780");
} catch (error) {
  console.log("error in calculateMoney");
}
console.log("-------------------------------------------");
try {
  console.log(
    "checkName ",
    checkName("Sadee"), // "Good Name"
    checkName("SadSS") // "Bad Name"
    // checkName(10) // "Random Text"
  );
  // console.log("Solution  Good Name Bad Name invalid");
  console.log("Solution  Good Name Bad Name");
} catch (error) {
  console.log("error in checkName");
}
console.log("-------------------------------------------");
try {
  console.log(
    "deleteInvalids ",
    deleteInvalids([1, 2, "1", "2"]), // [1, 2]
    deleteInvalids(["1", NaN, 3, undefined, null, 4]), // [3, 4]
    deleteInvalids([{ num: 2 }, [1, 2, "1"], 5, 6]) // [5, 6]
    // deleteInvalids({ name: "x" }) // "Random Text"
  );
  console.log("Solution  [ 1, 2 ] [ 3, 4 ] [ 5, 6 ]");
  // console.log("Solution  [ 1, 2 ] [ 3, 4 ] [ 5, 6 ] Invalid Array");
} catch (error) {
  console.log("error in deleteInvalids");
}
console.log("-------------------------------------------");
try {
  console.log(
    "password ",
    password({ name: "msKhan", birthYear: 2001, siteName: "p-hero.com" }), // "P-hero.com#msKhan@2001"
    password({ name: "msKhan", birthYear: 2001, siteName: "something.com" }), // "Something.com#msKhan@2001"
    password({ name: "msKhan", birthYear: 2001, siteName: "xyz.com" }) // "Xyz.com#msKhan@2001"
    // password({ name: "msKhan", birthYear: 200, siteName: "p-hero" }) // "Random Text"
  );
  console.log(
    "Solution  P-hero.com#msKhan@2001 Something.com#msKhan@2001 Xyz.com#msKhan@2001"
    // "Solution  P-hero.com#msKhan@2001 Something.com#msKhan@2001 Xyz.com#msKhan@2001 invalid"
  );
} catch (error) {
  console.log("error in password");
}
console.log("-------------------------------------------");
try {
  console.log(
    "monthlySavings ",
    monthlySavings([1000, 2000, 6000], 7800), // 0
    monthlySavings([1000, 2000, 2000], 4000), // 1000
    monthlySavings([1000, 2000, 500], 4000) // 3500
    // monthlySavings([{}], "5000") // "Random Text"
  );
  // console.log("Solution  0 1000 3500 invalid input");
  console.log("Solution  0 1000 3500");
} catch (error) {
  console.log("error in monthlySavings");
}
