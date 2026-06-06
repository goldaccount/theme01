// ==UserScript==
// @name         Nyaa view images
// @namespace    http://tampermonkey.net/
// @version      2025-06-01
// @description  Click images cover
// @author       You
// @match        https://sukebei.nyaa.si/view/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function fx_onload(){
//<div markdown-text="" class="panel-body" id="torrent-description">表紙 / Cover
//**https://hentai-covers.site/image/69Wlb**</div>
//  for (const ax of document.getElementById("torrent-description")) {
    var img = document.querySelectorAll("div#torrent-description > p > strong > a")[0].href;
    window.open(img);
//	}
}

fx_onload();

