# Curso: Algoritmos & Estructura de Datos

## ISIL 2023-2

### Examen Parcial - Evaluador de Expresiones Postfijas

#### Descripción

En matemáticas, usualmente escribimos operaciones en una forma que se llama notación infija, donde el operador se coloca entre los operandos, como en "3 + 4". Sin embargo, existe otra forma llamada notación postfija o notación polaca inversa, donde el operador se coloca después de los operandos, como en "3 4 +". La ventaja de esta notación es que elimina la necesidad de paréntesis para indicar el orden de las operaciones. Tu tarea es escribir un programa que evalúe una expresión dada en notación postfija.

#### Entrada

- Una única línea que contiene una expresión en notación postfija. Los elementos de la expresión están separados por un espacio en blanco.

- Se asume que los elementos pueden ser números enteros o uno de los siguientes operadores: +, -, \*, /.

#### Salida

- Si la expresión es válida, imprime el resultado de la evaluación de la expresión en notación postfija.

- Si la expresión es inválida (por ejemplo, si hay un operador con solo un operando o si hay una división por cero), imprime "Expresión inválida".

Ejemplo:

- Entrada: 8 2 5 _ + 1 3 2 _ \* /

- La evaluación se realiza de la siguiente manera:

- 8 (se apila)
- 2 (se apila)
- 5 (se apila)
- - (se desapilan dos elementos, se multiplica 2 por 5, el resultado - 10 se apila)
- - (se desapilan dos elementos, se suma 8 y 10, el resultado 18 se apila)
- 1 (se apila)
- 3 (se apila)
- 2 (se apila)
- - (se desapilan dos elementos, se multiplica 3 por 2, el resultado 6 se apila)
- - (se desapilan dos elementos, se suma 1 y 6, el resultado 6 se apila)
- / (se desapilan dos elementos, se divide 18 entre 6, el resultado 3 se apila)

- Salida: 3`

#### Rúbrica:

- Implementación del algoritmo
- Validación de expresiones inválidas

Para hacer las pruebas ejecutar el comando `npm run test`. Un video con la solucion explicada se encuentra en este [enlace](https://youtu.be/NZ4K-GZA0tI)
