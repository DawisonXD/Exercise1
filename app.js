const squareR = document.querySelector('.squareR');
const squareB = document.querySelector('.squareB');
const circleR = document.querySelector('.circleR');
const circleB = document.querySelector('.circleB');

let isRed;
let isBlue;

squareR.addEventListener('dragover', (e) => {
	e.preventDefault();
});
circleR.addEventListener('dragstart', (e) => {
	isRed = true;
});
squareR.addEventListener('drop', (e) => {
	if (isRed) {
		squareR.append(circleR);
		circleR.setAttribute('draggable', false);
	}
});
circleR.addEventListener('dragend', (e) => {
	isRed = false;
});

squareB.addEventListener('dragover', (e) => {
	e.preventDefault();
});
circleB.addEventListener('dragstart', (e) => {
	isBlue = true;
});
squareB.addEventListener('drop', (e) => {
	if (isBlue) {
		squareB.append(circleB);
		circleB.setAttribute('draggable', false);
	}
});
circleB.addEventListener('dragend', (e) => {
	isBlue = false;
});
