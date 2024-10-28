// content.js

window.addEventListener('load', function () {
    console.log("Content script loaded");
  
    // Adjust these selectors based on Longman Dictionary's actual structure
    const wordElement = document.querySelector('h1.headword');
    const definitionElement = document.querySelector('span.def');
  
    if (wordElement && definitionElement) {
      const word = wordElement.innerText;
      const definition = definitionElement.innerText;
  
      // Create the button
      const addButton = document.createElement('button');
      addButton.innerText = "Add to Anki";
      addButton.style.position = "fixed";  // Adjust position if needed
      addButton.style.top = "10px";
      addButton.style.right = "10px";
      addButton.style.zIndex = 1000; // Ensure it appears above other elements
      addButton.style.backgroundColor = "#4CAF50";
      addButton.style.color = "white";
      addButton.style.border = "none";
      addButton.style.padding = "10px";
      addButton.style.cursor = "pointer";
  
      // Attach click event
      addButton.onclick = function () {
        console.log(`Adding ${word} to Anki stack.`);
        chrome.runtime.sendMessage({
          action: "addWord",
          wordData: {
            word: word,
            definition: definition
          }
        }, function (response) {
          if (response.success) {
            alert(`${word} added to Anki stack.`);
          }
        });
      };
  
      // Append the button to the body
      document.body.appendChild(addButton);
    } else {
      console.log("Failed to find word or definition elements.");
    }
  });
  