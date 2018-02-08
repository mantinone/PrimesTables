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
  let primeList = []

  return primeList
}



module.exports = { nPrimes, checkPrime }