'use strict';
let main = document.querySelector('.main-modal');
let btn = document.querySelector('button');
let X = document.querySelector('.X');
let myMain = document.querySelector('main');

// display modal
btn.addEventListener('click', () => {
	main.style.display = 'block';
	myMain.style.filter = 'blur(10px)';
});

X.addEventListener('click', () => {
	main.style.display = 'none';
	myMain.style.filter = 'blur(0px)';
});

// hidden modal
main.addEventListener('click', e => {
	if (e.target.className == 'main-modal') {
		main.style.display = 'none';
		myMain.style.filter = 'blur(0px)';
	}
});
