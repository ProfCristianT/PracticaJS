const ampliarProductos = document.querySelector('#ampliarProductos');

	document.querySelectorAll("#productos a.producto").forEach( (producto,i,productos) => {
		producto.addEventListener('click', ev=>{
			//saco .active a todos
			productos.forEach(producto => {
				producto.classList.remove('active');
			})

			/*
			if (ev.target.tagName !== 'A'){
				ev.target.parentElement.classList.add('active');
			}else{
				ev.target.classList.add('active');
			}
			*/
			//agrego .active al que recibio el evento
			producto.classList.add('active');

			//agrego active a #ampliarProducto
			ampliarProductos.classList.add('active');
			ampliarProductos.innerHTML = '<a class="close" title="Cerrar">X</a>';
			ampliarProductos.innerHTML += producto.innerHTML;

			ampliarProductos.querySelector('a.close').addEventListener('click', ev =>{
				ampliarProductos.classList.remove('active');
				producto.classList.remove('active');
			})
		})
	})