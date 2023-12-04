const div = document.getElementById("card-container");

fetch('http://localhost:5147/api/participantes')
    .then(p => p.json())
    .then(p => cards(p));

const cards = (p) => {
    for(i=0; i < p.length; i++){
        htmlcode = '<div class="card">'+
                        '<a href="registroEditar.html?id=' + p[i].id + '" class="card-link">'+
                            '<img src="../images/' + p[i].avatar + '.jpg" alt="">'+
                            '<h3>' + p[i].nombre + ' ' + p[i].apellidos + '</h3>'+
                        '</a>'+
                        '<div class="share">'+
                            '<a href="https://twitter.com/' + p[i].twitter + '" class="fab fa-twitter"> ' + p[i].twitter + '</a>'+
                        '</div>'+
                    '</div>';
        div.insertAdjacentHTML("beforeend",htmlcode);
        htmlcode = "";   
    }

}