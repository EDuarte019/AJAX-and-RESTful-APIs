

/*  Project 01_11_04

    Author: Evelyn Duarte
    Date:   9/19/19

    Filename: script.js
*/

"use strict";

function checkInput() {
    alert("checkInput()");
}

var zip = document.getElementById("zip");

if (zip.addEventListener) {
    zip.addEventListener("keyup", checkInput, false);
} else if (zip.attachEvent) {
    zip.attachEvent("onkeyup", checkInput);
}

var httpRequest = false;

