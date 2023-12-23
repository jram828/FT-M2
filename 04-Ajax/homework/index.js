const url = "http://localhost:5000/amigos";
const listaAmigos = $("#lista");

const buscar = (amigos) => {
  const idAmigo = $("#input").val();
  for (let i = 0; i < amigos.length; i++) {
    if (amigos[i].id == idAmigo) {
      $("#amigo").text(amigos[i].name);
    }
  }
};

const borrar = (amigos) => {
  const idAmigo = $("#inputDelete").val();
  // const url2= `http://localhost:5000/amigos/${idAmigo}`;
  for (let i = 0; i < amigos.length; i++) {
    if (amigos[i].id == idAmigo) {
      $.ajax({
        url: `http://localhost:5000/amigos/${idAmigo}`,
        type: "DELETE",
        success: () => {
          obtenerAmigos();
          $("#success").text(`Tu ex-amigo ${amigos[i].name} ha sido eliminado`);
        },
      });
    }
  }
};


const obtener = (amigos) => {
  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo.name;
    listaAmigos.append(li);
  });
};

const obtenerAmigos = function () {
  $("img")[0].style.display = "none";
  $("#lista li").remove();
  $.get(url, obtener);
};

const borrarAmigo = function () {
  $.get(url, borrar);
};

const buscarAmigo = function () {
  $.get(url, buscar);
};

$("#boton").click(obtenerAmigos);
$("#search").click(buscarAmigo);
$("#delete").click(borrarAmigo);
