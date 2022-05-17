inicio();

// DIVS

function inicio() {
    document.querySelector("#btnIngresoComoDocente").addEventListener("click", mostrarUsuarioAnonimoDocente);
    document.querySelector("#btnIngresoComoAlumno").addEventListener("click", mostrarUsuarioAnonimoAlumno);
    document.querySelector("#btnRegistrarseDocente").addEventListener("click", ingresarRegistrarseDocente);
    document.querySelector("#btnRegistrarseAlumno").addEventListener("click", ingresarRegistrarseAlumno);
    document.querySelector("#btnLogIn").addEventListener("click", ingresarDatosLogIn);
    document.querySelector("#btnLogOut").addEventListener("click", logOut);
    document.querySelector("#btnIngresarEjercicio").addEventListener("click", ingresarDatosEjercicio);

    //docente
    document.querySelector("#btnInformacionEstadisticaDocente").addEventListener("click", VerInformacionEstadisticaDocente);
    document.querySelector("#btnAsignarUnIdAlumno").addEventListener("click", asignarNivelAlumno);
    document.querySelector("#btnEjerciciosParaHacerDevolucion").addEventListener("click", mostrarEjerciciosDevolucion);
    document.querySelector("#btnArmarEjercicio").addEventListener("click", mostrarCrearEjercicio);
    document.querySelector("#btnAlumnoMasEjercicios").addEventListener("click", calcularEstadisticaAlumnoMasEjercicios);
    document.querySelector("#btnCantidadEjerciciosEntregados").addEventListener("click", calcularEstadisticaCantidadEjerciciosEntregados);
    document.querySelector("#btnEjerciciosResueltosDelAlumno").addEventListener("click", tomarDatosCalcularEjerciciosDelAlumno);

    //alumno
    document.querySelector("#btnBuscarEj").addEventListener("click", mostrarBuscarEjercicio);
    document.querySelector("#btnEjerciciosResueltos").addEventListener("click", mostrarEjerciciosResueltos);
    document.querySelector("#btnInformacionEstadistica").addEventListener("click", mostrarInfoEstadisticaAlumno);
    document.querySelector("#btnEntrgaEjercicios").addEventListener("click", mostrarEntregaEjercicios);
    document.querySelector("#btnBuscarEjercicioAlumno").addEventListener("click", tomarDatosBusquedaEjercicioPorPalabra);
    document.querySelector("#btnVerPorcentajeEjerciciosResueltos").addEventListener("click", calcularPorcentajeEjerciciosResueltos);
    document.querySelector("#btnCalcularDevolucion").addEventListener("click", calcularEjerciciosSinDevolucion);


    cargarDatos();
    ocultarUsuarioAnonimo();



}


function mostrarUsuarioAnonimoDocente() {
    document.querySelector("#divRegistroDocenteAlumno").style.display = "none";
    document.querySelector("#btnRegistrarseAlumno").style.display = "none";
    document.querySelector("#btnRegistrarseDocente").style.display = "block";
    document.querySelector("#pRegistrarse").innerHTML = ``;
    document.querySelector("#pLogIn").innerHTML = ""
    document.querySelector("#H3Registro").innerHTML = `Registro Docente`;
    mostrarIUsuarioAnonimo();
}

function mostrarUsuarioAnonimoAlumno() {

    document.querySelector("#divRegistroDocenteAlumno").style.display = "block";
    document.querySelector("#btnRegistrarseAlumno").style.display = "block";
    document.querySelector("#btnRegistrarseDocente").style.display = "none";
    document.querySelector("#pRegistrarse").innerHTML = ``;
    document.querySelector("#pLogIn").innerHTML = ""
    document.querySelector("#H3Registro").innerHTML = `Registro Alumno`;
    mostrarIUsuarioAnonimo();
    cargarTablaDocentes();


}


function mostrarIUsuarioAnonimo() {

    document.querySelector("#divInterfazDocente").style.display = "none";
    document.querySelector("#divInterfazAlumno").style.display = "none";
    document.querySelector("#divBotonesInicio").style.display = "block";
    document.querySelector("#divLogInUsuario").style.display = "block";
    document.querySelector("#divRegistroUsuario").style.display = "block";
    document.querySelector("#divBotonesInicio").style.display = "block";



}



function ocultarUsuarioAnonimo() {
    document.querySelector("#divEjercicios").style.display = "none";
    document.querySelector("#divLogInUsuario").style.display = "block";
    document.querySelector("#divRegistroUsuario").style.display = "none";
    document.querySelector("#divInterfazDocente").style.display = "none";
    document.querySelector("#divInterfazAlumno").style.display = "none";
    document.querySelector("#btnLogOut").style.display = "none";
    document.querySelector("#navPrincipal").style.display = "none";
}

function ocultarPanelDocente() {
    document.querySelector("#divInterfazDocente").style.display = "block";
    document.querySelector("#divAsignarNivel").style.display = "none";
    document.querySelector("#divArmarEjercicio").style.display = "none";
    document.querySelector("#divRedactarDevolucion").style.display = "none";
    document.querySelector("#divResultadoRedactarDevolucion").style.display = "none";
    document.querySelector("#divInformacionEstadisticaDocente").style.display = "none";


}

function ocultarPanelAlumno() {
    document.querySelector("#divInterfazAlumno").style.display = "block";
    document.querySelector("#divVerEjerciciosParaAlumno").style.display = "none";
    document.querySelector("#divEntregaEjercicio").style.display = "none";
    document.querySelector("#divBuscarEjerciciosPlanteados").style.display = "none";
    document.querySelector("#divVerEjerciciosResueltos").style.display = "none";
    document.querySelector("#divEstadisticasAlumno").style.display = "none";



}

function mostrarPanelDocente() {
    ocultarUsuarioAnonimo();
    document.querySelector("#divBotonesInicio").style.display = "none";
    document.querySelector("#divLogInUsuario").style.display = "none";
    document.querySelector("#divInformacionEstadisticaDocente").style.display = "none";
    document.querySelector("#divInterfazDocente").style.display = "block";
    document.querySelector("#btnLogOut").style.display = "block";
    document.querySelector("#navPrincipal").style.display = "block";
    document.querySelector("#divSeccionDocente").style.display = "block";
    document.querySelector("#divSeccionAlumno").style.display = "none";
    document.querySelector("#divArmarEjercicio").style.display = "none";
    document.querySelector("#divRedactarDevolucion").style.display = "none";
    document.querySelector("#pBienvenidaUsuario").innerHTML = `Bienvenido ${usuarioLogueado.Rol} ${usuarioLogueado.NombreDocente}`;


}

function mostrarPanelAlumno() {
    ocultarUsuarioAnonimo();
    document.querySelector("#divBotonesInicio").style.display = "none";
    document.querySelector("#divLogInUsuario").style.display = "none";
    document.querySelector("#divInterfazAlumno").style.display = "block";
    document.querySelector("#divVerEjerciciosParaAlumno").style.display = "block";
    document.querySelector("#btnLogOut").style.display = "block";
    document.querySelector("#navPrincipal").style.display = "block";
    document.querySelector("#divSeccionDocente").style.display = "none";
    document.querySelector("#divBuscarEjerciciosPlanteados").style.display = "none";
    document.querySelector("#divVerEjerciciosResueltos").style.display = "none";
    document.querySelector("#divEstadisticasAlumno").style.display = "none";
    document.querySelector("#divSeccionAlumno").style.display = "block";
    document.querySelector("#pBienvenidaUsuario").innerHTML = `Bienvenido ${usuarioLogueado.Rol} ${usuarioLogueado.NombreAlumno}`;

    //  mostrarEjerciciosEnMuroAlumno();
}

function logOut() {
    usuarioLogueado = null;
    document.querySelector("#txtNombreUsuarioLogIn").value = "";
    document.querySelector("#txtPasswordLogIn").value = "";
    document.querySelector("#pBienvenidaUsuario").innerHTML = ""
    mostrarIUsuarioAnonimo()
    document.querySelector("#divLogInUsuario").style.display = "none";
    document.querySelector("#divRegistroUsuario").style.display = "none";
    document.querySelector("#btnLogOut").style.display = "none  ";
    document.querySelector("#navPrincipal").style.display = "none  ";
    document.querySelector("#divLogInUsuario").style.display = "block";
}



// FUNCIONES ALUMNOS

function cargarTablaDocentes() {
    let cadena = `<label for="slcEleccionAlumnoDocente">Elija su docente</label><br>
     <select id="slcEleccionAlumnoDocente"> <option value="ndf">No definido...</option>`;

    for (docente of listaDocentes) {
        cadena +=
            `<option value="${docente.IdDocente}">
    ${docente.NombreDocente}
    </option>`
    }

    cadena += `</select>`
    document.querySelector("#divRegistroDocenteAlumno").innerHTML = cadena;
}


function mostrarEntregaEjercicios() {
    ocultarPanelAlumno();
    document.querySelector("#divVerEjerciciosParaAlumno").style.display = "block";
    mostrarEjerciciosEnMuroAlumno();
}

function mostrarEjerciciosEnMuroAlumno() {
    let ejerciciosQuePuedeVerAlumno = new Array();
    let ejerciciosDelAlumno = devolverListaEjerciciosEntregadosDelAlumno();
    for (ej of ejerciciosDelAlumno) {
        if (!estaEnListaEntregasDelAlumno(ej)) {
            ejerciciosQuePuedeVerAlumno.push(ej);
        }
    }
    escribirEjerciciosAlumno(ejerciciosQuePuedeVerAlumno)
}


function escribirEjerciciosAlumno(unaListaEjercicios) {

    if (unaListaEjercicios.length > 0) {
        let cadena = `<h2>Lista Ejercicios Alumno</h2><br><br><br><br>`

        for (ej of unaListaEjercicios) {

            cadena += `
        <h3>${ej.Titulo}</h3><br> 
        <img src="img/${ej.Imagen}"><br>
        <p id="pDescripcionEjercicio${ej.IdEjercicio}"> ${ej.Descripcion}</p><br>
        <label for="audio${ej.IdEjercicio}">Ingrese el audio del ejercicio</label><br>
        <input type="file" id="audio${ej.IdEjercicio}"><br>
        <input type="button" class="btnRealizarEntregaEjercicio" id="btnRealizarEntrega${ej.IdEjercicio}" value="Realizar entrega"></input>
        <p id="pResultadoEntregaEjercicio${ej.IdEjercicio}"></p>
    `
        }
        cadena += `<p id="pMsjEntregaEjercicios"></p>`


        document.querySelector("#divVerEjerciciosParaAlumno").innerHTML = cadena;

        let botones = document.querySelectorAll(".btnRealizarEntregaEjercicio");

        for (boton of botones) {
            boton.addEventListener("click", tomarDatosEntregaEjercicio);
        }
    } else {
        document.querySelector("#divVerEjerciciosParaAlumno").innerHTML = `<h2>No tienes ejercicios  </h2><br>`;
    }


}


function tomarDatosEntregaEjercicio() {
    let idBotonTocado = this.getAttribute('id');
    let idEjericio = idBotonTocado.replace("btnRealizarEntrega", "");
    let ejercicioEncontrado = buscarEjercicio(idEjericio);
    let audioEntrega = document.querySelector("#audio" + idEjericio).value;
    audioEntrega = audioEntrega.replace(`C:\\fakepath\\`, ``);

    let nuevaEntragaAlumno = darAltaEntrega(ejercicioEncontrado, usuarioLogueado, audioEntrega);

    if (nuevaEntragaAlumno != null) {
        document.querySelector("#pMsjEntregaEjercicios").innerHTML = "Entregado con exito."
        mostrarEjerciciosEnMuroAlumno();
    } else {
        document.querySelector("#pMsjEntregaEjercicios").innerHTML = "Error en la entrega."
    }


}

function mostrarBuscarEjercicio() {
    ocultarPanelAlumno();
    document.querySelector("#divBuscarEjerciciosPlanteados").style.display = "block";

}

function tomarDatosBusquedaEjercicioPorPalabra() {
    let texto = document.querySelector("#txtBuscarEjercicioAlumno").value;

    if (texto != "") {
        let listaEjerciciosDelAlumno = devolverListaEjerciciosEntregadosDelAlumno();
        if (listaEjerciciosDelAlumno != null) {

            let listaEjerciciosEncontrados = new Array();
            listaEjerciciosEncontrados = buscarEjerciciosPorTexto(listaEjerciciosDelAlumno, texto);
            escribirEjerciciosAlumno(listaEjerciciosEncontrados)
            document.querySelector("#divVerEjerciciosParaAlumno").style.display = "block";


        }

    } else document.querySelector("#pResultadoBusquedaEjercicios").innerHTML = "No hay resultados en la busqueda, con el texto : " + texto;
}




function mostrarEjerciciosResueltos() {
    ocultarPanelAlumno();
    document.querySelector("#divVerEjerciciosResueltos").style.display = "block";
    armarListaEjerciciosResueltos();

}

function armarListaEjerciciosResueltos() {

    if (usuarioLogueado.listaEntregasDelAlumno != null) {
        escribirEjerciciosResueltos(usuarioLogueado.listaEntregasDelAlumno);
    } else document.querySelector("#pVerEjerciciosResueltos").innerHTML = `<h2>No tienes ejercicios entregados</h2><br>`;

}

function escribirEjerciciosResueltos(unaListaEntregas) {
    if (unaListaEntregas.length > 0) {
        let cadena = `<h2>Lista Ejercicios Alumno</h2><br>`

        for (entrega of unaListaEntregas) {
            cadena += `
        <h3>${entrega.Ejercicio.Titulo}</h3><br> 
        <img src="img/${entrega.Ejercicio.Imagen}"><br>
        <p id=""> ${entrega.Ejercicio.Descripcion}</p><br>
        <label for="audio${entrega.Audio}">Audio de la entrega</label><br>
        <audio controls>
        <source src="audio/${entrega.Audio}" type="audio/mp3">
        </audio> <br><br><br>
        
    `
        }
        document.querySelector("#divVerEjerciciosResueltos").innerHTML = cadena

    } else {
        document.querySelector("#divVerEjerciciosResueltos").innerHTML = `<h2>No tienes ejercicios resueltos aun</h2><br>`;
    }
}

function mostrarInfoEstadisticaAlumno() {
    ocultarPanelAlumno();
    document.querySelector("#divEstadisticasAlumno").style.display = "block";
    document.querySelector("#pCalcularDevolucion").innerHTML = "";
    document.querySelector("#pVerPorcentajeEjerciciosResueltos").innerHTML = "";
}


function calcularPorcentajeEjerciciosResueltos() {
    let cantEjerciciosPlanteados = devolverListaEjerciciosDelAlumno();
    if(cantEjerciciosPlanteados != null){
        let porcentaje = usuarioLogueado.listaEntregasDelAlumno.length * 100 / cantEjerciciosPlanteados.length;

    document.querySelector("#pVerPorcentajeEjerciciosResueltos").innerHTML = porcentaje;
 
    }else document.querySelector("#pVerPorcentajeEjerciciosResueltos").innerHTML = "No tiene ejercicios planteados aun.";
   
}


function calcularEjerciciosSinDevolucion() {
   
    let cantEjConDevolucion = 0;
    for (ej of usuarioLogueado.listaEntregasDelAlumno) {
        if (ej.Devolucion != "") {
            cantEjConDevolucion++;
        }
    }
document.querySelector("#pCalcularDevolucion").innerHTML = `Cantidad ejercicios con devolucion: ${cantEjConDevolucion} <br>
Cantidad ejercicios entregados  sin devolucion ${usuarioLogueado.listaEntregasDelAlumno.length - cantEjConDevolucion}.`

}




// FUNCIONES DOCENTES

function asignarNivelAlumno() {
    ocultarPanelDocente()
    document.querySelector("#divAsignarNivel").style.display = "block"
    armarTablaAlumnos()

}

function armarTablaAlumnos() {


    let tabla = `<h3>Tabla alumnos</h3><br></br><table border="1">
    <tr>
    <td>Nombre alumno</td>
    <td>Nombre Usuario</td>
    <td>Nivel actual</td>
    <td>Ascender de Nivel</td>
    </tr> 
    `;
    for (alumno of listaAlumnos) {
        if (alumno.Docente.IdDocente == usuarioLogueado.IdDocente) {
            tabla += `
        <tr>
        <td>${alumno.NombreAlumno}</td>
        <td>${alumno.NombreUsuarioAlumno}</td>
        <td>${alumno.Nivel}</td>
        <td><input type="button" class="btnSubirNivelAlumnos" id="idAlumno${alumno.IdAlumno}" value="subir un nivel"></td>
        </tr>
        
        `
        }
    }


    tabla += `</table>`;
    document.querySelector("#divAsignarNivel").innerHTML = tabla;

    let botones = document.querySelectorAll(".btnSubirNivelAlumnos");

    for (boton of botones) {
        boton.addEventListener("click", subirNivelAlumno);
    }



}


function subirNivelAlumno() {
    let idAlumno = this.getAttribute('id');
    idAlumno = idAlumno.replace("idAlumno", "");


    //busco el objeto alumno
    for (al of listaAlumnos) {
        if (al.IdAlumno == idAlumno) {
            if (al.Nivel == "inicial") {
                al.Nivel = "intermedio";
            } else if (al.Nivel == "intermedio") {
                al.Nivel = "avanzado";
            }
        }
    }
    armarTablaAlumnos()

}

function mostrarCrearEjercicio() {
    ocultarPanelDocente();
    document.querySelector("#divArmarEjercicio").style.display = "block";


}

function ingresarDatosEjercicio() {
    let titulo = document.querySelector("#txtTituloEjercicio").value
    let imagen = document.querySelector("#inputImagenEjercicio").value
    let descripcion = document.querySelector("#txtDescripcionEjercicio").value
    let nivel = document.querySelector("#slcNivel").value
    let docente = usuarioLogueado;

    imagen = imagen.replace("C:\\fakepath\\", "");

    let ejercicioIngresado = darAltaEjercicio(nivel, titulo, imagen, descripcion, docente);

    if (ejercicioIngresado != null) {
        document.querySelector("#pIngresarEjercicio").innerHTML = `Ingresado correctamente del ejercicio ${ejercicioIngresado.Titulo}`;
    } else {
        document.querySelector("#pIngresarEjercicio").innerHTML = "Error en el ingreso de datos";
    }

}

function mostrarEjerciciosDevolucion() {
    ocultarPanelDocente();
    document.querySelector("#divRedactarDevolucion").style.display = "block";
    mostrarEntregasParaDevolucion();

}


function mostrarEntregasParaDevolucion() {
    let listaDevoluciones = new Array();
    for (alumno of listaAlumnos) {
        if (alumno.Docente.IdDocente == usuarioLogueado.IdDocente) {
            for (entrega of alumno.listaEntregasDelAlumno) {
                if (entrega.Devolucion == "") {
                    listaDevoluciones.push(entrega);
                }
            }
        }
    }

    escribirEjerciciosParaDevolucion(listaDevoluciones);
}

function escribirEjerciciosParaDevolucion(unaListaEntregas) {
    let cadena = `<h2>Lista de ejercicios para hacer devolucion:</h2><br><br><br><br><br>`;
    if (unaListaEntregas != null) {
        for (entrega of unaListaEntregas) {

            cadena += `<div>
        <p>Nombre del alumno: ${entrega.Alumno.NombreAlumno}</p><br>
        <p>Nombre del ejercicio ${entrega.Ejercicio.Titulo}</p><br>
        <img src="img/${entrega.Ejercicio.Imagen}"><br>
        <audio controls>
        <source src="audio/${entrega.Audio}" type="audio/mp3">
        </audio> <br>
        <label for="txtIngresarDevolucion">Devolucion Ejericicio</label><br>
         <input type="text" id="txtIngresarDevolucion${entrega.Id}"><br>
        <input type="button" value="Ingresar Devolucion" class="btnIngresarDevoluciones" id="btnIngresarDevolucion${entrega.Id}"><br>
        </div>
        `

        }
        document.querySelector("#divRedactarDevolucion").innerHTML = cadena;

        let botones = document.querySelectorAll(".btnIngresarDevoluciones");
        for (boton of botones) {
            boton.addEventListener("click", tomarDatosDevolucion);
        }

    } else if (unaListaEntregas.length == 0) {
        cadena += `<br><h2>asdasdsfasdgdfhfhsfg</h2>`
        document.querySelector("#divResultadoRedactarDevolucion").innerHTML = cadena;
    }
}

function tomarDatosDevolucion() {
    let idBoton = this.getAttribute("id");
    let idEntrega = idBoton.replace("btnIngresarDevolucion", "");
    let unaEntrega = buscarEntrega(idEntrega);

    if (unaEntrega != null) {
        unaEntrega.Devolucion = document.querySelector("#txtIngresarDevolucion" + idEntrega).value;
        mostrarEntregasParaDevolucion();
    } else {

        document.querySelector("#divResultadoRedactarDevolucion").innerHTML = "Algo salio mal";
    }

}

function VerInformacionEstadisticaDocente() {
    ocultarPanelDocente();
    armarSelectDeAlumnos();
    document.querySelector("#pEjerciciosResueltos").innerHTML = "";
    document.querySelector("#pAlumnoMasEjercicios").innerHTML = "";
    document.querySelector("#pCantidadEjerciciosEntregados").innerHTML = "";
    document.querySelector("#divInformacionEstadisticaDocente").style.display = "block";

}


function calcularEstadisticaAlumnoMasEjercicios() {
    let alumnosMasEjercicios = new Array();
    let mayorCantidad = 1;

    for (al of listaAlumnos) {
        if (al.Docente == usuarioLogueado) {
            if (al.listaEntregasDelAlumno.length >= mayorCantidad) {
                if (al.listaEntregasDelAlumno.length > mayorCantidad) {
                    alumnosMasEjercicios = new Array();
                }
                mayorCantidad = al.listaEntregasDelAlumno.length;
                alumnosMasEjercicios.push(al);
            }
        }
    }
    let cadena = armarTablaNombreAlumnos(alumnosMasEjercicios);
    document.querySelector("#pAlumnoMasEjercicios").innerHTML = cadena;
}

function armarTablaNombreAlumnos(listaAl) {
    let cadena = "";
    for (al of listaAl) {
        cadena += `Nombre alumno: ${al.NombreAlumno}<br>`;
    }

    return cadena;
}

function calcularEstadisticaCantidadEjerciciosEntregados() {
    let cantidadEjerciciosEntregados = 0;

    for (al of listaAlumnos) {
        if (al.Docente == usuarioLogueado) {
            cantidadEjerciciosEntregados += al.listaEntregasDelAlumno.length;
        }
    }
    document.querySelector("#pCantidadEjerciciosEntregados").innerHTML = cantidadEjerciciosEntregados;


}

function armarSelectDeAlumnos() {
    let cadena = `<label for="slcEleccionAlumno">Elija el</label><br>
    <select id="slcEleccionAlumno"> <option value="ndf">No definido...</option>`;

    for (al of listaAlumnos) {
        cadena +=
            `<option value="${al.IdAlumno}">
   ${al.NombreAlumno}
   </option>`
    }

    cadena += `</select>`
    document.querySelector("#divSlcSeleccionAlumnosEstadisticas").innerHTML = cadena;
}

function tomarDatosCalcularEjerciciosDelAlumno() {
    let idAlumno = document.querySelector("#slcEleccionAlumno").value
    if (idAlumno != "ndf") {
        let al = devolverAlumno(idAlumno);
        let cantEjerciciosAlumno = al.listaEntregasDelAlumno.length;
        document.querySelector("#pEjerciciosResueltos").innerHTML = cantEjerciciosAlumno;
    } else {
        document.querySelector("#pEjerciciosResueltos").innerHTML = "Debe elegir su alumno.";
    }
}



// ALTAS

function darAltaEntrega(unEj, unAl, unAudio) {
    let unaEntrega = null;
    if (validarEntrega(unEj, unAl, unAudio)) {
        unaEntrega = new Entrega(unEj, unAl, unAudio);
        listaEntregas.push(unaEntrega);
        unAl.listaEntregasDelAlumno.push(unaEntrega);
    }

    return unaEntrega;
}

function darAltaDocente(unNom, unNomUs, unaPass) {
    let nuevoDocente = null;
    if (validarPassword(unaPass) && validarNombreUsuario(unNomUs) && unNom != "") {
        nuevoDocente = new Docente(unNom, unNomUs, unaPass)
        listaDocentes.push(nuevoDocente);
    }
    return nuevoDocente;
}

function darAltaAlumno(unNombre, unNombreUsuario, unaPassword, unDocente, unNivel) {
    let nuevoAlumno = null;
    if (validarPassword(unaPassword) && validarNombreUsuario(unNombreUsuario) && unNombre != "" && unDocente != null) {
        nuevoAlumno = new Alumno(unNombre, unNombreUsuario, unaPassword, unDocente, unNivel);
        listaAlumnos.push(nuevoAlumno);
    }
    return nuevoAlumno;
}

function darAltaEjercicio(nivel, titulo, imagen, descripcion, docente) {
    let ejercicioValido = null;

    if (validarEjercicio(nivel, titulo, imagen, descripcion, docente)) {
        ejercicioValido = new Ejercicio(nivel, titulo, imagen, descripcion, docente);
        listaEjercicios.push(ejercicioValido);

    }
    return ejercicioValido;
}


// REGISTRARSE

function ingresarRegistrarseDocente() {
    let nombreDocente = document.querySelector("#txtNombreRegistro").value;
    let nombreUsuarioDocente = document.querySelector("#txtNombreUsuarioRegistro").value;
    let passwordUsuarioDocente = document.querySelector("#txtPasswordRegistro").value;

    let nuevoDocente = darAltaDocente(nombreDocente, nombreUsuarioDocente, passwordUsuarioDocente)

    if (nuevoDocente != null) {
        document.querySelector("#pRegistrarse").innerHTML = "Bienvenido docente " + nuevoDocente.NombreDocente + " te registraste con exito";

    } else {
        document.querySelector("#pRegistrarse").innerHTML = `Error de ingreso.`;
    }
}


function ingresarRegistrarseAlumno() {
    let nombreAlumno = document.querySelector("#txtNombreRegistro").value;
    let nombreUsuarioAlumno = document.querySelector("#txtNombreUsuarioRegistro").value;
    let passwordUsuarioAlumno = document.querySelector("#txtPasswordRegistro").value;
    let docenteDeAlumno = document.querySelector("#slcEleccionAlumnoDocente").value;
    let nivel = "inicial";

    unDocente = buscarDocente(docenteDeAlumno);

    let nuevoAlumno = darAltaAlumno(nombreAlumno, nombreUsuarioAlumno, passwordUsuarioAlumno, unDocente, nivel);

    if (nuevoAlumno != null) {
        document.querySelector("#pRegistrarse").innerHTML = "Bienvenido " + nuevoAlumno.NombreAlumno + " te registraste con exito";

    } else {
        document.querySelector("#pRegistrarse").innerHTML = `Error de ingreso.`;
    }

}

// LOG IN   y  LOGOUT
function ingresarDatosLogIn() {
    let nombreUsuario = document.querySelector("#txtNombreUsuarioLogIn").value;
    let passUsuario = document.querySelector("#txtPasswordLogIn").value;

    let usuarioEncontrado = buscarUsuario(nombreUsuario);

    if (usuarioEncontrado != null) {
        if (usuarioEncontrado.Rol == "docente" && usuarioEncontrado.PasswordDocente == passUsuario) {
            usuarioLogueado = usuarioEncontrado;
            mostrarPanelDocente();

        } else if (usuarioEncontrado.Rol == "alumno" && usuarioEncontrado.PasswordAlumno == passUsuario) {
            usuarioLogueado = usuarioEncontrado;
            mostrarPanelAlumno();

        } else document.querySelector("#pLogIn").innerHTML = "Error contrasena"
    } else document.querySelector("#pLogIn").innerHTML = "Error en login"
}



// BUSQUEDAS
function buscarDocente(unaId) {
    let docenteBuscado = null;
    for (docente of listaDocentes) {
        if (docente.IdDocente == unaId) docenteBuscado = docente
    }

    return docenteBuscado;
}

function buscarUsuario(nombreUsuario) {
    let usuarioEncontrado = null;
    nombreUsuario = nombreUsuario.toLowerCase();
    let docenteMinuscula = "";

    for (let i = 0; i < listaDocentes.length; i++) {
        docenteMinuscula = listaDocentes[i].NombreUsuarioDocente.toLowerCase();
        if (docenteMinuscula == nombreUsuario) {
            usuarioEncontrado = listaDocentes[i];
            break;
        }
    }

    if (usuarioEncontrado == null) {
        let alumnoMinuscula = "";
        for (let i = 0; i < listaAlumnos.length; i++) {
            alumnoMinuscula = listaAlumnos[i].NombreUsuarioAlumno.toLowerCase();
            if (alumnoMinuscula == nombreUsuario) {
                usuarioEncontrado = listaAlumnos[i];
                break;
            }
        }
    }

    return usuarioEncontrado;
}

function buscarEjercicio(id) {
    let ej = null;
    for (ejercicio of listaEjercicios) {
        if (ejercicio.IdEjercicio == id) {
            ej = ejercicio;
        }
    }
    return ej;
}

function buscarEjerciciosPorTexto(listaEjerciciosDelAlumno, texto) {
    let unaListaDeEj = new Array();
    if (listaEjerciciosDelAlumno != null) {


        for (ej of listaEjerciciosDelAlumno) {
            if (ej.Titulo.indexOf(texto) != -1) {
                unaListaDeEj.push(ej);

            } else if (ej.Descripcion.indexOf(texto) != -1) {
                unaListaDeEj.push(ej);
            }
        }
    } else document.querySelector("#pResultadoBusquedaEjercicios").innerHTML = "Erro en la busqueda."

    return unaListaDeEj;
}

function devolverListaEjerciciosEntregadosDelAlumno() {
    let unaListaEj = new Array();
    for (ej of listaEjercicios) {
        if (ej.Nivel == usuarioLogueado.Nivel && usuarioLogueado.Docente == ej.Docente) {
            if (!estaEnListaEntregasDelAlumno(ej)) {
                unaListaEj.push(ej);
            }

        }
    }

    return unaListaEj;
}

function devolverListaEjerciciosDelAlumno() {
    let unaListaEj = new Array();
    for (ej of listaEjercicios) {
        if (ej.Nivel == usuarioLogueado.Nivel && usuarioLogueado.Docente == ej.Docente) {

            unaListaEj.push(ej);


        }
    }

    return unaListaEj;
}

function estaEnListaEntregasDelAlumno(unEj) {
    let esta = false;
    for (entrega of usuarioLogueado.listaEntregasDelAlumno) {
        if (entrega.Ejercicio.IdEjercicio == unEj.IdEjercicio) {
            esta = true;
        }
    }
    return esta;
}

function buscarEntrega(id) {
    let unaEntrega = null;
    for (entrega of listaEntregas) {
        if (entrega.Id == id) {
            unaEntrega = entrega;
        }
    }
    return unaEntrega;
}

function devolverAlumno(id) {
    let alumno = null;
    for (al of listaAlumnos) {
        if (al.IdAlumno == id) {
            alumno = al;
        }
    }
    return alumno;
}


// VALIDACIONES

function validarNombreUsuario(unNombreUsuario) {
    let esValidoAlumno = true;
    let esValidoDocente = true;
    let esValido = false;

    for (let i = 0; i < listaDocentes.length && esValidoDocente; i++) {
        if (listaDocentes[i].NombreUsuarioDocente == unNombreUsuario) {
            esValidoDocente = false;

        }
    }
    for (let j = 0; j < listaAlumnos.length && esValidoAlumno; j++) {
        if (listaAlumnos[j].NombreUsuarioAlumno == unNombreUsuario) {
            esValidoAlumno = false;
        }
    }

    if (esValidoDocente && esValidoAlumno) esValido = true;

    return esValido;
}

function validarPassword(unaPassword) {
    let esValida = false;

    if (unaPassword.length >= 4) {
        let tieneMayuscula = false;
        let tieneMinuscula = false;
        let tieneNumero = false;
        for (let i = 0; i < unaPassword.length; i++) {
            if (unaPassword.charCodeAt(i) >= 65 && unaPassword.charCodeAt(i) <= 90) {
                //TIene mayuscula
                tieneMayuscula = true;
            }
            if (unaPassword.charCodeAt(i) >= 97 && unaPassword.charCodeAt(i) <= 122) {
                //Tiene minuscula
                tieneMinuscula = true;
            }
            if (unaPassword.charCodeAt(i) >= 48 && unaPassword.charCodeAt(i) <= 57) {
                // Tiene un numero
                tieneNumero = true;
            }
        }
        if (tieneMayuscula && tieneMinuscula && tieneNumero) esValida = true;
    }
    return esValida;
}

function validarEjercicio(nivel, titulo, imagen, descripcion, docente) {
    let esValido = false;

    if (titulo != "" && imagen != "" && validarDescripcion(titulo, descripcion) && nivel != "ndf" && docente != null) {
        esValido = true;
    }

    return esValido;
}

function validarDescripcion(tit, descr) {
    let esValido = false;
    let cantCaracteres = 0;

    cantCaracteres += tit.length + descr.length;

    if (cantCaracteres >= 20 && cantCaracteres <= 200) {
        esValido = true;
    }

    return esValido;
}

function validarEntrega(unEj, unAl, unAudio) {
    let esValida = false;
    if (unEj != null && unAl != null && unAudio != "") {
        esValida = true;
    }
    return esValida;
}