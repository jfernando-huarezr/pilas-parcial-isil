import Stack from './src/stack.js'

function postfixEvaluate(expression) {
  
  const stack = new Stack

  //creamos un arreglo con los operadores para validaciones
  const operators = ["+", "-", "*", "/"]
  //convertimos la expresion en un arreglo
  const operands = expression.split(" ")

  //variables auxiliares
  let num1
  let num2
  let answ

  //iterar sobre el arreglo
  for (let char of operands) {
    //Si encuentra un espacio, error
    if (char === "") return "Error, espacios de más en la expresion"

    //Si el char es un operador
    if (operators.includes(char)) {
      if (stack.isEmpty()) return "Error, estas iniciando con una operacion"
      if (stack.size() == 1) return "Error, operacion con un solo operando"

      num1 = stack.pop()
      num2 = stack.pop()

      switch (char) {
        case "+": {
          answ = num1+num2
          break;
        }

        case "-": {
          answ = num2-num1
          break;
        }

        case "*": {
          answ = num2*num1
          break;
        }

        case "/": {
          //en caso encuentre una division entre 0
          if (num1===0) return "Error, division entre 0"
          answ = num2/num1
          break;
        }        
      }  

      stack.push(answ)  
    }
    
    //si es un numero, agregarlo al stack
    else if (!Number.isNaN(char/1)){
      stack.push(char/1)
    }
    
    //cualquier otro caso es un error en la redaccion de la expresion
    else {
      return "Error, expresion mal redactada"
    }     
     
  }

  return answ
}

let expression = '8 2 5 * + 1 3 2 * * /'
let expression2 = '6 7 3 + + *'
let expression3 = '+ 3 4'
let expression4 = '3    4     -'
let expression5 = '2 3 4 7 + * +'

let value = postfixEvaluate(expression)
console.log(value) // salida: 3

let value2 = postfixEvaluate(expression2)
console.log(value2)

let value3 = postfixEvaluate(expression3)
console.log(value3)

let value4 = postfixEvaluate(expression4)
console.log(value4)

let value5 = postfixEvaluate(expression5)
console.log(value5)