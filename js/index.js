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



// VALIDACION FORM

	const form = document.querySelector("#crearCuenta form");

	form.querySelectorAll('input').forEach( input => {
		input.addEventListener('focus', ev => {
			ev.target.parentElement.classList.remove('invalid')
		})
	} );


	const validity = (element, eventType, callback) => {
		element.addEventListener(eventType, ev => {
			
			msj = callback(ev);

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
	}

	//Nombre
	//Debe tener al menos 3 caracteres y como maximo 25. No puede haber mas de 3 palabras
	validity(form.nombre , "blur", (ev) => {
		msj = "";
		if(ev.target.value.length < 3){
			msj = "El nombre debe tener al menos 3 caracteres";
		
		}else if(ev.target.value.length > 25){
			msj = "El nombre puede tener como máximo 25 caracteres";

		}else if( ev.target.value.split(" ").length > 3  ){
			msj = "El nombre puede tener como máximo 3 palabras";

		}
		return msj;
	});

	



	//Apellido
	//Debe tener al menos 3 caracteres y como maximo 25. No puede haber mas de 3 palabras
	validity(form.apellido , "blur", (ev) => {
		msj = "";
		if(ev.target.value.length < 3){
			msj = "El apellido debe tener al menos 3 caracteres";
		
		}else if(ev.target.value.length > 25){
			msj = "El apellido puede tener como máximo 25 caracteres";

		}else if( ev.target.value.split(" ").length > 3  ){
			msj = "El apellido puede tener como máximo 3 palabras";

		}
		return msj;
	});
	


	//Telefono
	//-Telefono: debe tener solo 10 caracteres numericos
	validity(form.telefono , "blur", (ev) => {
		msj = "";
		regExpTel = /^\d{10}$/

		if(  ! regExpTel.test(ev.target.value)  ){
			msj = "El teléfono debe tener solo 10 caracteres numericos";
		}

		return msj;
	});
	
	

	// Email
	//-Email: Debe tener el siguiente formato: a@a.a o a@a.a.a / solo se permiten caracteres alfanumericos, puntos, guiones medios y guines bajos ademas del @
	validity(form.email , "blur", (ev) => {
		msj = "";
		regExpEmail = /^(\w|-|_|.){2,}@\w+(.\w+){1,3}$/g

		if( !regExpEmail.test(ev.target.value) ){
			msj = "Ingrese un email válido";
		
		}

		return msj;
	});
	
	

	// Calle
	//-Calle: hasta 40 caracteres alfanumericos
	validity(form.calle , "blur", (ev) => {
		msj = "";
		regExpCalle = /^\w{3,40}$/;

		if( !regExpCalle.test(ev.target.value) ){
			msj = "Debe tener entre 3 y 40 caracteres alfanumericos";
		}

		return msj;
	});
	


	// Numeracion
	//-Numeracion: Debe tener solo caracteres numericos, con un maximo de 5 caracteres
	validity(form.numeracion , "blur", (ev) => {
		msj = "";
		regExpNum = /^\d{1,5}$/

		if( !regExpNum.test(ev.target.value) ){
			msj = "Coloque una numeracion entre 1 y 99999";
		}

		return msj;
	});



	// Ciudad
	//-Ciudad: hasta 40 caracteres alfanumericos
	validity(form.ciudad , "blur", (ev) => {
		msj = "";
		expRegCiudad = /^\w{3,40}$/ 

		if(ev.target.value.length < 3){
			msj = "La ciudad debe tener entres 3 y 40 caracteres alfanumericos";
		}
		
		return msj;
	});

	
	// COD Postal
	//-Cod Postal: Debe tener una letra y luego entre 4 y 6 caracteres numericos
	validity(form.CP , "blur", (ev) => {
		msj = "";
		expRegCP = /^[a-z]{1}\d{4,6}$/ 

		if( !expRegCP.test(ev.target.value) ){
			msj = "El Cod Postal debe tener una letra y entre 4 y 6 numeros";
		}
		
		return msj;
	});



	// Nombre Empresa
	//-Nombre de Empresa: hasta 40 caracteres alfanumericos, ademas de espacios, puntos, comas y apostofres simples
	validity(form.nombreEmpresa , "blur", (ev) => {
		msj = "";
		expRegCP = /^[\w.,' ]{3,40}$/ 

		if( !expRegCP.test(ev.target.value) ){
			msj = "El nombre debe tener entre 3 y 40 caracteres. Sólo se permiten caracteres alfanumericos, espacios, comas, puntos y apóstrofes simples";
		}
		
		return msj;
	});


	// Razon Social
	// -Razon Social: Selecionar alguno de los valores
	validity(form.razonSocial , "click", (ev) => {
		msj = "";

		if( ev.target.value === ""){
			msj = "Seleccione una opcion válida";
		}
		
		return msj;
	});