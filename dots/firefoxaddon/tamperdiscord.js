// ==UserScript==
// @name         Discord links remove
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        none
// ==/UserScript==

function func2(){
  for (const ax of document.getElementsByClassName("anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_")) {
  ax.innerHTML = ax.href;
	}
  newchild.style = "top: 20px; left: 70%; position: relative; text-decoration: underline; color: #A00 !important;";
}

var parentbody = document.querySelector("body");
var newchild = document.createElement("a");
newchild.textContent = "LinkDel";
newchild.href = "#nowhere";
newchild.style = "top: 20px; left: 70%; position: relative;";
newchild.onclick = func2;
parentbody.appendChild(newchild);

