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

window.onload = function() {
    const xkcdUrl = 'https://xkcd.com/info.0.json';
  
    fetch(xkcdUrl)
      .then(response => response.json())
      .then(data => {
        
        const comicImg = document.createElement('img');
        comicImg.style = ""
        comicImg.src = data.img;
        comicImg.alt = data.alt;
        //document.body.appendChild(comicImg);
        const titleAndDate = document.createElement('p');
        titleAndDate.style = "text-align:center;"
        titleAndDate.textContent = `Today's XKCD Comic: ${data.title} - ${new Date().toDateString()}`;
        //document.body.appendChild(titleAndDate);
        document.getElementById('photo-locator').appendChild(document.createElement('hr'))
        document.getElementById('photo-locator').appendChild(titleAndDate)
        document.getElementById('photo-locator').appendChild(comicImg)
        
      })
      .catch(error => console.error(error));
  };
