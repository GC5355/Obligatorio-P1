function cargarDatos() {
  // Carga Docentes
  let d1 = darAltaDocente("Pablo", "pablo5355", "Pablo5");
  let d2 = darAltaDocente("Ana", "anana", "aNa88");                      
  let d3 = darAltaDocente("Tito", "germis", "Bepofirpo53");
  let d4 = darAltaDocente("Anastasia", "an", "Cia911");
 




  // Carga Alumnos
  let a1 = darAltaAlumno("Yona", "Yonita", "Yonita1", d1, "intermedio");                        
  let a2 = darAltaAlumno("Maria", "maritados", "maritAa23", d1, "intermedio");
  let a3 = darAltaAlumno("Javier", "Abdala", "JavoA5", d2 , "inicial");
  let a4 = darAltaAlumno("Julita", "Ieta5", "Julina5", d3, "avanzado");








  // Carga Ejercicios
  let ej1 = darAltaEjercicio("inicial", "Notas y mas Notas 3", `ej5.png`, `Si al poner un acorde os sale que tiene varios nombres 
  es porque hay varias formas de llamar al acorde según el contexto en que se use.`, d1);

  let ej2 = darAltaEjercicio("avanzado", "Notas con Acordes", `ej3.png`, `No es fácil recordar todos los acordes que existen cuando empezas 
  a tocar guitarra. Pero no te preocupes..`, d1);

  let ej3 = darAltaEjercicio("intermedio", "La guitarra de Lolo1", `ej2.png`, `Toque la guitarra dia por medio, y vera las grandes virtudes
  de este fabuloso cordofono
                             ` , d1);                                         

  let ej4 = darAltaEjercicio("intermedio", "Armonia y contrapunto", `ej6.png`, `aEquilibrio, proporción y correspondencia adecuada entre 
  las diferentes cosas de un conjunto.
                             ` , d1);                                         
  let ej5 = darAltaEjercicio("intermedio", "Armonia y contrapunto II", `ej7.png`, `Relación de paz, concordia y entendimiento entre dos o más personas.
  Suele tocarse junto con la lambada
                             ` , d1);                                         

  let ej6 = darAltaEjercicio("avanzado", "Notas y mas Notas 10", `ej7.png`, `'Combinación de sonidos acordes' y 'amistad o concordia'. Esta es la grafía
   normal en el español actual.` , d3);






  // Carga Entregas
  let entr1 = darAltaEntrega(ej3, a1 , 'ej5.m4a');
  let entr2 = darAltaEntrega(ej1, a2 , 'ej3.m4a');
  let entr3 = darAltaEntrega(ej4, a4 , 'ej3.m4a');
  
}