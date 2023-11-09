// Define the class name of the button to be clicked
const bName = "VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe nRJCJ";

// Set the interval (in milliseconds) for button clicks
const TOGGLE_INTERVAL = 500;

// Set the number of times you want the button to be clicked
const TIMES_YOU_WANT_TO_CLICK = 10;

// Initialize the counter for the button clicks
var TIMES_YOU_HAVE_CLICKED = 0;

// Declare a variable to store the setInterval identifier
var buttonClickerFunctionIdentifier;

try {
    // Attempt to select the button by its class name
    const buttonToClick = document.getElementsByClassName(bName)[0];

    // Set up an interval function to click the button
    buttonClickerFunctionIdentifier = setInterval(() => {
        buttonToClick.click();
        TIMES_YOU_HAVE_CLICKED++;

        // Check if the desired number of clicks is reached and clear the interval
        if (TIMES_YOU_HAVE_CLICKED > TIMES_YOU_WANT_TO_CLICK) {
            clearInterval(buttonClickerFunctionIdentifier);
        }
    }, TOGGLE_INTERVAL);
} catch (e) {
    // Handle any errors that may occur during button selection or clicking
    console.error(e);

    // Clear the interval if an error occurs
    if (buttonClickerFunctionIdentifier) {
        clearInterval(buttonClickerFunctionIdentifier);
    }
}