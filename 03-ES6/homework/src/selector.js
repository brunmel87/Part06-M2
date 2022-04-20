var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let elementsFound = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...elementsFound];    
  }
  return resultSet;
};

// body (classOne) resultSet = [BODY]
//  |---- div resultSet = []
//  |      |---- p (classOne)
//  |      |---- span
//  |---- div (classOne)

// traverseDomAndCollectElements(body)
//   resultSet = [BODY, P, DIV] <-- [P] <-- [DIV]

//     traverseDomAndCollectElements(div)
//       resultSet = [P] <-- [P] <-- []

//         traverseDomAndCollectElements(p)
//           resultSet = [P]

//         traverseDomAndCollectElements(span)
//           resultSet = []

//     traverseDomAndCollectElements(div)
//       resultSet = [DIV]



// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  if(selector.split('.').length === 2) return 'tag.class';
  //OTRA OPCION PARA EL TAG.CLASS
  // for (let i = 0; i < selector.length; i++) {
  //   if(selector[i] === '.') return 'tag.class';
  // }
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(element) {
      return '#' + element.id === selector;
    }
  } else if (selectorType === "class") {
    matchFunction = function(element) {
      let clases = element.classList;
      for (let i = 0; i < clases.length; i++) {
        if('.' + clases[i] === selector){
          return true;
        }
      }
      return false;
    }
    
  } else if (selectorType === "tag.class") {
    matchFunction = function(element) {
      let [t,c] = selector.split('.'); // si tengo div.classOne --> ['div', 'classOne']
      return matchFunctionMaker(t)(element) && matchFunctionMaker('.' + c)(element);
      // esto sería lo mismo que:
      //let functionTag = matchFunctionMaker(t);
      //functionTag(element);
    }
    
    
  } else if (selectorType === "tag") {
    matchFunction = function(element) {
      //En esta primer opción, cuando aplicamos tagName nos devuelve el nombre del tag en mayúsculas y debemos compararlo con el selector.toUpperCase() para que con esa propiedad el nombre del selector también se pase a mayúsculas y matcheen.
      return element.tagName === selector.toUpperCase();
      //OTRA OPCION
      //return element.localName === selector;
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
