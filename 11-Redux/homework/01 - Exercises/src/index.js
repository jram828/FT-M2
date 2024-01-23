import { createStore } from "redux";
import {Contador,initialState} from "./reducer";
import { incremento, decremento } from "./actions";

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
// console.log(Contador)
console.log(initialState)
var store = createStore(Contador);
// store.dispatch(incremento);
console.log(store);
// Obtenemos el elemento con el id `valor`.
const valor = document.querySelector('#valor');
// console.log(valor);
// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const counter =store.getState().contador//Aqui va el contador";
  console.log(counter)
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = counter;
}

// Ejecutamos la función 'renderContador':
renderContador();
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:

store.subscribe(renderContador());


// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
var botonIncremento = document.querySelector("#incremento");
console.log(botonIncremento)
botonIncremento.addEventListener('click',()=>{store.dispatch(incremento);});
// valor.innerHTML = `${store.getState()}`;

var botonDecremento = document.querySelector("#decremento");
botonDecremento.addEventListener("click", () => {
  store.dispatch(decremento);
});
// valor.innerHTML = `${store.getState().contador}`;