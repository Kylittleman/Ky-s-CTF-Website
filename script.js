document.addEventListener("DOMContentLoaded", function () {
    console.log("%c 42524F4E5A4546414C4C24", "color:rgb(242, 11, 11); font-size: 14px;");
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
        "https://www.youtube.com/watch?v=xvFZjo5PgG0"
    ];

    // Listen for Enter key press in the terminal input field
    document.getElementById("cmdInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            processCommand();
        }
    });

    // Random fake links
    document.querySelector("button:nth-child(3)").addEventListener("click", () => {
        const randomSite = fakeLinks[Math.floor(Math.random() * fakeLinks.length)];
        window.open(randomSite);
    });

    // Make enter key work for the flag input
    document.getElementById("flagInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkFlag();
        }
    });

    // Flag checker function using SHA-256
    async function checkFlag() {
        const input = document.getElementById("flagInput").value.trim();
        const result = document.getElementById("flagResult");

        const encoder = new TextEncoder();
        const data = encoder.encode(input);
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        const correctHash = "5d3c0809d8a15d2c82a36a43b32e637edfcd4ef83c8f4981ecf1cc9b3e162e4f";

        if (hashHex === correctHash) {
            result.textContent = "✅ Correct! You've captured the flag!";
            result.style.color = "#00ff00";
        } else {
            result.textContent = "❌ Incorrect flag. Try again.";
            result.style.color = "#ff4444";
        }
    }

    // Terminal command handler
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
});
