var to_move = [];

window.onscroll = function(){
	// console.debug("Scrolling !");
	var i=0;
	for (i = 0; i < to_move.length; i++) { 
		offsetMove(to_move[i][0], to_move[i][1], to_move[i][2]);
	}
}

window.onload = function(){
	identifyMovingElements();
}

function offsetMove(element, ratio, initial_top){
	elemRect = element.getBoundingClientRect();
	dist = elemRect.top;
	
	offset = -dist*ratio;
	final_top = offset+initial_top;
	// console.debug("Final position : "+final_top);
	element.style.top = final_top+"px";
}

function addVerticalMovement(element, ratio){
	var top = parseInt(window.getComputedStyle(element).top, 10);
	console.debug("Added movement from "+top+" at "+ratio+" ratio for "+element.className);
	to_move.push([element, ratio, top]);
}

function identifyMovingElements(){
	var elements = document.getElementsByClassName("move");

	var i=0;
	for (i = 0; i < elements.length; i++) { 
		var el = elements[i].parentElement;
		var ratio = parseFloat(elements[i].innerHTML, 10);
		console.debug("Parsed movement info for from "+el.className+" : "+ratio+" ratio");
		addVerticalMovement(el, ratio);
	}
}