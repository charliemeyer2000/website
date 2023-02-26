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

  // window.onload = function() {
  //   const xkcdUrl = 'https://xkcd.com/';
  
  //   fetch(xkcdUrl)
  //     .then(response => response.json())
  //     .then(html => {
  //       let parser = new DOMParser();
  //       let doc = parser.parseFromString(html, "text/html");
  //       let element = doc.getElementById("comic");
  //       console.log(element.innerHTML());

  //       /*
  //       //document.body.appendChild(comicImg);
  //       const titleAndDate = document.createElement('p');
  //       titleAndDate.style = "text-align:center;"
  //       titleAndDate.textContent = `Today's XKCD Comic: ${data.title} - ${new Date().toDateString()}`;
  //       //document.body.appendChild(titleAndDate);
  //       document.getElementById('photo-locator').appendChild(document.createElement('hr'))
  //       document.getElementById('photo-locator').appendChild(titleAndDate)
  //       document.getElementById('photo-locator').appendChild(comicImg)
  //       */
  //     })
  //     .catch(error => console.error(error))
  // };

window.onload = function cringeaxios() {
  const proxyURL = 'https://cors-anywhere.herokuapp.com/'
  const xkcdURL = 'https://xkcd.com/info.0.json'
  axios.get(proxyURL + xkcdURL).then((response) => {
    console.log(JSON.stringify(response.data.img));

    const title = document.getElementById('title');
    const comic = document.getElementById('comic');
    const caption = document.getElementById('caption')

    title.style = "text-align:center";
    title.textContent = `Today's XKCD Comic: ${response.data.title} - ${new Date().toDateString()}`
    caption.textContent = response.data.alt
    caption.style = "text-align:center; font-size:12px;"
    comic.setAttribute('src', response.data.img)
  })
}

