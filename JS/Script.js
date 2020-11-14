function obtenerAlumnos(){
  $.ajax({
    type: 'GET',
    url: 'http://www.proyectos.arcelia.net/bigg/src/public/alumnos',
    success: function(respuesta) {
      alumnos = respuesta.data
      $( "#cuerpotabla" ).empty();
      alumnos.forEach(alumno => {
          nuevo_alumno = '<tr>'+
            '<th scope="row">'+alumno['clave_alu']+'</th>'+
            '<td>'+alumno['nombre']+' '+alumno['ap_paterno']+' '+alumno['ap_materno']+'</td>'+
            '<td>'+alumno['curp']+'</td>'+
            '<td>'+alumno['email']+'</td>'+
            '<td>'+alumno['sexo']+'</td>'+
            '<td>'+alumno['ciudad']+'</td>'+
            '<td> <a target="_blank" href="alumno.html?matricula='+alumno['clave_alu']+'" class="btn btn-success btn-sm"> VER </a></td>'+
          '</tr>';
          $('#cuerpotabla').append( nuevo_alumno );

      });
    },
    error: function(respuesta) {
          console.log("No se ha podido obtener la información");
      }
  });
}

function datosAlumno(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const matricula = urlParams.get('matricula')
  console.log(matricula);

  $.ajax({
    type: 'GET',
    url: 'http://www.proyectos.arcelia.net/bigg/src/public/alumnos/'+matricula,
    success: function(respuesta) {
      console.log(respuesta);
          alumno = respuesta.data[0];
          datos_alumno = 
          '<tr><th scope="row">Matricula</th> <td>'+alumno['clave_alu']+'</td></tr>'+
          '<tr><th scope="row">Nombre</th> <td>'+alumno['nombre']+' '+alumno['ap_paterno']+' '+alumno['ap_materno']+'</td></tr>'+
          '<tr><th scope="row">Telefono</th> <td>'+alumno['telefono']+'</td></tr>'+
          '<tr><th scope="row">Celular</th> <td>'+alumno['celular']+'</td></tr>'+
          '<tr><th scope="row">Correo</th> <td>'+alumno['email']+'</td></tr>'+
          '<tr><th scope="row">Sexo</th> <td>'+alumno['sexo']+'</td></tr>'+
          '<tr><th scope="row">CRUP</th> <td>'+alumno['curp']+'</td></tr>'+
          '<tr><th scope="row">Peso</th> <td>'+alumno['peso']+'</td></tr>'+
          '<tr><th scope="row">Estatura</th> <td>'+alumno['estatura']+'</td></tr>'+
          '<tr><th scope="row">Direccion</th> <td>'+alumno['direccion']+', '+alumno['colonia']+', '+alumno['delegacion']+', '+alumno['ciudad']+', '+alumno['cp']+'</td></tr>'+
          '<tr><th scope="row">Estatus</th> <td>'+alumno['status_alu']+'</td></tr>'+
          '<tr><th scope="row">Fecha Edicion</th> <td>'+alumno['fedita']+'</td></tr>';

          $('#datos_alumno').append( datos_alumno );


    },
    error: function(respuesta) {
        console.log("No se ha podido obtener la información");
    }
  });

}

function buscarAlumno(){

  matricula = document.getElementById('matricula').value;
  $.ajax({
    type: 'GET',
    url: 'http://www.proyectos.arcelia.net/bigg/src/public/alumnos/'+matricula,
    success: function(respuesta) {
      alumnos = respuesta.data
      $( "#cuerpotabla" ).empty();
      alumnos.forEach(alumno => {
          nuevo_alumno = '<tr>'+
            '<th scope="row">'+alumno['clave_alu']+'</th>'+
            '<td>'+alumno['nombre']+' '+alumno['ap_paterno']+' '+alumno['ap_materno']+'</td>'+
            '<td>'+alumno['curp']+'</td>'+
            '<td>'+alumno['email']+'</td>'+
            '<td>'+alumno['sexo']+'</td>'+
            '<td>'+alumno['ciudad']+'</td>'+
            '<td> <a target="_blank" href="alumno.html?matricula='+alumno['clave_alu']+'" class="btn btn-success btn-sm"> VER </a></td>'+
          '</tr>';
          $('#cuerpotabla').append( nuevo_alumno );

      });
    },
    error: function(respuesta) {
          console.log("No se ha podido obtener la información");
      }
  });
}
