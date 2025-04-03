console.log("%c Hidden Key: RkxBR3tZb3VfRm91bmRfSXR9", "color: lime; font-size: 14px; background: black; padding: 5px;");
console.log("Hint: Try decoding with base64.");

// Fake error message pop-up
setTimeout(() => {
    alert("SYSTEM ERROR: Memory overload detected!");
}, 5000);

// Broken button effect
document.getElementById("brokenButton").addEventListener("click", () => {
    alert("Oops, looks like this button is broken...");
});

// Fake loading effect
document.body.insertAdjacentHTML("beforeend", "<p class='glitch'>LOADING...</p>");

// Random link generator
const fakeLinks = [
    "https://rickroll.com",
    "https://www.wikipedia.org",
    "https://store.steampowered.com",
    "https://x.com",
    "https://www.byui.edu"
];

document.querySelector("button:nth-child(3)").addEventListener("click", () => {
    const randomSite = fakeLinks[Math.floor(Math.random() * fakeLinks.length)];
    window.open(randomSite);
});

// Glitchy header
setInterval(() => {
    document.querySelector("h1").classList.toggle("flicker");
}, 1000);

// Fake terminal input
function processCommand() {
    const input = document.getElementById("cmdInput").value.toLowerCase();
    const output = document.getElementById("terminalOutput");

    if (input === "help") {
        output.textContent = "Available commands: help, flag, hint";
    } else if (input === "flag") {
        output.textContent = "Oops! Wrong command. Try again.";
    } else if (input === "hint") {
        output.textContent = "Check the console logs for a hidden message...";
    } else {
        output.textContent = "Unknown command. Type 'help' for options.";
    }
}
