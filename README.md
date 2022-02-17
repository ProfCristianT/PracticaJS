Les doy la bienvenida a este proyecto intregrador cuyo objetivo es poner en practica lo aprendido, fijar conocimientos y, por qué no, entrar en crisis un par de veces

TODO el codigo js se hara en el archivo index.js que esta en la carpeta js

Mucha suerte y tengan paciencia!

--------------------------------------------------------
FASE 1:
Trabajo sobre archivo productos.html
*El objetivo final sera que al hacer click en en alguno de los productos se muestre la informacion completa del mismo en la seccion #ampliarProductos . A su vez el producto que se este mostrando tendra una clase especial para diferenciarlo de los demas .active

-Tomar todos los a.producto del section #productos y aplicarles un evento de click
-Al registrarse el evento se le debera quitar la clase .active a todos los a.producto para agregarlo solamente al que recibio el evento

-Tomar el section#ampliarProductos (se lo puede atrapar por fuera del evento para no repetir el querySelector tantas veces)
-Colocarle la clase .active para que se visualice, ya que posee display none cuando no tiene esa clase
-Agregar en el innerHTMl este a -> 
	<a class="close" title="Cerrar">X</a>
-Agregar tambien en el innerHTML el mismo innerHTML que posee el a.producto que recibio el evento

-Agregar un evento de click al a.close que acaban de agregar en el innerHTML del section#ampliarProductos (se debe agregar el evento luego de agregar el nuevo elemento, sino no funciona)
-Al registrar el evento se removera la clase .active tanto del section#ampliarProductos como del a.producto que la posee


----------------------------------------------------
FASE 2:
Trabajar sobre el archivo de crear-cuenta.html
*Objetivo general: generar la validacion del formulario trabajndo con la API de validaicon del navegador y con span de mensajes de error para el usuario

-Generar los span con la clase .err en los div.campo

-Nombre y Apellido y Calle: Debe tener al menos 3 caracteres y como maximo 25. No puede haber mas de 3 palabras

-TElefono: debe tener solo 10 caracteres numericos 

-Email: Debe tener el siguiente formato: a@a.a o a@a.a.a / solo se permiten caracteres alfanumericos ademas del @

-Numeracion: Debe tener solo caracteres numericos, con un maximo de 5 caracteres

-Cod Postal: Debe tener solo caracteres numericos, con un maximo de 8 caracteres


----------------------------------------------------------------
FASE 3:
Hacer una consulta REST a JSONPlaceholder trayendo la info de los usuarios y mostrandola en la tabla

--------------------------------------------------------------------
FASE 4:
Convertir en una SPA usando la API de History