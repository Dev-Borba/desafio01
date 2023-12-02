let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da Divisão: ' + restDiv)

function checkNumbers(firstNumber, secondNumber) {
  if (firstNumber === secondNumber) {
    return 'Os números são iguais';
  } else if (firstNumber % 2 === 0 && secondNumber % 2 === 0) {
    return 'Os números são pares';
  } else if (firstNumber % 2 !== 0 && secondNumber % 2 !== 0) {
    return 'Os números são ímpares';
  }
}

alert(checkNumbers(firstNumber, secondNumber));

