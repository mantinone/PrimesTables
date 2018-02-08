const chai = require('chai')
const expect = chai.expect
const {nPrimes, checkPrime} = require('../src/index.js')

describe('The checkPrime function', () => {
  it('Should return true for prime numbers', () => {
    expect(checkPrime(2)).to.be.true
    expect(checkPrime(5)).to.be.true
    expect(checkPrime(11)).to.be.true
    expect(checkPrime(127)).to.be.true
    expect(checkPrime(199)).to.be.true
  })

  it('Should return false for non prime integers', () => {
    expect(checkPrime(4)).to.be.false
    expect(checkPrime(27)).to.be.false
    expect(checkPrime(100)).to.be.false
    expect(checkPrime(5.5)).to.be.false
    expect(checkPrime(2.5)).to.be.false
  })

  it('Should return false for negatives and for bad input', () => {
    expect(checkPrime(-2)).to.be.false
    expect(checkPrime(-7)).to.be.false
    expect(checkPrime("fish")).to.be.false
  })
})

describe('The nPrimes function', () => {
  it('Should take return an array of the first N primes, where N is a positive integer', () => {
    expect(nPrimes(1)).to.eql([2])
    expect(nPrimes(5)).to.eql([2,3,5,7,11])
    expect(nPrimes(14)).to.eql([2,3,5,7,11,13,17,19,23,29,31,41,43,47])
  })

  it('Should return an empty array if it receives an integer < 1', () => {
    expect(nPrimes(0)).to.eql([])
    expect(nPrimes(-4)).to.eql([])
  })

  it('Should return an error if it receives a non integer number', () => {
    expect(nPrimes(2.5)).to.eql('Use an Integer')
  })

  it('Should return NaN if it receives a non numeral input', () => {
    expect(nPrimes('fish')).to.be.NaN
  })

})