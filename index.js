"use strict";

let myHeading = document.querySelector('h1');
myHeading.textContent = 'hello,world.';

// document.querySelector('html').onclick = function () {
//     alert('别戳我，我怕疼');
// }

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'green.jpg') {
        myImage.setAttribute('src', 'red.jpg');
    } else {
        myImage.setAttribute('src', 'green.jpg');
    }
}

function setHeading(name) {
    let myHeading = document.querySelector("h1");
    myHeading.textContent = 'Mozllia 酷毙了' + name + '!';
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if (!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;
