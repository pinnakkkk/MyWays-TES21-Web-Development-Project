var angle = 0;

var changeBackground = function () {
	angle = angle + 3;

	document.body.style.background	="linear-gradient("+ angle+"deg, #c9d6ff, #e2e2e2)"
	requestAnimationFrame(changeBackground)
}
changeBackground()
