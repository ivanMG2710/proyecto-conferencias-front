const tabla = document.getElementById("tabla");

fetch('http://localhost:5147/api/conferencias')
    .then(c => c.json())
    .then(c => tablallenado(c));

const tablallenado = (c)=>{
    for(i=0; i<c.length; i++){
        htmlcode = '<tr>'+
                        '<td>' + c[i].horario + '</td>'+
                        '<td>' + c[i].nombreConfe + '</td>'+
                        '<td>' + c[i].conferencista + '</td>'+
                        '<td><a href="registroAsistencia.html?id=' + c[i].id + '">Registro</a></td>'+
                    '</tr>';
        tabla.insertAdjacentHTML("beforeend", htmlcode);
        htmlcode = "";
    }
}