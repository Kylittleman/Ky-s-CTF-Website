console.log("%c 42524F4E5A4546414C4C24", "color:rgb(242, 11, 11); font-size: 14px;");
console.log("%c /secret.zip", "color:rgb(255, 255, 255); font-size: 14px;");
console.log("%c HINT: linux: 7z x secret.zip, HINT: sudo apt install 7zip", "color:rgb(255, 255, 255); font-size: 14px;");

// Broken button effect
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("brokenButton").addEventListener("click", () => {
        alert("Oops, looks like this button is broken...");
    });

    // Fake loading effect
    document.body.insertAdjacentHTML("beforeend", "<p class='static-text'>LOADING...</p>");

    // Random link generator
    const fakeLinks = [
        "https://www.youtube.com/watch?v=xvFZjo5PgG0"
    ];

    document.getElementById("cmdInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            processCommand();
        }
    });

    document.querySelector("button:nth-child(3)").addEventListener("click", () => {
        const randomSite = fakeLinks[Math.floor(Math.random() * fakeLinks.length)];
        window.open(randomSite);
    });

    document.getElementById("flagInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkFlag();
        }
    });
});

// Terminal command processor
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

// Flag check - no hashing
function checkFlag() {
    const input = document.getElementById("flagInput").value.trim();
    const result = document.getElementById("flagResult");

    const correctFlag = "itc101{c0ngrats y0u w0n}";

    if (input === correctFlag) {
        result.textContent = "✅ Correct! You've captured the flag!";
        result.style.color = "#00ff00";
    } else {
        result.textContent = "❌ Incorrect flag. Try again.";
        result.style.color = "#ff4444";
    }
}
