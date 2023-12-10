function actualizarReloj()
/** actualizara el reloj en el sitio web*/ {
    var ahora = new Date();
    /** esta variable captura la fecha*/
    var hora = ahora.getHours();
    /**obtiene las horas */
    var minuto = ahora.getMinutes();
    /** obtiene minutos */
    var segundo = ahora.getSeconds();
    /**obtiene segundos */

    var gradosHora = ((hora % 12) / 12) * 360 + (minuto / 60) * 30;
    /** contiene el ángulo que representa la hora y los minutos actuales en un reloj de arco, en grados.*/
    var gradosMinuto = (minuto / 60) * 360 + (segundo / 60) * 6;
    /** */
    var gradosSegundo = (segundo / 60) * 360;
    /** */
    // por medio de los grados se hacen la operacion para obtener hora minuto y segundo

    document.querySelector('.hora').style.transform = 'rotate(' + gradosHora + 'deg)';
    /**  1 selecciona la clase hora*/
    //2 se aplicara la rotacion del elemento
    //3 se construye la cadena de texto que representa la transformacio de la rotacion, 
    //la funcion ROTATE toma un argumento que representa el angulo de rotacion en grados
    //en resumen esta funcion actualizara la visualizacio  del reloj en funcion a la hora actual
    document.querySelector('.minuto').style.transform = 'rotate(' + gradosMinuto + 'deg)';
    /** */
    document.querySelector('.segundo').style.transform = 'rotate(' + gradosSegundo + 'deg)';
    /** */

    document.getElementById('hora-digital').textContent = ahora.toLocaleTimeString();
    /** */
}

actualizarReloj();
/** actualiza hora */
setInterval(actualizarReloj, 1000);
/**  se utiliza para ejecutar una función específica cada cierto tiempo (en milisegundos).*/