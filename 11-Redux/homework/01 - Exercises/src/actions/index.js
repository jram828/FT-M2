import { INCREMENTO, DECREMENTO } from '../action-types';

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

// incrementar en uno el counter
const incremento  = {
  type: INCREMENTO
};

// decrementar en uno el counter
const decremento = {
  type: DECREMENTO,
};

const incrementar_7 = {
  type: "INCREMENTAR_N",
  payload: 7
};

const increment=(n)=> {
  return {
    type: "INCREMENTAR_N",
    payload: n,
  };
}
export {
  incremento,
  decremento,
  incrementar_7,
  increment
}