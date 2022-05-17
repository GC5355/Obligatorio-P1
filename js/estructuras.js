
let ultimoIdDocente = 1;
let ultimoIdAlumno = 1;
let ultimoIdEjercicio = 1;
let ultimoIdEntrega = 1;
let usuarioLogueado = null;


class Docente {
    constructor(unNombre, unNombreUsuario, unaPassword) {
        this.IdDocente = ultimoIdDocente;
        ultimoIdDocente++;
        this.NombreDocente = unNombre;
        this.NombreUsuarioDocente = unNombreUsuario;
        this.PasswordDocente = unaPassword;
        this.Rol = "docente";
     
    }
}


class Alumno {
    constructor(unNombre, unNombreUsuario, unaPassword, unDocente, unNivel) {
        this.IdAlumno = ultimoIdAlumno;
        ultimoIdAlumno++;
        this.NombreAlumno = unNombre;
        this.NombreUsuarioAlumno = unNombreUsuario;
        this.PasswordAlumno = unaPassword;
        this.Rol = "alumno";
        this.Docente = unDocente
        this.Nivel = unNivel;
       
        this.listaEntregasDelAlumno = new Array();
       
    }
}

class Ejercicio {
    constructor(unNivel, unTitulo, unaImagen, unaDescripcion , unDocente) {
        this.IdEjercicio = ultimoIdEjercicio;
        ultimoIdEjercicio++;
        this.Nivel = unNivel;
        this.Titulo = unTitulo;
        this.Imagen = unaImagen;
        this.Descripcion = unaDescripcion;
        this.Docente = unDocente;
    }
}

class Entrega {
    constructor(unEjercicio, unAlumno, unAudio) {
        this.Id = ultimoIdEntrega;
        ultimoIdEntrega++;
        this.Ejercicio = unEjercicio
        this.Alumno = unAlumno;
        this.Audio = unAudio;                        
        this.Devolucion = "";
    }
}


let listaDocentes = new Array();
let listaAlumnos = new Array();
let listaEjercicios = new Array();
let listaEntregas = new Array();





