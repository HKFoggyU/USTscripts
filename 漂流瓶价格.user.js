// ==UserScript==
// @name         漂流瓶价格
// @namespace    https://hkfoggyu.github.io/
// @version      0.3
// @description  显示漂流瓶每个瓶子的总重和价格(单件物品的瓶子无法显示)
// @author       Young
// @supportURL   https://github.com/HKFoggyU/USTscripts
// @updateURL    https://github.com/HKFoggyU/USTscripts/raw/main/%E6%BC%82%E6%B5%81%E7%93%B6%E4%BB%B7%E6%A0%BC.user.js
// @doanloadURL  https://github.com/HKFoggyU/USTscripts/raw/main/%E6%BC%82%E6%B5%81%E7%93%B6%E4%BB%B7%E6%A0%BC.user.js
// @match        http://www.piaoliuhk.com/packageList.php
// @icon         http://www.piaoliuhk.com/css/images/favicon.ico
// @grant        none
// ==/UserScript==

function getBottles() {
    let tds = document.getElementsByTagName("td");
    var bottles = [];
    for (var i=1; i<tds.length; i++) {
        if (tds[i].hasAttribute("rowspan")) {
            //console.log(`Bottle Num: ${tds[1].innerText}`);
            bottles.push(tds[i]);
        }
    }
    return bottles;
}

function calcWeightAndPrice(bottleNum) {
    var total = 0.0;
    var trs = document.getElementsByTagName("tr");
    for (var i=1; i<trs.length; i++) {
        var tds = trs[i].getElementsByTagName("td");
        if (tds[7].innerText != "" && tds[1].innerText == bottleNum) {
            total += parseFloat(tds[7].innerText);
        }
    }
    var totalWeight = total.toFixed(1);
    var totalPriceHKD = totalWeight>1.0 ? Math.ceil((totalWeight-1)/0.5)*3.5+12.5 : 12.5;
    var totalPriceCNY = totalWeight>1.0 ? Math.ceil((totalWeight-1)/0.5)*3.2+11.4 : 11.4;
    return [totalWeight, totalPriceHKD, totalPriceCNY];
}

(function() {
    'use strict';
    var bottles = getBottles();
    for (var i=0; i<bottles.length; i++) {
        var bottle = bottles[i];
        var bottleNum = bottle.innerText;
        var [totalWeight, totalPriceHKD, totalPriceCNY] = calcWeightAndPrice(bottleNum);
        var outputText = `${bottle.innerText} (${totalWeight} kg, ${totalPriceHKD} HKD, ${totalPriceCNY} CNY)`;
        //console.log(outputText);
        bottle.innerText=outputText;

        //var outputStr = `漂流瓶编号: ${bottleNum}\n总重: ${totalWeight} kg.\n总价: ${totalPriceHKD} HKD.`;
        //console.log(outputStr);
        //window.alert(outputStr);
    }
})();
