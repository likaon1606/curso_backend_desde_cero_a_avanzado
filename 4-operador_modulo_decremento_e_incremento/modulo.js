//? Mas operadores, comparación débil "==", comparación estricta"===", modulo "%", incremento "++", decremento "--", exponenciacion "**"

//* ✅ == (igualdad débil)
// Compara valores, permitiendo conversión de tipo.

// Si los tipos son diferentes, intenta convertirlos para compararlos.

//5 == '5'          -- true (convierte '5' a número)
//false == 0        -- true (convierte false a 0)
//null == undefined -- true
// console.log(5 === "5");
// console.log(typeof(5));
// console.log(typeof("5"));

// console.log(false === 0);
// console.log(typeof(false));
// console.log(typeof(0));

// console.log(null === undefined);
// console.log(typeof(null));
// console.log(typeof(undefined));



//* 🔵 2. Operador Módulo (%) 

//* 🎙 Explicación:
// "El operador módulo devuelve el residuo de una división. No cuánto cabe, sino lo que sobra."

// 💻 Ejemplo:

// console.log(10 % 3); // 1
// console.log(15 % 5); // 0

// ✅ Aplicación útil:
//* ¿Quiero saber si un número es par?
// const num = 10
// console.log(num % 2 === 0); //true

//* 📌 Ejercicio para el alumno:
// "Crea una variable llamada edad y determina si es un número impar. Muestra el resultado como true."

// let edad = 5
// console.log(edad % 2 === 1 ); //true



//* 🔵 2. Incremento, Decremento (++ y --)

//* 🎙 Explicación:
// "A veces solo quieres subir o bajar un valor uno por uno."

// 💻 Ejemplo:

// let num = 5
// console.log(++num);

//* 📌 Ejercicio para el alumno:
// "Crea una variable llamada contador, inicialízala en 0, luego súmale 1 tres veces con ++ y muéstrala en consola."
// let contador = 0
// ++contador
// ++contador
// ++contador
// console.log(contador);




//* 🔵 *3. Asignación compuesta (+=, -=, *=, /=, %=) 

//* 🎙 Explicación:
// "Cuando vas a actualizar una variable, puedes escribir menos usando operadores compuestos."

// 💻 Ejemplo:

// let puntos = 10;

// puntos += 5; // 15
// console.log('suma: ', puntos);
// puntos -= 10; // 5
// console.log('resta: ', puntos);
// puntos *= 2; // 10
// console.log('multiplicando: ', puntos);

// puntos /= 3; // 3.33
// console.log('dividiendo: ', puntos);
// puntos %= 2; // 1.33
// console.log('residuo: ', puntos);




//? ----------------- TABLA DE VALORES COMPUESTOS --------------------//

// ✅ Operadores compuestos más comunes (Existen más, pero por ahora solo veremos estos):

/*
| Operador |     Equivalente     |     Ejemplo inicial     | Resultado final |         Explicación         |
|----------|---------------------|--------------------------|------------------|------------------------------|
|   +=     |   x = x + valor     |     x = 10; x += 5;      |       15         |     Suma y asigna            |
|   -=     |   x = x - valor     |     x = 30; x -= 10;     |       20         |     Resta y asigna           |
|   *=     |   x = x * valor     |     x = 10; x *= 2;      |       20         |     Multiplica y asigna      |
|   /=     |   x = x / valor     |     x = 20; x /= 4;      |       5          |     Divide y asigna          |
|   %=     |   x = x % valor     |     x = 10; x %= 3;      |       1          |     Módulo y asigna (residuo)|
|  **=     |   x = x ** valor    |     x = 2; x **= 3;      |       8          |     Potencia y asigna        |
*/

//* 🎯 ¿Por qué usarlos?

// Hacen el código más corto y limpio.
// Son muy comunes en ciclos, contadores y lógica matemática.

//* 📌 Ejercicio:
// "Crea una variable saldo con valor 1000.
// Luego réstale 250, multiplícalo por 1.05 (interés) y muestra el resultado final."
// plus colocar tu saldo es: ""

let saldo = 1000
console.log("Tu saldo es: ", saldo);


saldo -= 250
console.log("Haz gastado: ", saldo);
saldo *= 1.05
console.log("tu saldo final después de interéses es de: ", saldo);


//? ******* Ejercicio de entrevista técnica ****************

//* 📌 Restricciones:
// No uses operadores normales como = o +, -, *, etc. solos.
// Usa únicamente operadores compuestos.

//* - Ejercicio: Estás desarrollando una pequeña app para controlar tu gasto diario.

//* 📝 Enunciado:

// Tienes $500 en tu billetera. A lo largo del día haces estas operaciones:
// Ganas $200 vendiendo unas cosas.
// Compras ropa por $150.
// Multiplicas lo que te queda por 1.1 porque recibiste un pequeño bono.
// Divides tu dinero en 2 para guardarlo en dos sobres.
// Finalmente, te gastas las monedas que sobran al dividir tu saldo entre 4.

//********  🎯 Salida esperada:  *****/
//-------- Saldo final: 1.25 -----------


