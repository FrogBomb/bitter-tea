
window.onchange = function(e) {
  if (e.target.matches('#functionText')) {
	  populateDropdowns();
  }
}

window.onload = function(e) {
	CODE_INPUT = makeCodeInput(document.getElementById('functionText'));
	CODE_INPUT.on("change", populateDropdowns);
}