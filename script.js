var request = new XMLHttpRequest();

request.open('Get', 'https://api.giphy.com/v1/gifs/random?api_key=j10ajW95sSm4OTIstOgAlCUus0mFE2m0&tag=squirrels&rating=g');

request.onload = function() {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);

    var originalUrl = parsedData.data.images.original.url;
    console.log(originalUrl);

    var gif = document.createElement('img');
    gif.setAttribute('src', originalUrl);
    document.body.appendChild(gif);
}

request.onerror = function() {
    console.log("There seems to be a problem!");
}

request.send();
