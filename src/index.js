function toDOM (html) {
	const div = document.createElement("div");
	div.innerHTML = html;
	return [...div.childNodes];
}


function line (x, x1, y1, x2, y2) {
	return (x - x1) / (x2 - x1) * (y2 - y1) + y1;
}

function intersect (rect1, rect2) {
	return !(
		rect1.right < rect2.left ||
		rect1.left > rect2.right ||
		rect1.bottom < rect2.top ||
		rect1.top > rect2.bottom
	);
}

function getViewport () {
	return {
		left: 0,
		right: window.innerWidth || document.documentElement.clientWidth,
		top: 0,
		bottom: window.innerHeight || document.documentElement.clientHeight
	};
}

function inTopViewport (el) {
	if (el instanceof $) {
		el = el[0];
	}
	const rect = el.getBoundingClientRect();
	const viewport = getViewport();
	return rect.top < viewport.top && rect.bottom > viewport.top && !(rect.right < viewport.left || rect.left > viewport.right);
}

function inViewport (el) {
	const rect = el.getBoundingClientRect();
	const viewport = getViewport();
	return intersect(rect, viewport);
}

class VirtualScroll {
	constructor (scrollContainer, createElement) {
		this.scrollContainer = scrollContainer;
		this.placeholder = toDOM(`<div></div>`)[0];
		this.placeholder.appendTo(scrollContainer);
		this.container = toDOM(`<div></div>`)[0];
		this.container.appendTo(scrollContainer);
		this.createElement = createElement;
		this.buffer = [];
		this.idx = 0;
	}
	set size (val) {
		this._size = val;
		this.update;
	}
	isFilled () {
		const rect = this.container.getBoundingClientRect();
	}
	update () {
		// заполняем видимую область скроллера

		// вычисляем средний размер элемента

		// вычисляем полную высоту скроллера
		function bufferFilled () {

		}
	}
}
