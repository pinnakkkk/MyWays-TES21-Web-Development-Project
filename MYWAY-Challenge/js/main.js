var angle = 0;

var changeBackground = function () {
	angle = angle + 0.7;

	document.body.style.background	="linear-gradient("+ angle+"deg, #83a4d4, #b6fbff)"
	requestAnimationFrame(changeBackground)
}
changeBackground()
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function z() {
	var a = document.getElementById("usr");
var b = document.getElementById("pwd");
	if ((a.value == "itspinnakkkk" && b.value == "Falcon29")) {
		console.log("hi");
		newtab();
	} else {
		alert("Nah!");
	}
}
function newtab() {
	location.replace("../html/homepage.html");
}
