
  function fizzBuzz(number) { if(number % 3 === 0) {
    return 'fizz'
  } else if (number % 5 === 0) {
    return 'buzz'
  } else {
    return number
  }
}

console.log(fizzbuzz(1..20))
