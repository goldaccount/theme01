// ==UserScript==
// @name         Discord links
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        none
// ==/UserScript==

function func2(){
  for (const ax of document.getElementsByClassName("anchor_c8ddc0 anchorUnderlineOnHover__03b72")) {
  ax.innerHTML = ax.href;
	}
}

var parentbody = document.querySelector("body");
var newchild = document.createElement("a");
newchild.textContent = "LinkDel";
newchild.href = "#nowhere";
newchild.style = "top: 10%; left: 80%; position: relative; z-index:200 !important;";
newchild.onclick = func2;
parentbody.appendChild(newchild);
