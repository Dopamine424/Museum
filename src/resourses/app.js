window.onload = function() {
	setTimeout(function() {
	document.body.classList.add('loaded')
	if (window.matchMedia('(min-width: 992px)').matches) { // If not mobile
	Draggable.create('.gallery', {
	bounds: 'body',
	inertia: true
	})
	
	}
	// Обработчик клика на элементы галереи
	$('.gallery__item').click(function() {
	window.location.href = 'col.html';
	});
	}, 200)
	}
document.querySelectorAll('.cursor').forEach(node => {
    document.addEventListener('mousemove', e => {
        node.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;` 
    })
});