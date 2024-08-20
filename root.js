document.addEventListener("keydown", async function (event) {
  // handle re-run the function keypress
  if (
    document.getElementById("functional-assignment") &&
    event.code === "Backslash"
  ) {
    return;
  }
  // run the function using proper keypress
  if (event.code === "Backslash") {
    calculateMoneyFeedback = { ...sampleNoBonus };
    checkNameFeeback = { ...sampleNoBonus };
    deleteInvalidsFeedback = { ...sampleNoBonus };
    passwordFeedback = { ...sampleNoBonus };
    monthlySavingsFeedback = { ...sampleNoBonus };

    // Call the evaluation function
    startSpyings();

    let ourMarks = [
      { name: "calculateMoney", ...calculateMoneyFeedback },
      { name: "checkName", ...checkNameFeeback },
      { name: "deleteInvalids", ...deleteInvalidsFeedback },
      { name: "password", ...passwordFeedback },
      { name: "monthlySavings", ...monthlySavingsFeedback },
    ];

    // student's submission get
    let rawSubmission = document.getElementsByClassName("col-12 col-md-11");
    let studentSubmisson = rawSubmission[9].innerText;

    //feedback generation funciton call
    generateFeedbacks();

    //UI for instructors
    let html = `<div id="functional-assignment">`;
    html += `
    <div class="bg-danger text-center py-2 rounded mb-2">
    <h4 class="m-0">Assignment 4 Result</h4>
    <p class="m-0">হুররে!!! জাভাস্ক্রিপ্টের সাথে স্টুডেন্টের ভালোবাসার ফলাফল নিচে চলে এসেছে । এখনোই নাম্বার দিয়ে ছোট করে সাবমিট বাটনে ক্লিক করে ফেলুন আর পাঠিয়ে দিন রেজাল্ট স্টুডেন্টের কাছে । কি আছে জীবনে !!!</p>
    </div>`;

    // UI for feedback
    for (let i = 0; i < ourMarks.length; i++) {
      html += `<div class="d-flex align-items-center border rounded my-2 p-2" style="font-size: 15px;">
   <div><strong>${
     i + 1 + ".&nbsp" + ourMarks[i].name
   }:</strong>&nbsp&nbsp<span>${
        ourMarks[i]?.message + " " + ourMarks[i].bonusMessage
      }</span>
      <div>
      <strong>Marks:</strong>&nbsp&nbsp<span>${
        ourMarks[i]?.gotBonus && ourMarks[i]?.gotFunction
          ? "10 for Function & 2 for Bonus"
          : !ourMarks[i]?.gotBonus && ourMarks[i]?.gotFunction
          ? "10 for Function  & 0 for Bonus"
          : ourMarks[i]?.gotBonus && !ourMarks[i]?.gotFunction
          ? "3 for Function (Partial Marks) & 2 for Bonus"
          : ourMarks[i]?.gotBonus &&
            ourMarks[i]?.isFunctionAvailable &&
            !ourMarks[i]?.gotFunction
          ? "3 for Function (Partial Marks) & 2 for bonus"
          : !ourMarks[i]?.gotBonus &&
            ourMarks[i]?.isFunctionAvailable &&
            !ourMarks[i]?.gotFunction
          ? "3 for Function (Partial Marks) and 0 for Bonus"
          : "0 for Function & 0 for Bonus"
      }</span>
      </div>
      ${
        ourMarks[i]?.isError && ourMarks[i]?.isFunctionAvailable
          ? `<div class="mt-3">
      <strong>Submited Function:</strong>&nbsp&nbsp<span class="text-danger">
      ${retriveFunction(studentSubmisson, ourMarks[i]?.name)}</span>
      </div>`
          : ""
      }
      </div>
   </div>`;
    }

    html += `
    <div style="font-size: 15px; margin: 10px 0;"><strong><i>Note:</i></strong>&nbsp&nbsp<span class="text-danger">কোন ফাংশন এ যদি ভুল আউটপুট আসে কিন্তু সেইটার কন্ডিশন গুলী যদি কাছাকাছি থাকে বা কিছুটা ঠিক মনে হয়, তাহলে ২ মার্ক্স বাড়িয়ে দিবেন ।</span></div>
    </div>`;

    const feedbackBox = document.getElementsByClassName(
      "feedback-box p-3 mx-4 box-shadow"
    )[0];
    feedbackBox.insertAdjacentHTML("afterbegin", html);
    // console.log(feedbackBox);
  } else if (event.code === "KeyR") {
    calculateMoneyFeedback = { ...sampleNoBonus };
    checkNameFeeback = { ...sampleNoBonus };
    deleteInvalidsFeedback = { ...sampleNoBonus };
    passwordFeedback = { ...sampleNoBonus };
    monthlySavingsFeedback = { ...sampleNoBonus };
    var elementToRemove = document.querySelector("#functional-assignment");
    var marSug = document.getElementById("markSuggestions");
    elementToRemove.remove();
    marSug.remove();
  }
});

// document.addEventListener("keydown", async function (event) {
//   // handle re-run the function keypress
//   if (
//     document.getElementById("functional-assignment") &&
//     event.code === "Backslash"
//   ) {
//     return;
//   }
//   // run the function using proper keypress
//   if (event.code === "Backslash") {
//     calculateMoneyFeedback = { ...sampleNoBonus };
//     checkNameFeeback = { ...sampleNoBonus };
//     deleteInvalidsFeedback = { ...sampleNoBonus };
//     passwordFeedback = { ...sampleNoBonus };
//     monthlySavingsFeedback = { ...sampleNoBonus };

//     // Call the evaluation function
//     startSpyings();

//     let ourMarks = [
//       { name: "calculateMoney", ...calculateMoneyFeedback },
//       { name: "checkName", ...checkNameFeeback },
//       { name: "deleteInvalids", ...deleteInvalidsFeedback },
//       { name: "password", ...passwordFeedback },
//       { name: "monthlySavings", ...monthlySavingsFeedback },
//     ];

//     // student's submission get
//     // let rawSubmission = document.getElementsByClassName("col-12 col-md-11");
//     // let studentSubmisson = rawSubmission[8].innerText;

//     let studentSubmisson = `function calculateMoney(ticketSale) {
//       if (ticketSale < 0) {
//         return "Invalid Number";
//       } else {
//         return ticketSale * 120 - (500 + 400);
//       }
//     }
//     // console.log(calculateMoney(1));
//     // console.log(calculateMoney(17));
//     // console.log(calculateMoney(39));
//     // console.log(calculateMoney(-99));

//     function checkName(name) {
//       if (typeof name !== "string") {
//         return "invalid";
//       }
//       var theLastChar = name[name.length - 1].toLowerCase();
//       if (
//         theLastChar === "a" ||
//         theLastChar === "e" ||
//         theLastChar === "i" ||
//         theLastChar === "o" ||
//         theLastChar === "u" ||
//         theLastChar === "y" ||
//         theLastChar === "w"
//       ) {
//         return "Good Name";
//       } else {
//         return "Bad Name";
//       }
//     }
//     // console.log(checkName1("Sadee"));
//     // console.log(checkName1("SadSS"));
//     // console.log(checkName1(10));
//     // console.log(checkName1(""));//won't work

//     // function checkName2(name) {
//     //   const goodChars = ["a", "e", "i", "o", "u", "w", "y"];

//     //   if (typeof name !== "string") {
//     //     return "invalid";
//     //   } else {
//     //     name = name.toLowerCase();
//     //     for (let char of goodChars) {
//     //       if (name.endsWith(char) == true) {
//     //         return "Good Name";
//     //       }
//     //     }
//     //     return "Bad Name";
//     //   }
//     // }
//     // console.log(checkName2("Gias"));
//     // console.log(checkName2("")); //working

//     function deleteInvalids(array) {
//       var newArray = [];
//       if (Array.isArray(array) === true) {
//         for (let element of array) {
//           if (typeof element === "number" && isNaN(element) == false) {
//             newArray.push(element);
//           }
//         }
//         return newArray;
//       } else {
//         return "Invalid Array";
//       }
//     }
//     // console.log(
//     //   deleteInvalids([1, 2, "1", "2"]),
//     //   deleteInvalids(["1", NaN, 3, undefined, null, 4]),
//     //   deleteInvalids([{ num: 2 }, [1, 2, "1"], 5, 6]),
//     //   deleteInvalids({ name: "x" }),
//     //   deleteInvalids("x"),
//     //   deleteInvalids(5),
//     //   deleteInvalids(true)
//     // );

//     // function deleteInvalids(array) {
//     //   if (Array.isArray(array) === true) {
//     //     for (let i = 0; i < array.length; ) {
//     //       console.log(typeof array[i]);
//     //       if (typeof array[i] !== "number") {
//     //         array.splice(i, 1);
//     //         continue;
//     //       }
//     //       if (isNaN(array[i]) == true) {
//     //         array.splice(i, 1);
//     //         continue;
//     //       }
//     //       i++;
//     //     }
//     //     return array;
//     //   } else {
//     //     return "Invalid Array";
//     //   }
//     // }

//     // console.log(
//     //   deleteInvalids([
//     //     1,
//     //     null,
//     //     undefined,
//     //     18,
//     //     -19,
//     //     NaN,
//     //     "12",
//     //     [1, 2],
//     //     { ob: "lala" },
//     //   ])
//     // );

//     function password(obj) {
//       if (!obj.siteName || !obj.birthYear || !obj.name) {
//         return "invalid";
//       }
//       if (obj.birthYear.toString().length != 4) {
//         return "invalid";
//       }

//       obj.siteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
//       return obj.siteName + "#" + obj.name + "@" + obj.birthYear;
//     }
//     // console.log(
//     //   password({ name: "msKhan", birthYear: 2001, siteName: "p-hero.com" }),
//     //   " ",
//     //   password({ name: "msKhan", birthYear: 2001, siteName: "something.com" }),
//     //   " ",
//     //   password({ name: "msKhan", birthYear: 2001, siteName: "xyz.com" }),
//     //   " ",
//     //   password({ name: "msKhan", birthYear: 200, siteName: "p-hero" }),
//     //   " ",
//     //   password({ name: "msKhan", birthYear: 2001 })
//     // );

//     function monthlySavings(arr, livingCost) {
//       let sum = 0;
//       if (Array.isArray(arr) == true && typeof livingCost == "number") {
//         for (let income of arr) {
//           if (income >= 3000) {
//             income = income * 0.8;
//           }
//           sum += income;
//         }
//         var savings = sum - livingCost;
//         if (savings >= 0) {
//           return savings;
//         } else {
//           return "earn more";
//         }
//       } else {
//         return "invalid input";
//       }
//     }

//     // console.log(monthlySavings([1000, 2000, 3000], 5400));
//     // console.log(monthlySavings([1000, 2000, 2500], 5000));
//     // console.log(monthlySavings([1000, 2000, 2500], 0));
//     // console.log(monthlySavings([{}], "5000"));
//     `;
//     //feedback generation funciton call
//     generateFeedbacks();

//     //UI for instructors
//     let html = `<div id="functional-assignment">`;
//     html += `
//     <div class="bg-danger text-center py-2 rounded mb-2">
//     <h4 class="m-0">Assignment 4 Result</h4>
//     <p class="m-0">হুররে!!! জাভাস্ক্রিপ্টের সাথে স্টুডেন্টের ভালোবাসার ফলাফল নিচে চলে এসেছে । এখনোই নাম্বার দিয়ে ছোট করে সাবমিট বাটনে ক্লিক করে ফেলুন আর পাঠিয়ে দিন রেজাল্ট স্টুডেন্টের কাছে । কি আছে জীবনে !!!</p>
//     </div>`;

//     // UI for feedback
//     for (let i = 0; i < ourMarks.length; i++) {
//       html += `<div class="d-flex align-items-center border rounded my-2 p-2" style="font-size: 15px;">
//    <div><strong>${
//      i + 1 + ".&nbsp" + ourMarks[i].name
//    }:</strong>&nbsp&nbsp<span>${
//         ourMarks[i]?.message + " " + ourMarks[i].bonusMessage
//       }</span>
//       <div>
//       <strong>Marks:</strong>&nbsp&nbsp<span>${
//         ourMarks[i]?.gotBonus && ourMarks[i]?.gotFunction
//           ? "10 for Function & 2 for Bonus"
//           : !ourMarks[i]?.gotBonus && ourMarks[i]?.gotFunction
//           ? "10 for Function & 1 Bonus for Commenting"
//           : ourMarks[i]?.gotBonus && !ourMarks[i]?.gotFunction
//           ? "0 for Function & 1 Bonus for Commenting"
//           : !ourMarks[i]?.gotBonus &&
//             ourMarks[i]?.isFunctionAvailable &&
//             !ourMarks[i]?.gotFunction
//           ? "3 for Function (Partial Marks) and 1 Bonus for Commenting"
//           : !ourMarks[i]?.gotBonus &&
//             ourMarks[i]?.isFunctionAvailable &&
//             !ourMarks[i]?.gotFunction
//           ? "3 for Function (Partial Marks) and 1 for Bonus"
//           : "0 for Function & 0 for Bonus"
//       }</span>
//       </div>
//       ${
//         ourMarks[i]?.isError && ourMarks[i]?.isFunctionAvailable
//           ? `<div class="mt-3">
//       <strong>Submited Function:</strong>&nbsp&nbsp<span class="text-danger">
//       ${retriveFunction(studentSubmisson, ourMarks[i]?.name)}</span>
//       </div>`
//           : ""
//       }
//       </div>
//    </div>`;
//     }

//     html += `
//     <div style="font-size: 15px; margin: 10px 0;"><strong><i>Note:</i></strong>&nbsp&nbsp<span class="text-danger">কোন ফাংশন এ যদি ভুল আউটপুট আসে কিন্তু সেইটার কন্ডিশন গুলী যদি কাছাকাছি থাকে বা কিছুটা ঠিক মনে হয়, তাহলে ২ মার্ক্স বাড়িয়ে দিবেন ।</span></div>
//     </div>`;

//     const feedbackBox = document.getElementsByClassName(
//       "feedback-box p-3 mx-4 box-shadow"
//     )[0];
//     feedbackBox.insertAdjacentHTML("afterbegin", html);
//     // console.log(feedbackBox);
//   } else if (event.code === "KeyR") {
//     calculateMoneyFeedback = { ...sampleNoBonus };
//     checkNameFeeback = { ...sampleNoBonus };
//     deleteInvalidsFeedback = { ...sampleNoBonus };
//     passwordFeedback = { ...sampleNoBonus };
//     monthlySavingsFeedback = { ...sampleNoBonus };
//     var elementToRemove = document.querySelector("#functional-assignment");
//     var marSug = document.getElementById("markSuggestions");
//     elementToRemove.remove();
//     marSug.remove();
//   }
// });
