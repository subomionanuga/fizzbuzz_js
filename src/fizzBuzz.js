
  function fizzBuzz(number) { if(number % 3 === 0) {
    return 'fizz'
  } else if (number % 5 === 0) {
    return 'buzz'
  } else {
    return number
  }
}

for(num=1;num<20;num++) {
console.log(fizzBuzz(num))
}
