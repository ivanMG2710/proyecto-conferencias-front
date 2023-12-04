let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
const nombreConferencia = document.getElementById("nombreConferencia");
const participantes = document.getElementById("seleccion");
const checkbox = document.getElementById("si");
const guardar = document.getElementById("guardar");

var parti = [];

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var params = new URLSearchParams(window.location.search);

const [key, value] = params;

fetch('http://localhost:5147/api/conferenciaId?id=' + key[1])
    .then(c => c.json())
    .then(c => conferencia(c))

const conferencia = (c)=>{
    htmlcode = c.nombreConfe;
    nombreConferencia.insertAdjacentHTML("beforeend", htmlcode);
    htmlcode = "";
}

fetch('http://localhost:5147/api/participantes')
    .then(p => p.json())
    .then(p => participantesConfe(p))

const participantesConfe = (p)=>{
    parti = p;
    for(i=0; i<p.length; i++){
        htmlcode = '<option>' + p[i].nombre + ' ' + p[i].apellidos + '</option>';
        participantes.insertAdjacentHTML("beforeend", htmlcode);
        htmlcode = "";
    }
}

// Obtén todos los checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"][name="asistencia"]');
    
// Agrega un evento a cada checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        // Si el checkbox actual está marcado, desmarca los demás
        if (this.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});

guardar.addEventListener("click", ()=>{
    console.log(parti);
    if(checkbox.checked){
        idConfe = key[1];
        idParti = 0;
        for(i = 0; i< parti.length; i++){
            nombre = parti[i].nombre + " " + parti[i].apellidos
            if(nombre == participantes.value){
                idParti = parti[i].id;
            }
        }

        console.log(idParti);
    
        const registro = {
            "idConferencia": idConfe,
            "idParticipante": idParti
        }
    
        fetch('http://localhost:5147/api/registros', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registro)
        })
        .then(r => r.json())
        .then(r => {
            if(r == true){
                window.location.href="../html/participantesRegistrados.html?id=" + key[1];
            }
            else {
                alert("Registro incorrecto");
            }
        });    
    }

    
})