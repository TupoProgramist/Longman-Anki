// background.js

let wordStack = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "addWord") {
    wordStack.push(request.wordData);
    chrome.storage.local.set({ "wordStack": wordStack }, () => {
      sendResponse({ success: true });
    });
  } else if (request.action === "releaseWords") {
    // You would need a function to convert this to an Anki package or similar
    generateAnkiPackage(wordStack);
    wordStack = [];
    chrome.storage.local.set({ "wordStack": wordStack }, () => {
      sendResponse({ success: true });
    });
  }
  return true; // Indicates that the response will be sent asynchronously
});

function generateAnkiPackage(words) {
  // Logic to generate and download Anki .apkg file
  // This can be done by calling a server-side script or using a library.
}
