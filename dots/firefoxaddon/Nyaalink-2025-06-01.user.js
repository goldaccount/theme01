// ==UserScript==
// @name         Nyaa link
// @namespace    http://tampermonkey.net/
// @version      2025-06-01
// @description  Click link & copy title magnet
// @author       You
// @match        https://sukebei.nyaa.si/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function func2(){
//<div markdown-text="" class="panel-body" id="torrent-description">表紙 / Cover
//**https://hentai-covers.site/image/69Wlb**</div>
//  for (const ax of document.getElementById("torrent-description")) {
  const e = document.getElementById("torrent-description");
  const _old1 = e.innerHTML ;
  const _new = _old1.replace(/(https?:\/\/[^\s]+)\*\*/,'<a href="$1">$1</a>');
  //replace e with content from _new
  e.innerHTML = _new;
  //open url in new tab
  const _url = _old1.replace(/.*\n\*\*(https?:\/\/[^\s]+)\*\*/,'$1');
  console.log(_url);
  window.open(_url,'_blank');
//	}
}

function func1() {
    //Get title
    const _title = document.getElementsByClassName("panel-title")[0].innerHTML.replace(/\s+/,'');
    //Get current url
    const _url = window.location.href;
    //Get magnet link
    const _magnet = document.getElementsByClassName("card-footer-item")[0].href
    //Concat to text
    const _copy = _title + _url + "\n" + _magnet
    //Echo to console
    console.log(_copy);
    //Copy to clipboard
    navigator.clipboard.writeText(_copy);
}

const e = document.getElementById("torrent-description");
    e.onclick = func2

const t = document.getElementsByClassName("panel-title")[0];
    t.onclick = func1
/*
var parentbody = document.querySelector("body");
var newchild = document.createElement("a");
newchild.textContent = "Link";
newchild.href = "#nowhere";
newchild.style = "top: 19%; left: 20%; position: absolute;";
newchild.onclick = func1;
parentbody.appendChild(newchild);
*/