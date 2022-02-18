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


/*
-Generar los span con la clase .err en los div.campo

-Nombre y Apellido y Calle: Debe tener al menos 3 caracteres y como maximo 25. No puede haber mas de 3 palabras
*/


	const form = document.querySelector("#crearCuenta form");


	//Nombre
	form.nombre.addEventListener('blur', ev => {
		console.log(ev.target.value.length)
		msj = "";
		if(ev.target.value.length < 3){
			msj = "El nombre debe tener al menos 3 caracteres";
		
		}else if(ev.target.value.length > 25){
			msj = "El nombre puede tener como máximo 25 caracteres";

		}else if( ev.target.value.split(" ").length > 3  ){
			msj = "El nombre puede tener como máximo 3 palabras";

		}

		ev.target.parentElement.querySelector(".errMsj").innerText = msj;
		ev.target.setCustomValidity(msj);

		if(msj === ""){
			ev.target.parentElement.classList.add('valid')
			ev.target.parentElement.classList.remove('invalid')
		}else{
			ev.target.parentElement.classList.add('invalid')
			ev.target.parentElement.classList.remove('valid')
		}
	})

	form.nombre.addEventListener("focus", ev => {
		ev.target.setCustomValidity("");
	})



	//Apellido
	form.apellido.addEventListener('blur', ev => {
		console.log(ev.target.value.length)
		msj = "";
		if(ev.target.value.length < 3){
			msj = "El apellido debe tener al menos 3 caracteres";
		
		}else if(ev.target.value.length > 25){
			msj = "El apellido puede tener como máximo 25 caracteres";

		}else if( ev.target.value.split(" ").length > 3  ){
			msj = "El apellido puede tener como máximo 3 palabras";

		}

		ev.target.parentElement.querySelector(".errMsj").innerText = msj;
		ev.target.setCustomValidity(msj);

		if(msj === ""){
			ev.target.parentElement.classList.add('valid')
			ev.target.parentElement.classList.remove('invalid')
		}else{
			ev.target.parentElement.classList.add('invalid')
			ev.target.parentElement.classList.remove('valid')
		}
	})

	form.apellido.addEventListener("focus", ev => {
		ev.target.setCustomValidity("");
	})



	//Telefono
	//-Telefono: debe tener solo 10 caracteres numericos
	form.telefono.addEventListener('blur', ev => {
		msj = "";
		regExpTel = /^\d{10}$/


		if(  ! regExpTel.test(ev.target.value)  ){
			msj = "El teléfono debe tener solo 10 caracteres numericos";
		}

		ev.target.parentElement.querySelector(".errMsj").innerText = msj;
		ev.target.setCustomValidity(msj);

		if(msj === ""){
			ev.target.parentElement.classList.add('valid')
			ev.target.parentElement.classList.remove('invalid')
		}else{
			ev.target.parentElement.classList.add('invalid')
			ev.target.parentElement.classList.remove('valid')
		}
	})

	form.telefono.addEventListener("focus", ev => {
		ev.target.setCustomValidity("");
	})


	// Email
	//-Email: Debe tener el siguiente formato: a@a.a o a@a.a.a / solo se permiten caracteres alfanumericos, puntos, guiones medios y guines bajos ademas del @
	form.email.addEventListener('blur', ev => {
		msj = "";
		regExpEmail = /^(\w|-|_|.){2,}@\w+(.\w+){1,3}$/g

		if( !regExpEmail.test(ev.target.value) ){
			msj = "Ingrese un email válido";
		
		}

		ev.target.parentElement.querySelector(".errMsj").innerText = msj;
		ev.target.setCustomValidity(msj);

		if(msj === ""){
			ev.target.parentElement.classList.add('valid')
			ev.target.parentElement.classList.remove('invalid')
		}else{
			ev.target.parentElement.classList.add('invalid')
			ev.target.parentElement.classList.remove('valid')
		}
	})

	form.email.addEventListener("focus", ev => {
		ev.target.setCustomValidity("");
	})


	// Calle
	//-Calle: hasta 40 caracteres alfanumericos
	form.calle.addEventListener('blur', ev => {
		regExpCalle = /^\w{3,40}$/;
		msj = "";

		if( !regExpCalle.test(ev.target.value) ){
			msj = "Debe tener entre 3 y 40 caracteres alfanumericos";
		}

		ev.target.parentElement.querySelector(".errMsj").innerText = msj;
		ev.target.setCustomValidity(msj);

		if(msj === ""){
			ev.target.parentElement.classList.add('valid')
			ev.target.parentElement.classList.remove('invalid')
		}else{
			ev.target.parentElement.classList.add('invalid')
			ev.target.parentElement.classList.remove('valid')
		}
	})

	form.calle.addEventListener("focus", ev => {
		ev.target.setCustomValidity("");
	})

	// Numeracion
	//-Numeracion: Debe tener solo caracteres numericos, con un maximo de 5 caracteres
	form.numeracion.addEventListener('blur', ev => {
		regExpNum = /^\d{1,5}$/
		msj = "";
		if( !regExpNum.test(ev.target.value) ){
			msj = "Coloque una numeracion entre 1 y 99999";
		
		}

		ev.target.parentElement.querySelector(".errMsj").innerText = msj;
		ev.target.setCustomValidity(msj);

		if(msj === ""){
			ev.target.parentElement.classList.add('valid')
			ev.target.parentElement.classList.remove('invalid')
		}else{
			ev.target.parentElement.classList.add('invalid')
			ev.target.parentElement.classList.remove('valid')
		}
	})

	form.numeracion.addEventListener("focus", ev => {
		ev.target.setCustomValidity("");
	})



	// Ciudad
	//-Ciudad: hasta 40 caracteres alfanumericos
	form.ciudad.addEventListener('blur', ev => {
		expRegCiudad = /^\w{3,40}$/ 
		msj = "";
		if(ev.target.value.length < 3){
			msj = "La ciudad debe tener entres 3 y 40 caracteres alfanumericos";
		}

		ev.target.parentElement.querySelector(".errMsj").innerText = msj;
		ev.target.setCustomValidity(msj);

		if(msj === ""){
			ev.target.parentElement.classList.add('valid')
			ev.target.parentElement.classList.remove('invalid')
		}else{
			ev.target.parentElement.classList.add('invalid')
			ev.target.parentElement.classList.remove('valid')
		}
	})

	form.ciudad.addEventListener("focus", ev => {
		ev.target.setCustomValidity("");
	})

	// COD Postal
	//-Cod Postal: Debe tener una letra y luego entre 4 y 6 caracteres numericos
	form.CP.addEventListener('blur', ev => {
		expRegCP = /^[a-z]{1}\d{4,6}$/ 
		msj = "";
		if( !expRegCP.test(ev.target.value) ){
			msj = "El Cod Postal debe tener una letra y entre 4 y 6 numeros";
		}

		ev.target.parentElement.querySelector(".errMsj").innerText = msj;
		ev.target.setCustomValidity(msj);

		if(msj === ""){
			ev.target.parentElement.classList.add('valid')
			ev.target.parentElement.classList.remove('invalid')
		}else{
			ev.target.parentElement.classList.add('invalid')
			ev.target.parentElement.classList.remove('valid')
		}
	})

	form.CP.addEventListener("focus", ev => {
		ev.target.setCustomValidity("");
	})

	// Nombre Empresa
	//-Nombre de Empresa: hasta 40 caracteres alfanumericos, ademas de espacios, puntos, comas y apostofres simples

	form.nombreEmpresa.addEventListener('blur', ev => {
		expRegCP = /^[\w.,' ]{3,40}$/ 
		msj = "";
		if( !expRegCP.test(ev.target.value) ){
			msj = "El nombre debe tener entre 3 y 40 caracteres. Sólo se permiten caracteres alfanumericos, espacios, comas, puntos y apóstrofes simples";
		}

		ev.target.parentElement.querySelector(".errMsj").innerText = msj;
		ev.target.setCustomValidity(msj);

		if(msj === ""){
			ev.target.parentElement.classList.add('valid')
			ev.target.parentElement.classList.remove('invalid')
		}else{
			ev.target.parentElement.classList.add('invalid')
			ev.target.parentElement.classList.remove('valid')
		}
	})

	form.nombreEmpresa.addEventListener("focus", ev => {
		ev.target.setCustomValidity("");
	})

	// Razon Social
	// -Razon Social: Selecionar alguno de los valores
	form.razonSocial.addEventListener('click', ev => {
		msj = "";
		if( ev.target.value === ""){
			msj = "Seleccione una opcion válida";
		}

		ev.target.parentElement.querySelector(".errMsj").innerText = msj;
		ev.target.setCustomValidity(msj);

		if(msj === ""){
			ev.target.parentElement.classList.add('valid')
			ev.target.parentElement.classList.remove('invalid')
		}else{
			ev.target.parentElement.classList.add('invalid')
			ev.target.parentElement.classList.remove('valid')
		}
	})

	form.nombre.addEventListener("focus", ev => {
		ev.target.setCustomValidity("");
	})