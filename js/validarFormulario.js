const numero = document.getElementById("id")
const tel = document.getElementById("tel")
const formulario = document.getElementById("formulario")
const parrafo = document.getElementById("advertencia")
const email = document.getElementById("email")
var archivoInput = document.getElementById('archivoInput');



formulario.addEventListener("submit", e=>{
	e.preventDefault()
	let advertencia = ""
	let entrar = false
	let digitos = /^([0-9])*$/;
	let email = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	var archivoRuta = archivoInput.value;
    var extPermitidas = /(.pdf)$/i;

	if (!digitos.test(id.value)){
		advertencia = "La boleta o número de empleado no es válido"
		entrar = true
	}
	else if (!digitos.test(tel.value)) {
		advertencia = "El número no es válido"
		entrar = true
	}

	else {
		if(!extPermitidas.exec(archivoRuta)){
	        advertencia = "Asegurese de haber seleccionado un archivo en formato PDF"
	        entrar = true;
	        archivoInput.value = '';
	        ///return false;
	    }
	    else{
	        if (archivoInput.files && archivoInput.files[0]){
	            var visor = new FileReader();
	            visor.onload = function(e){
	            document.getElementById('visorArchivo').innerHTML = 
	            '<embed src="'+e.target.result+'" width="500" height="375" />';
	            };
	            visor.readAsDataURL(archivoInput.files[0]);
	        }
	    }
	 }

	//Se muestran los alert
	if(entrar){
		Swal.fire({
			icon: `error`,
			title: `Oops!`,
			html: advertencia,
			confirmButtonColor: `#4dc1dc`,

			customClass:{
			title: `alertTitulo`,
			htmlContainer: `alertText`
			}
			
		});
	}
	else
	Swal.fire({
		icon: `success`,
		title: `Registrado!!`,
		html: `Se ha registrado correctamente`,
		confirmButtonColor: `#4dc1dc`,

		customClass:{
		title: `alertTitulo`,
		htmlContainer: `alertText`
		}
		
	});

})