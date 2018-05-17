var hi = document.getElementById("hi");
var hiInfo = document.getElementById("hi-info");
var hiInfoAttr = document.defaultView.getComputedStyle(hiInfo,null).display;
hi.addEventListener("click",sayHi);
function sayHi(){
	if (hiInfoAttr === "none"){
		hiInfo.style.display = "block";
		hiInfoAttr = "block";
	}
	else {
		hiInfo.style.display = "none";
		hiInfoAttr = "none";
	}
}