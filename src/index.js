const checkPrime = ( p ) => {
  if( p < 2 || p%1 !== 0 ){
    return false
  } //else if ( p <= 3){
  //   return true
  // } else if ( p%2 === 0 || p%3 === 0){
  //   return false
  // }
  let i = 2
  while( i*i <= p ){
    if( p%i === 0){
      return false
    }
    i++
  }
  return true
}

const nPrimes = ( n ) => {
  if( n < 1 || n%1 !== 0){
    return 'nPrimes requires a Positive Integer'
  }

  let primeList = []
  let i = 2
  while( primeList.length < n ){
    if( checkPrime(i) ){
      primeList.push( i )
    }
    i++
  }

  return primeList
}

const timesTable = ( numberArray ) => {
  //Print out first row
  let table = 'x '
  for( i of numberArray ){
    table += `${i} `
  }
  table += '\n'

  //Now print the table 
  for( i of numberArray ){
    table += `${i} `
    for( j of numberArray){
      table += `${i*j} `
    }
    table += '\n'
  }

  return table
}

console.log( timesTable(nPrimes(10)) );


module.exports = { nPrimes, checkPrime, timesTable }