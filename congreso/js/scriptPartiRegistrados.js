const nombreConfe = document.getElementById('conferencia');
const card = document.getElementById('card');

var params = new URLSearchParams(window.location.search);
const [key, value] = params;

fetch('http://localhost:5147/api/conferenciaId?id=' + key[1])
    .then(c => c.json())
    .then(c => {
        htmlcode = c.nombreConfe;
        nombreConfe.insertAdjacentHTML("beforeend", htmlcode);
        htmlcode = "";
    });

fetch('http://localhost:5147/api/conferencia?id=' + key[1])
    .then(c => c.json())
    .then(c => llenadoVista(c));


const llenadoVista = (c) => {
    for(i = 0; i<c.length; i++){
        htmlcode = '<div class="card" id="card">' + 
                        '<img src="../images/' + c[i].avatar + '.jpg" alt="">' +
                        '<h3>' + c[i].nombreParticipante + ' ' + c[i].apellidoParticipante +'</h3>' +
                    '</div>';
        card.insertAdjacentHTML("beforeend", htmlcode);
        htmlcode = "";
    }
}