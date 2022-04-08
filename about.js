console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Submitted Successfully")
	// console.log('form submit');
}

function yourCool(evt) {
	alert("You're Cool!")
}

let form = document.querySelector('form#contact');
let img = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', yourCool);