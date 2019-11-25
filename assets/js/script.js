//Exo 1

function headerNet() {
    document.getElementById('headerFlou').src = "assets/img/header.jpg";
}

function headerFlou() {
    document.getElementById('headerFlou').src = "assets/img/header_flou.jpg";
}

//Exo 2

function displayKey() {
    var keyType = document.getElementById('enterText').value;
    alert(keyType);
}

//Exo 3

function resize() {

    var widthVar = document.getElementById('reSize');
    var imgSize = window.getComputedStyle(widthVar).getPropertyValue('width');
    var noPix = imgSize.split('p', 1);
    var nmbr = Number(noPix);
    var newSize = nmbr*1.5 + 'px'; 
    console.log(newSize);
    document.getElementById('reSize').style.width = newSize;
}