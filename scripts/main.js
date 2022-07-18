//image switcher code. click on image to switch to over image

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/AngelStrike.png') {
        myImage.setAttribute('src','images/threecops.png');
    }
    else {
        myImage.setAttribute('src','images/AngelStrike.png');
    }
}

// button to prompt name change
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter in your name');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Kronetanto - A Crown of ' + myName;
}
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Kronetanto - A Crown of ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}