<%-- 
    Document   : notificacionesT
    Created on : 12-ene-2022, 17:36:46
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
        <title>Notificaciones</title>

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
    <body>
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

                <a href="#">
                    <div class="option">
                        <i class="fas fa-home" title="Inicio"></i>
                        <h4>Inicio</h4>
                    </div>
                </a>

                <a href="#" class="selected">
                    <div class="option">
                         <i class="fas fa-envelope" title="Notificaciones"></i>
                        <h4>Notificaciones</h4>
                    </div>
                </a>

                <a href="#">
                    <div class="option">
                        <i class="fas fa-exclamation-triangle" title="Aviso de infectado"></i>
                        <h4>Aviso de infectado</h4>
                    </div>
                </a>

            </div>

        </div>

        <main>

            <div class="notificacion" id="notificacion">
                <!--
                <div class="tarjeta">
                    <i class="fas fa-exclamation-circle warningIcon"></i>
                    <h4 class="textNotifi">Has estado en contacto con una persona infectada</h4>
                    <i class="fas fa-plus-circle plusIcon" id="plusIcon"></i>
                    <i class="fas fa-trash-alt trashIcon"></i>
                </div>
                -->

            </div>

        </main>

        <script src="js/notificaciones.js"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script> <!--Esto es una libreria para las alertas-->
    </body>
</html>
