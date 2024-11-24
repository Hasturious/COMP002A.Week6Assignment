// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

// This defines the userSetting function
function setSettings() {
    // Logs the users username
    const userName = localStorage.getItem("name")
    // Logs the background color
    const backgroundColor = localStorage.getItem("backgroundColor")
    // Logs the foreground color
    const foregroundColor = localStorage.getItem("foregroundColor")
    // Applies the new BG color
    if (backgroundColor) {
        document.body.style.backgroundColor = backgroundColor;
    }
    // Applies the new FG color
    if (foregroundColor) {
        document.body.style.color = foregroundColor;
    }
    // Greeting alert
    if (username) {
        document.getElementById("greeting").textContent = `Hello, ${userName}!`;
    }
}

// Function to save preferences
function userSettings(event) {
    // Prevent page from reloading
    event.preventDefault();
    
    // Get the values from the form
    const name = document.getElementById("name").value;
    const backgroundColor = document.getElementById("background-color").value;
    const foregroundColor = document.getElementById("foreground-color").value;
    
    // Store values in localStorage
    localStorage.setItem("username", name);
    localStorage.setItem("backgroundColor", backgroundColor);
    localStorage.setItem("foregroundColor", foregroundColor);
    
    // Notify the user that preferences have been saved
    alert("Preferences saved!");
    
    // Apply the new preferences
    setSettings();
}

// This listens for the form to be submitted
document.getElementById("preferences-form").addEventListener("submit", userSettings);

// When the page is loaded the settings are set
window.onload = setSettings;