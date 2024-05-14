/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    document.getElementById("encrypt-it").addEventListener("click", handleClick);
    document.getElementById("reset").addEventListener("click", handleReset);
    
  }

  function handleClick() {
    console.log("Button clicked!");
    let inputText = document.getElementById("input-text").value;
    let encryptedText = shiftCipher(inputText);
    document.getElementById("result").innerText = encryptedText;
  }
  
  function handleReset() {
    document.getElementById("input-text").value = "";
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function shiftCipher(string) {
    string = string.toLowerCase();
    let encrypted = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] < 'a' || string[i] > 'z') {
        encrypted += string[i];
      }
      else if (string[i] == 'z') {
        encrypted += 'a';
        }
        else {
          let alpha = string.charCodeAt(i);
          let alphaEncrypted = String.fromCharCode(alpha + 1);
          encrypted += alphaEncrypted;
        }
    }
    return encrypted;
  }

})();
