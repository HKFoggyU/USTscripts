// ==UserScript==
// @name         GenkiSushiTotalPrice
// @namespace    https://hkfoggyu.github.io/
// @version      0.2
// @description  Calculate the total price of Genki Sushi
// @author       Young
// @supportURL   https://github.com/HKFoggyU/USTscripts
// @match        http://https://genki2.order.place/*
// @icon         none
// @grant        none
// @license      MIT
// @run-at       document-end
// ==/UserScript==

function calcTotalPrice() {
    let cols = document.getElementsByClassName("col");
    var totalPrice = 0.0;
    var dishes = [];
    for (var i=7; i<cols.length; i+=4) {
        //dishes.push(cols[i]);
        totalPrice += parseFloat(cols[i].childNodes[6].innerText.slice(1))
    }
    return totalPrice;
}

(function() {
    'use strict';
    var totalPrice = calcTotalPrice();
    var outputText = `Total price: $${totalPrice}`;
    console.log("[+] "+outputText);
    var priceTag = document.createElement("p");
    var priceText = document.createTextNode(outputText);
    priceTag.appendChild(priceText);
    var insertTextTag = document.getElementsByClassName("update-time-text")[0];
    insertTextTag.appendChild(priceTag);
    console.log("[+] Total price inserted");
    // Your code here...
})();