//Constantes de los campos de texto del registro.html
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("correo");
const twitter = document.getElementById("twitter");
const avatar1 = document.getElementById("avatar1");
const avatar2 = document.getElementById("avatar2");
const avatar3 = document.getElementById("avatar3");
const avatar4 = document.getElementById("avatar4");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  if (avatar1.checked) {
    avatarf = avatar1.value;
  } else if (avatar2.checked) {
    avatarf = avatar2.value;
  } else if (avatar3.checked) {
    avatarf = avatar3.value;
  } else if (avatar4.checked) {
    avatarf = avatar4.value;
  }
  const participante = {
    "nombre": nombre.value,
    "apellidos": apellidos.value,
    "email": correo.value,
    "twitter": twitter.value,
    "avatar": avatarf
  };
  console.log(participante);
  fetch('http://localhost:5147/api/participante', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(participante)
  }).then(x => x.json()).then(x => {
    if(x == true){
        window.location.href="../html/participantes.html";
    }
    else{
        alert("Registro incorrecto");
    }
  });
});
