# PHero JS Assignment Automation & Manual Checker

This project is a powerful Chrome extension designed to streamline the process of evaluating JavaScript assignments for Programming Hero's Web Development course. It offers two main functionalities:

1.  **Automated Checker**: An extension that integrates directly with the Programming Hero website to automate the grading process for assignment submissions.
2.  **Manual Checker**: A beautiful, modern, and feature-rich standalone UI for local testing and development, allowing students and developers to test their code before submission.

---

## 🌟 Features

### **Automated Checker (Chrome Extension)**

- **Seamless Integration**: Works directly on the Programming Hero assignment submission page.
- **Keyboard Shortcuts**: Activate the automated checker with a simple backslash (`\`) keypress.
- **Automated Grading**: Automatically runs a suite of test cases against the student's submitted code.
- **Dynamic Feedback**: Provides detailed, dynamic feedback for each function, just like the official grading system.
- **Bonus Point Calculation**: Automatically calculates and awards bonus points for proper validation and error handling.
- **Randomized Examiner Feedback**: Generates random, motivational feedback based on the final score.

### **Manual Checker (Local Testing Environment)**

- **Modern UI**: A beautiful, light-themed UI with a soft green glow and professional design.
- **Flexible Marking System**: Choose between grading out of 60, 50, or 30 marks, with automatic score conversion.
- **Dual Feedback System**:
  - **Dynamic Function Feedback**: Get real-time feedback on your code, with emojis and messages that match the main automation system.
  - **Randomized Examiner Feedback**: Receive a motivational message from a virtual examiner based on your score.
- **Category Validation**: Intelligently detects if you've selected the wrong assignment category and provides a helpful warning.
- **Individual & Full Feedback Copy**:
  - Copy the entire feedback report with a single click.
  - Copy feedback for individual functions with dedicated copy icons.
- **Responsive Design**: Works perfectly on all screen sizes, from mobile to desktop.
- **Sandboxed & Secure**: Executes user code in a sandboxed environment to prevent security risks.

---

## 🚀 Getting Started

### **Installation**

1.  **Download the project**: Clone or download the project files to your local machine.
2.  **Open Chrome Extensions**: Open Google Chrome and navigate to `chrome://extensions`.
3.  **Enable Developer Mode**: In the top right corner, toggle on "Developer mode".
4.  **Load Unpacked**: Click on the "Load unpacked" button and select the project folder that you downloaded.
5.  **Done!**: The extension is now installed and ready to use.

### **How to Use**

#### **Automated Checker**

1.  Navigate to any assignment submission page on the Programming Hero website.
2.  Press the backslash (`\`) key on your keyboard to activate the automated checker.
3.  The feedback will be automatically generated and populated in the feedback text area.
4.  To remove the generated feedback, press the `r` key on your keyboard.

#### **Manual Checker**

1.  Click on the extension icon in your Chrome toolbar to open the popup.
2.  Click on the "🚀 Start Manual Checker" link to open the manual checker in a new tab.
3.  **Select Category**: Choose the correct assignment category from the dropdown menu.
4.  **Paste Your Code**: Paste your JavaScript code into the input text area.
5.  **Run Tests**: Click the "Run Tests" button to execute the test suite.
6.  **View Feedback**: The results will be displayed in the feedback panel on the right, with detailed information about each function, your score, and examiner feedback.
7.  **Copy Feedback**: Use the copy buttons to copy the full feedback or individual function feedback to your clipboard.

---

## 👨‍💻 For Developers

### **Project Structure**

```
WEB11-A4-Automation/
├── assets/                     # Icons and other assets
├── func/                       # Core functionality for the automated checker
│   ├── feedback.js
│   ├── log1.js
│   └── log2.js
├── manualChecker/              # Older versions of manual checker files
├── popup/                      # Files for the extension popup
├── core.js                     # Main script for the automated checker
├── manifest.json               # Chrome extension manifest file
├── manual-checker.html         # The standalone manual checker UI
├── manual-checker.js           # JavaScript for the manual checker UI
├── root.js                     # Root script for the extension
├── sandbox.html                # Sandboxed environment for code execution
└── style.css                   # General styles
```

### **Key Files**

- **`manifest.json`**: The entry point for the Chrome extension, which defines the permissions, content scripts, and other settings.
- **`root.js`**: This is the root script for the extension and handles the keyboard shortcuts for activating and deactivating the automated checker.
- **`core.js`**: This file contains the main logic for the automated checker, including the test cases, feedback generation, and DOM manipulation.
- **`popup/popup.html` and `popup/main.js`**: These files control the extension popup that you see when you click the extension icon.
- **`manual-checker.html`**: This file contains the HTML structure and CSS for the manual checker UI. All styling is done within a `<style>` tag in the head.
- **`manual-checker.js`**: This file contains all the client-side JavaScript for the manual checker, including event listeners, UI updates, and the logic for the marking system and category validation.
- **`sandbox.html`**: This is where the user's code is safely executed in an iframe. It communicates with `manual-checker.js` via `postMessage` to send back the test results.

### **Development Setup**

1.  Follow the installation steps to load the extension in developer mode.
2.  To make changes to the automated checker, edit the relevant files (`core.js`, `root.js`, etc.) and then reload the extension from the `chrome://extensions` page.
3.  For the manual checker, you can simply open `manual-checker.html` in your browser and refresh the page to see your changes.

---

## 🛠️ Modifying for Future Assignments

This project is designed to be extensible for future assignments. Here’s a detailed guide on how to adapt it for a new assignment (e.g., Assignment 5).

### **Step 1: Update the Manual Checker (`manual-checker.js`)**

1.  **Add a New Category to `testCases`**: In the `testCases` object, add a new key for the new assignment (e.g., `Assignment_05_Category_001`).

    ```javascript
    const testCases = {
      // ... existing categories
      Assignment_05_Category_001: {
        newFunction1: [
          { input: [1, 2], expected: 3 },
          { input: [-1, -1], expected: -2 },
        ],
        newFunction2: [
          { input: ["hello"], expected: "world" },
          { input: ["test"], expected: "validation", validation: true },
        ],
      },
    };
    ```

2.  **Update Category Validation**: In the `validateCategory` function, add the new function names to a new array (e.g., `category3Functions`) and add a new validation block.

    ```javascript
    function validateCategory(code, selectedCategory) {
      // ... existing code
      const category3Functions = ["newFunction1", "newFunction2"];
      const category3Count = detectedFunctions.filter((func) =>
        category3Functions.includes(func)
      ).length;

      if (
        selectedCategory === "Assignment_04_Category_001" &&
        (category2Count > category1Count || category3Count > category1Count)
      ) {
        // ... existing code
      }

      // Add new validation logic for the new category
      if (
        selectedCategory === "Assignment_05_Category_001" &&
        (category1Count > category3Count || category2Count > category3Count)
      ) {
        // ... return error message
      }
    }
    ```

3.  **Update Category Dropdown in `manual-checker.html`**: Add a new `<option>` to the category dropdown.

    ```html
    <select id="category">
      <!-- ... existing options -->
      <option value="Assignment_05_Category_001">
        Assignment 5 - Category 1
      </option>
    </select>
    ```

### **Step 2: Update the Automated Checker (`core.js`)**

This is the most complex part, as it involves updating the core logic of the automated checker.

1.  **Add New Feedback Objects**: At the top of `core.js`, create new feedback objects for the new functions (e.g., `newFunction1Feedback`, `newFunction2Feedback`).

    ```javascript
    let newFunction1Feedback = { ...sampleNoBonus };
    let newFunction2Feedback = { ...sampleNoBonus };
    ```

2.  **Add New Test Cases**: In the `startSpyings` function, you will need to add a new `if` block for the new assignment category.

    ```javascript
    if (cat === "Assignment_05_Category_001") {
      //  1 -------------------------- newFunction1Feedback testing starts here
      try {
        // ... test cases for newFunction1
      } catch (err) {
        // ... error handling
      }

      //  2 -------------------------- newFunction2Feedback testing starts here
      try {
        // ... test cases for newFunction2
      } catch (err) {
        // ... error handling
      }
    }
    ```

3.  **Update `generateFeedbacks()` in `func/feedback.js`**: Add the new assignment category and feedback objects to this function.

    ```javascript
    function generateFeedbacks() {
        // ... existing code
        } else if (cat === "Assignment_05_Category_001") {
            ourMarks = [
                { name: "newFunction1", ...newFunction1Feedback },
                { name: "newFunction2", ...newFunction2Feedback },
            ];
        }
        // ... existing code
    }
    ```

### **Step 3: Update the Root Script (`root.js`)**

In `root.js`, you need to initialize the new feedback objects when the automated checker is activated.

```javascript
if (event.code === "Backslash") {
  // ... existing feedback object initializations
  newFunction1Feedback = { ...sampleNoBonus };
  newFunction2Feedback = { ...sampleNoBonus };
  // ... rest of the code
}
```

By following these steps, you can successfully adapt the project for any future JavaScript assignments, ensuring both the manual and automated checkers work correctly.

---
