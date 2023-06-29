function func2(){
  for (const ax of document.getElementsByClassName("anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_")) {
  ax.innerHTML = ax.href;
	}
  alert("Discord link removed");
}

var parentbody = document.querySelector("body");
var newchild = document.createElement("a");
newchild.textContent = "LinkDel";
newchild.href = "#nowhere";
newchild.style = "top: 20px; left: 70%; position: relative;";
newchild.onclick = func2;
parentbody.appendChild(newchild);

