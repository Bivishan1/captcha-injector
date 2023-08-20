// background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        console.log('Extension loaded');
        console.log(document.title);
      },
    });
  });
  