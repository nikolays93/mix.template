const header = function(elementClass) {
	const header = document.querySelector(elementClass);
	if (!header) return;

	console.log(elementClass, 'is loaded', header);
}

export default header