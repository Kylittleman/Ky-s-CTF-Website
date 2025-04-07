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
        output.textContent = "I inspect your looking for something...";
    } else {
        output.textContent = "Unknown command. Type 'help' for options.";
    }
}


 // Make enter work instead of clicking
 document.getElementById("flagInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkFlag();
    }
});















































































































































// If your reading this: Go to Concole to find hints. None of this here will work for you.
function _0x1cdc(_0x579cb5,_0x1a5473){const _0x3b5a24=_0x3b5a();return _0x1cdc=function(_0x1cdc15,_0x3d5a5c){_0x1cdc15=_0x1cdc15-0x73;let _0x1b87d6=_0x3b5a24[_0x1cdc15];return _0x1b87d6;},_0x1cdc(_0x579cb5,_0x1a5473);}(function(_0x2ad65f,_0x414d5b){const _0x26bfcd=_0x1cdc,_0x46ca26=_0x2ad65f();while(!![]){try{const _0x3b1d37=parseInt(_0x26bfcd(0x85))/0x1*(-parseInt(_0x26bfcd(0x79))/0x2)+-parseInt(_0x26bfcd(0x81))/0x3*(parseInt(_0x26bfcd(0x76))/0x4)+-parseInt(_0x26bfcd(0x77))/0x5+parseInt(_0x26bfcd(0x7a))/0x6+parseInt(_0x26bfcd(0x8e))/0x7*(parseInt(_0x26bfcd(0x7f))/0x8)+parseInt(_0x26bfcd(0x8a))/0x9*(parseInt(_0x26bfcd(0x90))/0xa)+parseInt(_0x26bfcd(0x86))/0xb*(-parseInt(_0x26bfcd(0x7d))/0xc);if(_0x3b1d37===_0x414d5b)break;else _0x46ca26['push'](_0x46ca26['shift']());}catch(_0x374940){_0x46ca26['push'](_0x46ca26['shift']());}}}(_0x3b5a,0x8e6b3));function _0x3b5a(){const _0x2ce660=['6544VEsGLs','6423132kAOITQ','textContent','#ff4444','12hKkzwk','style','421992gKcswA','toString','123sANQiZ','digest','trim','flagResult','47LxjBXy','4181122XQXnPy','color','encode','flagInput','4967523EqLObo','✅\x20Correct!\x20You\x27ve\x20captured\x20the\x20flag!','subtle','getElementById','98fiUASP','SHA-256','20TZgaMf','value','from','join','padStart','❌\x20Incorrect\x20flag.\x20Try\x20again.','84820bBdsur','4631320GcRuVj','5d3c0809d8a15d2c82a36a43b32e637edfcd4ef83c8f4981ecf1cc9b3e162e4f'];_0x3b5a=function(){return _0x2ce660;};return _0x3b5a();}async function checkFlag(){const _0x392583=_0x1cdc,_0x5515d0=document[_0x392583(0x8d)](_0x392583(0x89))[_0x392583(0x91)][_0x392583(0x83)](),_0x1bc262=document[_0x392583(0x8d)](_0x392583(0x84)),_0x120eeb=new TextEncoder(),_0x3fbd31=_0x120eeb[_0x392583(0x88)](_0x5515d0),_0x59c6fa=await crypto[_0x392583(0x8c)][_0x392583(0x82)](_0x392583(0x8f),_0x3fbd31),_0x292792=Array[_0x392583(0x92)](new Uint8Array(_0x59c6fa)),_0xbf938c=_0x292792['map'](_0x40af14=>_0x40af14[_0x392583(0x80)](0x10)[_0x392583(0x74)](0x2,'0'))[_0x392583(0x73)](''),_0x4f0fdf=_0x392583(0x78);_0xbf938c===_0x4f0fdf?(_0x1bc262[_0x392583(0x7b)]=_0x392583(0x8b),_0x1bc262['style'][_0x392583(0x87)]='#00ff00'):(_0x1bc262[_0x392583(0x7b)]=_0x392583(0x75),_0x1bc262[_0x392583(0x7e)][_0x392583(0x87)]=_0x392583(0x7c));}