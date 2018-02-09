const checkPrime = ( p ) => {
  if( p < 2 || p%1 !== 0 ){
    return false
  } else if ( p <= 3){
     return true
   } 
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
  //Build out first row
  let table = 'x\t'
  for( i of numberArray ){
    table += `${i}\t`
  }
  table += '\n\n'

  //Now build the table
  for( i of numberArray ){
    table += `${i}\t`
    for( j of numberArray){
      let product = i*j
      if( product != product ){
        return "Some inputs were not numbers"
      }
      table += `${product}\t`
    }
    table += '\n\n'
  }

  return table
}

module.exports = { nPrimes, checkPrime, timesTable }