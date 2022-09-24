document.body.classList.add(localStorage.getItem("changecolor") || "red"); // || class red > in default if no localstorage found
var elements = document.querySelectorAll('.color-switcher li');
var classeslist = [];

for(var i=0; i<elements.length; i++){
	classeslist.push(elements[i].getAttribute('color-change'));

	elements[i].addEventListener("click",function(){

		document.body.classList.remove(...classeslist);
		document.body.classList.add(this.getAttribute('color-change'));
		localStorage.setItem("changecolor",this.getAttribute('color-change'));
	},false); // false > to deal with click only
}