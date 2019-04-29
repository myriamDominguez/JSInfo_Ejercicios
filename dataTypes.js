// I'll use the Modern Mode

'use strict'


// String data

let name = "variable name";
alert("Comillas dobles");
alert('Comillas simples');
alert(`Llamo a la ${name}`);
alert(`Llamo a la ${"name"}`);
alert(`El resultado de 123 + 45 es ${123+45}`);
alert("El resultado de 123 + 45 es ${123+45}");


// Boolean data

let greaterOrMinor = 10 > 9;
let greaterOrMinor2 = 10 < 9;
alert(greaterOrMinor);
alert(greaterOrMinor2);


// Null data

let brain = null;
alert (`El valor de la variable brain es ${brain}`);


// Undefined data

let pocket;
alert(`El valor de la variable pocket es ${pocket}`);


// Typeof data

alert(`El tipo de dato de la variable name es ${typeof name}`);
alert(`El tipo de dato de la variable greaterOrMinor es ${typeof greaterOrMinor}`);
alert(`El tipo de dato de la variable brain es ${typeof brain}`);
alert(`El tipo de dato de la variable pocket es ${typeof pocket}`);
alert(`El tipo de dato de la variable alert es ${typeof alert}`);
