const { INCREMENTO, DECREMENTO, IMPAR, ASINCRONO } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = () => ({
  type: INCREMENTO,
  payload: '',
});

const decremento = () => ({
  type: DECREMENTO,
  payload: '',
});

const impar = () => ({
  type: IMPAR,
  payload: '',
});

const asincrono = () => ({
  type: ASINCRONO,
  payload: '',
});

module.exports = {
  incremento,
  decremento,
  impar,
  asincrono
}