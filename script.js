function copy(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
} 
  
function showCopied() {
    var copiedText = document.getElementById("copied");
    copiedText.style.display = "block";
    //copiedText.style.opacity = 0
    setTimeout(function() {
    copiedText.style.opacity=1;
    }, 0);
    setTimeout(function() {
    copiedText.style.opacity=0;
    }, 2000);
}

function showBTCAddr() {
    var copiedText = document.getElementById("BTCADDR");
    copiedText.style.display = "block";
    //copiedText.style.opacity = 0
    setTimeout(function() {
    copiedText.style.opacity=1;
    }, 0);
    setTimeout(function() {
    copiedText.style.opacity=0;
    }, 2000);
}
