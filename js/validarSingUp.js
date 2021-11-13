const numero = document.getElementById("id")
const nombre = document.getElementById("nombre")
const apPater = document.getElementById("apPater")
const apMater = document.getElementById("apMater")
const pass = document.getElementById("pass")
const formulario = document.getElementById("formulario")
const parrafo = document.getElementById("advertencia")


formulario.addEventListener("submit", e=>{
	e.preventDefault()
	let advertencia = ""
	let entrar = false
	let contraseña = ""
	let digitos = /^([0-9])*$/
	let letras1 = /^[a-zA-Z]+( [a-zA-Z]+)?$/
	let letras2 = /^[a-zA-Z]+$/

	if (!digitos.test(numero.value)){
		advertencia = "La boleta o número de empleado no es válido"
		entrar = true
	}
	else if (!letras1.test(nombre.value)) {
		advertencia = "El nombre no es válido"
		entrar = true
	}
	else if (!letras2.test(apPater.value)) {
		advertencia = "El apellido paterno no es válido"
		entrar = true
	}
	else if (!letras2.test(apMater.value)) {
		advertencia = "El apellido materno no es válido"
		entrar = true
	}
	else if (pass.value.length <8) {
		advertencia = "La contraseña no es válida"
		entrar = true
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

//Funcion del selectBox

const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');
const container = document.getElementById('container');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		container.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
	container.classList.toggle('active');
});