const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento, impar, asincrono } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.querySelector('#valor');

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  var storeCounter = store.getState().contador;
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerText = storeCounter;
}

// Ejecutamos la funcion 'renderContador':
renderContador();

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.suscribe(() => renderContador());


// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
var btnInc = document.querySelector('#incremento');
// btnInc.onclick = () => store.dispatch(incremento());
btnInc.onclick = function () {
  return store.dispatch(incremento());
} 

var btnDec = document.querySelector('#decremento');
// btnDec.onclick = () => store.dispatch(decremento());
btnDec.onclick = function () {
  return store.dispatch(decremento());
} 

var btnImpar = document.querySelector('#incrementoImpar');
btnImpar.onclick = () => store.dispatch(impar());

var btnAsinc = document.querySelector('#incrementoAsync');
btnAsinc.onclick = () => setTimeout(store.dispatch(asincrono()), 2000)
