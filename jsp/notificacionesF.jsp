<%-- 
    Document   : notificaciones
    Created on : 12-ene-2022, 17:33:59
    Author     : Usuario
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/f1fe361482.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="css/notificaciones.css">
        <title>NotificacionesF</title>

        <!---------------------------FUENTES-------------------------------->

        <!-- Zen Maru Gothic-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300&display=swap" rel="stylesheet"> 

        <!-- Raleway -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@900&family=Zen+Old+Mincho&display=swap" rel="stylesheet">

        <!-- Open Sans Condensed -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Raleway:wght@900&family=Zen+Old+Mincho&display=swap" rel="stylesheet">
       <!------------------------------------------------------------------>
    </head>
    <body id="body">
        <header>
        <div class="iconMenu">
            <i class="fas fa-bars" id="btnOpen"></i>
        </div>
        </header>

        <div class="menuSide" id="menuSide">

            <div class="namePage">
                <i class="fas fa-bell"></i>
                <h4 class="nameMenu">YGEÍA</h4>
            </div>

            <div class="optionsMenu">

                <a href="./principalT.html">
                    <div class="option">
                        <i class="fas fa-home" title="Inicio"></i>
                        <h4>Inicio</h4>
                    </div>
                </a>

                <a href="./notificacionesF.html" class="selected">
                    <div class="option">
                         <i class="fas fa-envelope" title="Notificaciones"></i>
                        <h4>Notificaciones</h4>
                    </div>
                </a>

                <a href="./avisoInfectado.html">
                    <div class="option">
                        <i class="fas fa-exclamation-triangle" title="Aviso de infectado"></i>
                        <h4>Aviso de infectado</h4>
                    </div>
                </a>

            </div>

        </div>

        <main>

            <div class="notificacion">
                <img src="/assets/img/buzon.png" alt="Buzon" class="buzon" id="buzon">
                <h3>No se han recibido notificaciones</h3>
            </div>

        </main>

        <script src="js/notificaciones.js"></script>
    </body>
</html>
