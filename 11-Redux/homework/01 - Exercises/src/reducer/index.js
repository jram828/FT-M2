import { INCREMENTO,DECREMENTO } from "../action-types";
// import { incremento, decremento } from '../actions';

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function Contador(state = initialState, action) {
  
  switch (action.type) {
    case INCREMENTO:
      return state.contador + 1;
    case DECREMENTO:
      return state.contador - 1;
    case "INCREMENTAR_N":
      return state.contador + action.payload;
    default:
      state;
  }
}

export { Contador, initialState };