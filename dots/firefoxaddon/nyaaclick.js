// ==UserScript==
// @name         Nyaa click
// @namespace    http://tampermonkey.net/
// @version      2026-04-10
// @description  Click link & copy title magnet
// @author       You
// @match        https://*.nyaa.si/?f=0*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


function fx_clicktor() {
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
    const list = document.querySelectorAll("tr.success > td > a[href*='view']");
    const listn = list.length
    const loopOpen = async () => {
        for (let i = 0; i < listn; i++) {
            await sleep(1500)
            window.open(list[i].href);
        }
    }
    loopOpen();
}

function fx_init() {
    const parent = document.getElementsByClassName("hdr-name")[0];
    const clickbtn = document.createElement("button")
    parent.appendChild(clickbtn);
    clickbtn.textContent = "Click Tor"
    clickbtn.style = "top: 0%;left:5%;position:relative;background-color:inherit;padding: 0px 10px";
    clickbtn.onclick = fx_clicktor
}

fx_init();
/*document.getElementByClassName("hdr-link");*/







