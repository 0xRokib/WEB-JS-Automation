document.addEventListener('DOMContentLoaded', () => {
    // Get the manual checker link
    const manualCheckerLink = document.querySelector('.manual a');
    
    if (manualCheckerLink) {
        manualCheckerLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Open the manual checker in a new tab
            chrome.tabs.create({
                url: chrome.runtime.getURL('manual-checker.html')
            });
        });
    }
});
