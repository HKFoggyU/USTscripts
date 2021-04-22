// ==UserScript==
// @name         DMSFAutoFill
// @namespace    https://hkfoggyu.github.io/
// @version      0.1
// @description  Auto fill the DMSF job registration form
// @author       Young
// @match        http://emz032.ust.hk/DMSF/CAD/CAD_BookingForm.html?station=*
// @icon         none
// @grant        none
// @run-at       document-end
// ==/UserScript==

function autoFillDMSF() {
    document.getElementById("userName").value="YOUR NAME";
    document.getElementById("userEmail").value="YOUR EMAIL";
    document.getElementById("userPhoneNo").value="YOUR PHONE NUMBER";

    if (document.getElementsByClassName("machinetitle")[0].innerHTML.toLowerCase().includes("laser cut")) {
    document.getElementById("jobDescription").value="Laser mark. Time slot: 14:00-15:00.";
    }
    else if (document.getElementsByClassName("machinetitle")[0].innerHTML.toLowerCase().includes("contact angle")) {
    document.getElementById("jobDescription").value="Measure CA";
    }
    else if (document.getElementsByClassName("machinetitle")[0].innerHTML.toLowerCase().includes("optical profiler")) {
    document.getElementById("jobDescription").value="Measure optical profile";
    }
    document.getElementById("AC").value="YOUR ACCOUNT CODE";

    try {
        document.getElementById("Dept").value="YOUR DEPARTMENT";
        // console.log("Dept added");
    } catch {
        console.log("[-] No Dept");
    }
    document.getElementById("ProjectType").value="YOUR PROJECT TYPE";
    // console.log("Project Type added");
    document.getElementById("supervisorName").value="YOUR SUPERVISOR DISPLAYED NAME";
    // console.log("Supervisor added");
    document.getElementById("supervisorEmail").value="YOUR SUPERVISOR EMAIL";
    // console.log("Supervisor Email added");
}

(async() => {
    'use strict';
    setTimeout(function() {autoFillDMSF()}, 200);
})();
