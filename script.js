console.log("%c /secret.zip", "color:rgb(255, 255, 255); font-size: 14px;");
console.log("%c HINT: linux: 7z x secret.zip, HINT: sudo apt install 7zip", "color:rgb(255, 255, 255); font-size: 14px;");

// Broken button effect
document.getElementById("brokenButton").addEventListener("click", () => {
    alert("Oops, looks like this button is broken...");
});

// Fake loading effect (Removed blinking)
document.body.insertAdjacentHTML("beforeend", "<p class='static-text'>LOADING...</p>");

// Random link generator
const fakeLinks = [
    "https://rickroll.com",
    "https://www.wikipedia.org",
    "https://store.steampowered.com",
    "https://x.com",
    "https://www.byui.edu"
];

// Listen for Enter key press in the input field
document.getElementById("cmdInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        processCommand();
    }
});


document.querySelector("button:nth-child(3)").addEventListener("click", () => {
    const randomSite = fakeLinks[Math.floor(Math.random() * fakeLinks.length)];
    window.open(randomSite);
});

// Removed glitchy flickering header
// Removed setInterval() for flickering effect

// Fake terminal input
function processCommand() {
    const input = document.getElementById("cmdInput").value.toLowerCase();
    const output = document.getElementById("terminalOutput");

    if (input === "help") {
        output.textContent = "Available commands: help, flag, hint";
    } else if (input === "flag") {
        output.textContent = "Oops! Wrong command. Try again.";
    } else if (input === "hint") {
        output.textContent = "I inspect your looking for something...";
    } else {
        output.textContent = "Unknown command. Type 'help' for options.";
    }
}
