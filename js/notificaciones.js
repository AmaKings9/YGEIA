//Ejecutar función en el evento click
document.getElementById("btnOpen").addEventListener("click", openCloseMenu);
document.getElementById("btnOpen").addEventListener("click", iconPosition);

//Declaramos variables
var sideMenu = document.getElementById("menuSide");
var btnOpen = document.getElementById("btnOpen");
var body = document.getElementById("body");
var buzon = document.getElementById("buzon");
var plusIcon = document.getElementById("plusIcon");


//Evento para mostrar y ocultar menú
    function openCloseMenu(){
        body.classList.toggle("bodyMove");
        sideMenu.classList.toggle("menuSideMove");

    if(buzon != null){
        buzon.classList.toggle("buzonMove");
    }
    }

    function iconPosition(){
        if(plusIcon != null){
            plusIcon.classList.toggle("plusIconMove");
        }        
    }
//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("bodyMove");
    sideMenu.classList.add("menuSideMove");

}



//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("bodyMove");
        sideMenu.classList.remove("menuSideMove");
    }

    if (window.innerWidth < 760){

        body.classList.add("bodyMove");
        sideMenu.classList.add("menuSideMove");
    }

});

//El contenido del main

let hayNotifi = false;

if (hayNotifi == false){

}

//Notificacion

function agregarNoti(day, month, year){
    this.day = day;
    this.month = month;
    this.year = year;
    var elemento = document.createElement("div");

    elemento.innerHTML= `<div class="tarjeta">
    <i class="fas fa-exclamation-circle warningIcon"></i>
    <h4 class="textNotifi">Has estado en contacto con una persona infectada</h4>
    <h4 class="textDate">Fecha: `+ day +`/`+ month +`/`+ year +`</h4>
    <i class="fas fa-trash-alt trashIcon" id="trashIcon"></i>
    </div>` ;
    document.getElementById("notificacion").appendChild(elemento);
}

function agregarNotiName(name, lastName1, lastName2, day, month, year){
    this.lastName1 = lastName1;
    this.lastName2 = lastName2;
    this.name = name;
    this.day = day;
    this.month = month;
    this.year = year;
    var elemento = document.createElement("div");

    elemento.innerHTML= `<div class="tarjeta">
    <i class="fas fa-exclamation-circle warningIcon"></i>
    <h4 class="textNotifi">Has estado en contacto con una persona infectada</h4>
    <h4 class="textName">Persona contagiada: <br /> `+ name + ` ` +lastName1 + ` ` + lastName2 + `</h4>
    <h4 class="textDate">Fecha: `+ day +`/`+ month +`/`+ year +`</h4>
    <i class="fas fa-trash-alt trashIconName"></i>
    </div>` ;
    document.getElementById("notificacion").appendChild(elemento);
}

function agregarNotiAdmin(name, lastName1, lastName2, day, month, year){
    this.lastName1 = lastName1;
    this.lastName2 = lastName2;
    this.name = name;
    this.day = day;
    this.month = month;
    this.year = year;
    var elemento = document.createElement("div");

    elemento.innerHTML= `<div class="tarjeta">
    <i class="fas fa-envelope-open-text infoIcon"></i>
    <h4 class="textNotifi">Has recibido un formulario de infectado</h4>
    <h4 class="textName">Enviado por: <br /> `+ name + ` ` +lastName1 + ` ` + lastName2 + `</h4>
    <h4 class="textDate">Fecha: `+ day +`/`+ month +`/`+ year +`</h4>
    <i class="fas fa-trash-alt trashIconName"></i>
    </div>` ;
    document.getElementById("notificacion").appendChild(elemento);
}

var opc = true;

if (opc == true){
    agregarNoti("15","06","2021");
    agregarNotiName("Fernando", "Mendoza", "Gonzalez", "05","12","2011");
    agregarNotiAdmin("Fernando", "Mendoza", "Gonzalez", "05","12","2011");
}

//El boton de Borrar Notificacion
var trashIcon = document.getElementById("trashIcon");
trashIcon.addEventListener("click", borrarNotifi);

var trashIconName = document.querySelectorAll(".trashIconName");
for (var i = 0; i < trashIconName.length; i++) {
    trashIconName[i].addEventListener("click", borrarNotifi);
}

function borrarNotifi(){
    Swal.fire({
        icon: `question`,
        title: `¿Estas seguro de Borrar la Notificación?`,
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: `Cancelar`,
        confirmButtonColor: `#4dc1dc`,

        customClass:{
        title: `alertTitulo`,
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: `info`,
                title: `Se borro la Notificacion`,
                confirmButtonText: 'Aceptar',
                confirmButtonColor: `#4dc1dc`,
        
                customClass:{
                title: `alertTitulo`,
                }
            })
        }
    })
}
