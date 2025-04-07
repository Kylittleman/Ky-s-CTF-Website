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

// Listen for Enter key press in the input field
document.getElementById("cmdInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        processCommand();
    }
});

// Fake links randomsite
document.querySelector("button:nth-child(3)").addEventListener("click", () => {
    const randomSite = fakeLinks[Math.floor(Math.random() * fakeLinks.length)];
    window.open(randomSite);
});

// Fake terminal input
function processCommand() {
    const input = document.getElementById("cmdInput").value.toLowerCase();
    const output = document.getElementById("terminalOutput");

    if (input === "help") {
        output.textContent = "Available commands: help, flag, hint";
    } else if (input === "flag") {
        output.textContent = "Oops! Wrong command. Try again.";
    } else if (input === "hint") {
        output.textContent = "I would inspect: XBOX, WII, PLAYSTATION.";
    } else {
        output.textContent = "Unknown command. Type 'help' for options.";
    }
}

function _0x2d0d(_0x2a84d9,_0x52bb6d){const _0x56f0c=_0x56f0();return _0x2d0d=function(_0x2d0d86,_0xaf3239){_0x2d0d86=_0x2d0d86-0x187;let _0x4948cd=_0x56f0c[_0x2d0d86];return _0x4948cd;},_0x2d0d(_0x2a84d9,_0x52bb6d);}function _0x56f0(){const _0x4ef082=['FLAG{c0ngr@ts_y0u_w0n_66}','12FFFEkV','style','#ff4444','68lRZOFI','1dGqckq','value','getElementById','textContent','20akvSSJ','color','2302949qRwjAX','956439AxqIbz','✅\x20Correct!\x20You\x27ve\x20captured\x20the\x20flag!','3559556WbpyBr','flagResult','❌\x20Incorrect\x20flag.\x20Try\x20again.','1343258lHMSZP','168486yPMkcP','2048845CXIjGw','flagInput','1664744xcEsXv'];_0x56f0=function(){return _0x4ef082;};return _0x56f0();}(function(_0x2bc0ea,_0x5c6632){const _0x28ac73=_0x2d0d,_0x4ed1e8=_0x2bc0ea();while(!![]){try{const _0x1c4459=-parseInt(_0x28ac73(0x199))/0x1*(-parseInt(_0x28ac73(0x18f))/0x2)+parseInt(_0x28ac73(0x190))/0x3*(-parseInt(_0x28ac73(0x198))/0x4)+parseInt(_0x28ac73(0x191))/0x5*(parseInt(_0x28ac73(0x195))/0x6)+-parseInt(_0x28ac73(0x18c))/0x7+parseInt(_0x28ac73(0x193))/0x8+-parseInt(_0x28ac73(0x18a))/0x9+parseInt(_0x28ac73(0x187))/0xa*(parseInt(_0x28ac73(0x189))/0xb);if(_0x1c4459===_0x5c6632)break;else _0x4ed1e8['push'](_0x4ed1e8['shift']());}catch(_0x45df46){_0x4ed1e8['push'](_0x4ed1e8['shift']());}}}(_0x56f0,0x85e5d));function checkFlag(){const _0x327ad3=_0x2d0d,_0x4ef7fc=document['getElementById'](_0x327ad3(0x192))[_0x327ad3(0x19a)]['trim'](),_0x469baf=document[_0x327ad3(0x19b)](_0x327ad3(0x18d)),_0x411d37=_0x327ad3(0x194);_0x4ef7fc===_0x411d37?(_0x469baf[_0x327ad3(0x19c)]=_0x327ad3(0x18b),_0x469baf['style'][_0x327ad3(0x188)]='#00ff00'):(_0x469baf['textContent']=_0x327ad3(0x18e),_0x469baf[_0x327ad3(0x196)][_0x327ad3(0x188)]=_0x327ad3(0x197));}

// Make enter work instead of clicking
document.getElementById("flagInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkFlag();
    }
});
