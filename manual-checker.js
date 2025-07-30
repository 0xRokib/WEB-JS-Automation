document.addEventListener('DOMContentLoaded', () => {
    const testButton = document.getElementById('testButton');
    const codeInput = document.getElementById('codeInput');
    const resultsContainer = document.getElementById('resultsContainer');
    const categorySelector = document.getElementById('category');
    const clearButton = document.getElementById('clearButton');
    const totalScoreContainer = document.getElementById('totalScore');
    const scoreValue = document.getElementById('scoreValue');
    const markingSystem = document.getElementById('markingSystem');

    // Test cases for each category
    const testCases = {
        Assignment_04_Category_001: {
            cashOut: [
                { input: [2000], expected: 35 },
                { input: [100], expected: 1.75 },
                { input: [0], expected: 0 },
                { input: ['validation'], expected: 'Invalid', validation: true }
            ],
            validEmail: [
                { input: ['mahmud12@gmail.com'], expected: true },
                { input: ['-king@yahoo.com'], expected: false },
                { input: [['jhankar@hero.coom']], expected: 'Invalid', validation: true }
            ],
            electionResult: [
                { input: [[ 'banana', 'banana', 'age e valo chilam', 'no' ]], expected: 'Banana' },
                { input: [[ 'mango', 'banana', 'mango', 'banana', 'mango' ]], expected: 'Mango' },
                { input: [[ 'mango', 'banana', 'jaker party', 'nope' ]], expected: 'Draw' },
                { input: ['Invalid'], expected: 'Invalid', validation: true }
            ],
            isBestFriend: [
                { input: [{ name: 'hashem', roll: 1, bestFriend: 2 }, { name: 'kashem', roll: 2, bestFriend: 1 }], expected: true },
                { input: [{ name: 'hashem', roll: 21, bestFriend: 1 }, { name: 'kashem', roll: 1, bestFriend: 2 }], expected: false },
                { input: [{ name: 'hashem', roll: 21, bestFriend: 11 }, { name: 'kashem', roll: 1, bestFriend: 21 }], expected: false },
                { input: [{ name: 'kashem', roll: 2, bestFriend: 11 }, 'Kashem er Kono Bondhu Nai'], expected: 'Invalid', validation: true }
            ],
            calculateWatchTime: [
                { input: [[100, 99, 119, 300]], expected: { hour: 0, minute: 10, second: 18 } },
                { input: [[]], expected: { hour: 0, minute: 0, second: 0 } },
                { input: [[100, 3800, '90']], expected: 'Invalid', validation: true }
            ]
        },
        Assignment_04_Category_002: {
            calculateVAT: [
                { input: [1500], expected: 112.5 },
                { input: [200], expected: 15 },
                { input: [400], expected: 30 },
                { input: ['validation'], expected: 'Invalid', validation: true }
            ],
            validContact: [
                { input: ['01819234567'], expected: true },
                { input: ['018192345679'], expected: false },
                { input: [['01987654321']], expected: 'Invalid', validation: true }
            ],
            willSuccess: [
                { input: [[60, 70, 80, 40, 30]], expected: true },
                { input: [[48, 48, 50, 50, 100]], expected: true },
                { input: [[]], expected: false },
                { input: ['Invalid'], expected: 'Invalid', validation: true }
            ],
            validProposal: [
                { input: [{ name: 'milon', gender: 'male', age: 20 }, { name: 'sumi', gender: 'female', age: 25 }], expected: true },
                { input: [{ name: 'shuvo', gender: 'male', age: 20 }, { name: 'joy', gender: 'male', age: 25 }], expected: false },
                { input: [{ name: 'toya', gender: 'female', age: 24 }, { name: 'bjoy', gender: 'male', age: 32 }], expected: false },
                { input: [{ name: 'mitu', gender: 'male', age: 32 }, 'Mizan'], expected: 'Invalid', validation: true }
            ],
            calculateSleepTime: [
                { input: [[1000, 499, 519, 300]], expected: { hour: 0, minute: 38, second: 38 } },
                { input: [[100, 3800]], expected: { hour: 1, minute: 5, second: 0 } },
                { input: [[100, 3800, '90']], expected: 'Invalid', validation: true }
            ]
        }
    };

    // Safe code execution using sandboxed iframe
    function executeCodeSafely(studentCode, tests) {
        return new Promise((resolve, reject) => {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = chrome.runtime.getURL('sandbox.html');
            
            // Set up message listener
            const messageHandler = (event) => {
                if (event.data.type === 'execution_result') {
                    window.removeEventListener('message', messageHandler);
                    document.body.removeChild(iframe);
                    resolve(event.data.results);
                } else if (event.data.type === 'execution_error') {
                    window.removeEventListener('message', messageHandler);
                    document.body.removeChild(iframe);
                    reject(new Error(event.data.error));
                }
            };
            
            window.addEventListener('message', messageHandler);
            
            // Wait for iframe to load, then send the code and tests
            iframe.onload = () => {
                iframe.contentWindow.postMessage({ type: 'execute_code', code: studentCode, tests: tests }, '*');
            };
            
            document.body.appendChild(iframe);
            
            // Timeout after 5 seconds
            setTimeout(() => {
                window.removeEventListener('message', messageHandler);
                if (document.body.contains(iframe)) {
                    document.body.removeChild(iframe);
                }
                reject(new Error('Code execution timeout'));
            }, 5000);
        });
    }

    // Function to detect function names in code
    function detectFunctionNames(code) {
        const functionMatches = [...code.matchAll(/function\s+(\w+)\s*\(/g)];
        return functionMatches.map(match => match[1]);
    }

    // Function to validate category selection
    function validateCategory(code, selectedCategory) {
        const detectedFunctions = detectFunctionNames(code);
        const category1Functions = ['cashOut', 'validEmail', 'electionResult', 'isBestFriend', 'calculateWatchTime'];
        const category2Functions = ['calculateVAT', 'validContact', 'willSuccess', 'validProposal', 'calculateSleepTime'];
        
        const category1Count = detectedFunctions.filter(func => category1Functions.includes(func)).length;
        const category2Count = detectedFunctions.filter(func => category2Functions.includes(func)).length;
        
        if (selectedCategory === 'Assignment_04_Category_001' && category2Count > category1Count) {
            return {
                isValid: false,
                suggestedCategory: 'Assignment_04_Category_002',
                suggestedCategoryName: 'Category 2'
            };
        }
        
        if (selectedCategory === 'Assignment_04_Category_002' && category1Count > category2Count) {
            return {
                isValid: false,
                suggestedCategory: 'Assignment_04_Category_001',
                suggestedCategoryName: 'Category 1'
            };
        }
        
        return { isValid: true };
    }

    async function runTests() {
        const studentCode = codeInput.value;
        const selectedCategory = categorySelector.value;
        const functionsToTest = testCases[selectedCategory];

        if (!studentCode.trim()) {
            alert('Please paste your code before running tests.');
            return;
        }

        // Validate category selection
        const categoryValidation = validateCategory(studentCode, selectedCategory);
        if (!categoryValidation.isValid) {
            resultsContainer.innerHTML = `
                <div class="feedback-container">
                    <div class="feedback-header">
                        <h3><i class="fas fa-exclamation-triangle" style="color: var(--error-color);"></i> Wrong Category Selected</h3>
                    </div>
                    <div class="function-item" style="border-left-color: var(--error-color); background-color: rgba(239, 68, 68, 0.1);">
                        <div class="function-message">
                            <strong>⚠️ Category Mismatch Detected!</strong><br><br>
                            It looks like your code contains functions from <strong>${categoryValidation.suggestedCategoryName}</strong>, but you have selected a different category.<br><br>
                            <strong>📝 Please:</strong><br>
                            1. Change the category dropdown to "<strong>${categoryValidation.suggestedCategoryName}</strong>"<br>
                            2. Then click "Run Tests" again<br><br>
                            <em>This will ensure your code is tested against the correct test cases!</em>
                        </div>
                    </div>
                </div>
            `;
            return;
        }

        // Clear previous results
        resultsContainer.innerHTML = '';
        totalScoreContainer.style.display = 'none';

        let rawTotalMarks = 0;

        // Add event listener for marking system change
        markingSystem.addEventListener('change', () => {
            if (totalScoreContainer.style.display !== 'none') {
                updateScoreDisplay(rawTotalMarks);
            }
        });

        try {
            // Execute code and get results from sandbox
            const results = await executeCodeSafely(studentCode, functionsToTest);

            const finalScore = calculateFinalScore(results.totalMarks);
            const examinerFeedback = getFeedBack(markingSystem.value, finalScore);
            
            let feedbackHTML = `
                <div class="feedback-container">
                    <div class="feedback-header">
                        <h3><i class="fas fa-clipboard-check"></i> Assignment Feedback</h3>
                        <div class="header-right">
                            <div class="score-badge">${finalScore}/${markingSystem.value}</div>
                            <button class="copy-button">
                                <i class="fas fa-copy"></i> Copy Feedback
                            </button>
                        </div>
                    </div>
                    <div class="functions-section">
            `;

            results.feedback.forEach(feedback => {
                feedbackHTML += `
                    <div class="function-item">
                        <div class="function-name">
                            ${feedback.name}:
                            <button class="copy-individual-btn" data-function-name="${feedback.name}">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="function-message">${feedback.message}</div>
                        ${feedback.bonusMessage ? `<div class="function-message" style="color: var(--primary-color); margin-top: 0.25rem;">${feedback.bonusMessage}</div>` : ''}
                    </div>
                `;
            });

            feedbackHTML += `
                    </div>
                    <div class="examiner-feedback-section">
                        <div class="examiner-feedback-title"><i class="fas fa-user-check"></i> Examiner Feedback:</div>
                        <div class="examiner-feedback-message">${examinerFeedback}</div>
                    </div>
                    <div class="instructions-section">
                        <div class="instructions-title"><i class="fas fa-info-circle"></i> Important Instructions:</div>
                        <div class="instruction-item">→ Don't post any marks-related issues on Facebook.</div>
                        <div class="instruction-item">→ Make sure to read all the feedback carefully.</div>
                        <div class="instruction-item">→ If you think some mistake happen from the examiner's end, give a recheck request or join support session for help.</div>
                        <div class="instruction-item">→ After recheck 2 marks will be deducted automatically. but don't worry, if your recheck reason is valid then your marks will be increased.</div>
                        <div class="instruction-item">→ If your recheck reason is not valid, 2 marks will be deducted from your current marks.</div>
                    </div>
                    <div class="footer-section">
                        <div class="footer-text"><i class="fas fa-code"></i> Let's Code_ Your Career</div>
                    </div>
                </div>
            `;

            // Store feedback text for copying
            window.feedbackText = generatePlainTextFeedback(results.feedback, finalScore, markingSystem.value, examinerFeedback);

            resultsContainer.innerHTML = feedbackHTML;
            rawTotalMarks = results.totalMarks;
            
            // Add event listener to the copy button after it's created
            const copyButton = document.querySelector('.copy-button');
            if (copyButton) {
                copyButton.addEventListener('click', copyFeedback);
            }

            // Add event listeners for individual copy buttons
            const individualCopyButtons = document.querySelectorAll('.copy-individual-btn');
            individualCopyButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const functionName = button.dataset.functionName;
                    copyIndividualFeedback(functionName, results.feedback);
                });
            });

        } catch (e) {
            resultsContainer.innerHTML = `
                <div class="function-feedback error">
                    <div class="function-header">
                        <h4>❌ Execution Error</h4>
                    </div>
                    <div class="feedback-message">An error occurred: ${e.message}</div>
                </div>
            `;
        }
    }

    function areEqual(a, b) {
        if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
            return JSON.stringify(a) === JSON.stringify(b);
        }
        if (typeof a === 'number' && typeof b === 'number') {
            // Handle floating point comparisons
            return Math.abs(a - b) < 1e-9;
        }
        return a === b;
    }

    function clearResults() {
        resultsContainer.innerHTML = `<p>Results will appear here...</p>`;
        codeInput.value = '';
    }

    function calculateFinalScore(rawScore) {
        const selectedSystem = parseInt(markingSystem.value);
        let finalScore;
        if (selectedSystem === 60) {
            finalScore = rawScore;
        } else if (selectedSystem === 50) {
            finalScore = Math.ceil(50 - ((60 - rawScore) * 50) / 60);
        } else if (selectedSystem === 30) {
            finalScore = Math.ceil(30 - (60 - rawScore) / 2);
        }
        return Math.round(finalScore);
    }

    function toggleFullscreen() {
        const fullscreenButton = document.getElementById('fullscreenButton');
        const fullscreenIcon = fullscreenButton.querySelector('i');
        
        if (!document.fullscreenElement) {
            // Enter fullscreen
            document.documentElement.requestFullscreen().then(() => {
                fullscreenIcon.className = 'fas fa-compress';
                fullscreenButton.innerHTML = '<i class="fas fa-compress"></i> Exit Fullscreen';
            }).catch(err => {
                console.error('Error attempting to enable fullscreen:', err);
            });
        } else {
            // Exit fullscreen
            document.exitFullscreen().then(() => {
                fullscreenIcon.className = 'fas fa-expand';
                fullscreenButton.innerHTML = '<i class="fas fa-expand"></i> Toggle Fullscreen';
            }).catch(err => {
                console.error('Error attempting to exit fullscreen:', err);
            });
        }
    }

    // Event listeners
    testButton.addEventListener('click', runTests);
    clearButton.addEventListener('click', clearResults);
    document.getElementById('fullscreenButton').addEventListener('click', toggleFullscreen);
    
    // Handle fullscreen change events
    document.addEventListener('fullscreenchange', () => {
        const fullscreenButton = document.getElementById('fullscreenButton');
        const fullscreenIcon = fullscreenButton.querySelector('i');
        
        if (document.fullscreenElement) {
            fullscreenIcon.className = 'fas fa-compress';
            fullscreenButton.innerHTML = '<i class="fas fa-compress"></i> Exit Fullscreen';
        } else {
            fullscreenIcon.className = 'fas fa-expand';
            fullscreenButton.innerHTML = '<i class="fas fa-expand"></i> Toggle Fullscreen';
        }
    });
});

const defaultMessage = {
    BEST: [
      "Awesome work!🌟 Keep it up! 💪",
      "Wow! 👏 You did very well! It must have been your dedication and hard work behind it. Keep up the fantastic effort! 🚀",
      "Congratulations 🎉 on achieving a perfect score! You should be very proud! 🏆",
    ],
    GOOD: [
      "Good job! 👏 Keep working hard! 💪",
      "Solid effort!📈 Keep practicing, and you'll reach your goals! 🎯",
      "You're on the right track!📈 Keep up the good work! 👏",
    ],
    AVERAGE: [
      "There's always room for improvement. Keep practicing, and you'll see results! 💪",
      "It looks like you could use some extra practice. Don’t give up—keep at it! 🚀",
      "Remember, progress takes time ⏳. Keep working hard, and you'll improve! 🌟",
    ],
    BAD: [
      "Stay focused and keep pushing forward—wishing you the best of luck! 💪",
      "It looks like you faced some challenges this time. Don't be discouraged; keep at it! 💪",
      "Remember, everyone makes mistakes. Keep learning and growing! 🌟",
    ],
};

function getFeedBack(submittedMarks, obtainedMarks) {
    const percentage = (obtainedMarks / submittedMarks) * 100;
    let category;

    if (percentage >= 90) {
        category = 'BEST';
    } else if (percentage >= 70) {
        category = 'GOOD';
    } else if (percentage >= 50) {
        category = 'AVERAGE';
    } else {
        category = 'BAD';
    }
    
    const messages = defaultMessage[category];
    return messages[Math.floor(Math.random() * messages.length)];
}

// Global functions for copy functionality
function generatePlainTextFeedback(feedbackArray, finalScore, maxScore, examinerFeedback) {
    let plainText = `Assignment Feedback:\n    \n`;
    
    feedbackArray.forEach(feedback => {
        plainText += `  ${feedback.name}:  ${feedback.message}\n`;
        if (feedback.bonusMessage) {
            plainText += `  ${feedback.bonusMessage}\n`;
        }
        plainText += `      \n`;
    });
    
    plainText += `  Examiner Feedback: ${examinerFeedback}\n  \n`;

    plainText += `  Important Instructions:\n`;
    plainText += `    → Don't post any marks-related issues on Facebook.\n`;
    plainText += `    → Make sure to read all the feedback carefully.\n`;
    plainText += `    → If you think some mistake happen from the examiner's end, give a recheck request or join support session for help.\n`;
    plainText += `    → After recheck 2 marks will be deducted automatically. but don't worry, if your recheck reason is valid then your marks will be increased.\n`;
    plainText += `    → If your recheck reason is not valid, 2 marks will be deducted from your current marks.\n`;
    plainText += `  \n`;
    plainText += `  Let's Code_ Your Career`;
    
    return plainText;
}

function copyIndividualFeedback(functionName, feedbackArray) {
    const feedback = feedbackArray.find(f => f.name === functionName);
    if (feedback) {
        let individualFeedbackText = `${feedback.name}: ${feedback.message}`;
        if (feedback.bonusMessage) {
            individualFeedbackText += `\n${feedback.bonusMessage}`;
        }
        
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(individualFeedbackText).then(() => {
                showNotification(`Copied feedback for ${functionName}!`);
            }).catch(err => {
                console.error('Failed to copy individual feedback: ', err);
                fallbackCopyTextToClipboard(individualFeedbackText, `Copied feedback for ${functionName}!`);
            });
        } else {
            fallbackCopyTextToClipboard(individualFeedbackText, `Copied feedback for ${functionName}!`);
        }
    }
}

function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check' : 'fa-exclamation-triangle'}"></i>
        ${message}
    `;

    // Add to body
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);

    // Hide and remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function copyFeedback() {
    if (window.feedbackText) {
        // Try modern clipboard API first
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(window.feedbackText).then(() => {
                showNotification('Feedback copied to clipboard successfully!');
            }).catch(err => {
                console.error('Failed to copy: ', err);
                fallbackCopyTextToClipboard(window.feedbackText);
            });
        } else {
            // Fallback for older browsers or non-HTTPS
            fallbackCopyTextToClipboard(window.feedbackText);
        }
    } else {
        showNotification('No feedback available to copy.', 'error');
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showNotification('Feedback copied to clipboard successfully!');
        } else {
            showNotification('Failed to copy feedback. Please try manually.', 'error');
        }
    } catch (err) {
        console.error('Failed to copy: ', err);
        showNotification('Failed to copy feedback. Please try manually.', 'error');
    }
    
    document.body.removeChild(textArea);
}
