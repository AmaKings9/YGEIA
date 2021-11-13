const numero = document.getElementById("numero")
const pass = document.getElementById("pass")
const formulario = document.getElementById("formulario")
const parrafo = document.getElementById("advertencia")


formulario.addEventListener("submit", e=>{
	e.preventDefault()
	let advertencia = ""
	let entrar = false
	let digitos = /^([0-9])*$/
	parrafo.innerHTML = ""

	if (!digitos.test(numero.value)){
		advertencia = "La boleta o número de empleado no es válido"
		entrar = true
	}
	else if (pass.value.length <8) {
		advertencia = "La contraseña no es válida"
		entrar = true
	}
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
		title: `Bienvenido!!`,
		confirmButtonColor: `#4dc1dc`,

		customClass:{
		title: `alertTitulo`,
		htmlContainer: `alertText`
		}
		
	});

})