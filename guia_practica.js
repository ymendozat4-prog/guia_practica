/*Yker Mnedoza*/

function contarCaracteres() {
  let palabra = prompt("Ingresa una palabra:");
  console.log("La palabra tiene " + palabra.length + " letras.");
}

function contarApariciones() {
  let texto = prompt("Ingresa un texto:");
  let letra = prompt("Ingresa la letra que deseas contar:");
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == letra) {
      contador++;
    }
  }
  console.log("La letra " + letra + " aparece " + contador + " veces.");
}

function invertirTexto() {
  let text = prompt("Ingresa un texto:");
  let invertido = "";
  for (let i = text.length - 1; i >= 0; i--) {
    invertido += text[i];
  }
  console.log("Texto invertido: " + invertido);
}

function compararLongitud() {
  let ape1 = prompt("Ingrese el primer apellido:");
  let ape2 = prompt("Ingrese el segundo apellido:");
  if (ape1.length > ape2.length) {
    console.log("El apellido " + ape1 + " tiene más letras.");
  } else if (ape2.length > ape1.length) {
    console.log("El apellido " + ape2 + " tiene más letras.");
  } else {
    console.log("Ambos tienen la misma cantidad de letras.");
  }
}

function iniciales() {
  let nombre = prompt("Ingrese tu nombre completo:");
  let ini = nombre[0];
  for (let i = 0; i < nombre.length; i++) {
    if (nombre[i] == " ") {
      ini += nombre[i + 1];
    }
  }
  console.log("Iniciales: " + ini);
}

function reemplazoCaracter() {
  let texto = prompt("Ingrese un texto:");
  let letra = prompt("Ingrese la letra que desea cambiar:");
  let nueva = prompt("Ingrese la letra nueva:");
  let nuevoTexto = "";
  for (let i = 0; i < texto.length; i++) {
    nuevoTexto += texto[i] == letra ? nueva : texto[i];
  }
  console.log("Nuevo texto: " + nuevoTexto);
}

function esPalindromo() {
  let palabra = prompt("Ingresa una palabra:");
  let invertido = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    invertido += palabra[i];
  }
  console.log(palabra == invertido ? "La palabra es palíndroma." : "La palabra no es palíndroma.");
}

function fraseMayor() {
  let frase1 = prompt("Ingresa la primera frase:");
  let frase2 = prompt("Ingresa la segunda frase:");
  if (frase1.length > frase2.length) {
    console.log("La primera frase es más larga.");
  } else if (frase2.length > frase1.length) {
    console.log("La segunda frase es más larga.");
  } else {
    console.log("Las dos frases tienen la misma cantidad de letras.");
  }
}

function contarCaracter() {
  let texto = prompt("Ingresa un texto:");
  let letra = prompt("Ingresa la letra que deseas contar:");
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == letra) {
      contador++;
    }
  }
  console.log("La letra " + letra + " aparece " + contador + " veces.");
}

function dividirOracion() {
  let oracion = prompt("Ingresa una oración:");
  let palabra = "";
  for (let i = 0; i < oracion.length; i++) {
    if (oracion[i] != " ") {
      palabra += oracion[i];
    } else {
      console.log(palabra);
      palabra = "";
    }
  }
  console.log(palabra);
}

function contarPalabras() {
  let texto = prompt("Ingresa una oración:");
  let contador = 1;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == " ") {
      contador++;
    }
  }
  console.log("Número de palabras: " + contador);
}

function textoMayusculasMinusculas() {
  let texto = prompt("Ingresa un texto:");
  console.log("Mayúsculas: " + texto.toUpperCase());
  console.log("Minúsculas: " + texto.toLowerCase());
}

function divisoresDeArreglo() {
  let numeros = [6, 10];
  for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    console.log("Divisores de " + num + ":");
    for (let c = 1; c <= num; c++) {
      if (num % c == 0) {
        console.log(c);
      }
    }
  }
}

function sumaDivisoresArr() {
  let numeros = [6, 12];
  for (let i = 0; i < numeros.length; i++) {
    let suma = 0;
    for (let c = 1; c <= numeros[i]; c++) {
      if (numeros[i] % c == 0) {
        suma += c;
      }
    }
    console.log("Suma de divisores de " + numeros[i] + " = " + suma);
  }
}

function paresImpares() {
  let numeros = [1, 2, 3, 4, 5];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      console.log(numeros[i] + " es par");
    } else {
      console.log(numeros[i] + " es impar");
    }
  }
}

function sumaArreglo() {
  let numeros = [1, 2, 3, 4, 5];
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  console.log("La suma es: " + suma);
}

function mayorArreglo() {
  let numeros = [1, 2, 3, 4, 5];
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  console.log("El número mayor es: " + mayor);
}

function menorArreglo() {
  let numeros = [1, 2, 3, 4, 5];
  let menor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  console.log("El número menor es: " + menor);
}

function promedioArreglo() {
  let numeros = [1, 2, 3, 4, 5];
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  let promedio = suma / numeros.length;
  console.log("El promedio es: " + promedio);
}

function buscarElemento() {
  let numeros = [1, 2, 3, 4, 5];
  let buscar = parseInt(prompt("Ingresa el número a buscar:"));
  let encontrado = false;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == buscar) {
      encontrado = true;
      break;
    }
  }
  console.log(encontrado ? "Número encontrado." : "Número no encontrado.");
}

function duplicarArreglo() {
  let numeros = [1, 2, 3, 4, 5];
  let duplicados = [];
  for (let i = 0; i < numeros.length; i++) {
    duplicados.push(numeros[i] * 2);
  }
  console.log("Arreglo duplicado: " + duplicados.join(", "));
}

function invertirArreglo() {
  let numeros = [1, 2, 3, 4, 5];
  let invertido = [];
  for (let i = numeros.length - 1; i >= 0; i--) {
    invertido.push(numeros[i]);
  }
  console.log("Arreglo invertido: " + invertido.join(", "));
}

function eliminarDuplicados() {
  let numeros = [1, 2, 2, 3, 4, 4, 5];
  let sinDuplicados = [];
  for (let i = 0; i < numeros.length; i++) {
    if (!sinDuplicados.includes(numeros[i])) {
      sinDuplicados.push(numeros[i]);
    }
  }
  console.log("Sin duplicados: " + sinDuplicados.join(", "));
}

function ordenarArreglo() {
  let numeros = [5, 3, 1, 4, 2];
  for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      if (numeros[i] > numeros[j]) {
        let temp = numeros[i];
        numeros[i] = numeros[j];
        numeros[j] = temp;
      }
    }
  }
  console.log("Arreglo ordenado: " + numeros.join(", "));
}

function frecuenciaElementos() {
  let numeros = [1, 2, 2, 3, 3, 3, 4];
  let frecuencias = {};
  for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    if (frecuencias[num]) {
      frecuencias[num]++;
    } else {
      frecuencias[num] = 1;
    }
  }
  for (let clave in frecuencias) {
    console.log("El número " + clave + " aparece " + frecuencias[clave] + " veces.");
  }
}
