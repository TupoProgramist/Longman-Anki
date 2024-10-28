// popup.js

document.getElementById('releaseButton').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "releaseWords" }, function (response) {
      if (response.success) {
        alert("Anki file created and stack cleared.");
      }
    });
  });
  