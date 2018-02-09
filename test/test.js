const chai = require('chai')
const expect = chai.expect
const {nPrimes, checkPrime, timesTable} = require('../src/index.js')

describe('The checkPrime function', () => {
  it('Should return true for prime numbers', () => {
    expect(checkPrime(2)).to.be.true
    expect(checkPrime(3)).to.be.true
    expect(checkPrime(5)).to.be.true
    expect(checkPrime(7)).to.be.true
    expect(checkPrime(11)).to.be.true
    expect(checkPrime(37)).to.be.true
    expect(checkPrime(127)).to.be.true
    expect(checkPrime(199)).to.be.true
  })

  it('Should return false for non prime integers', () => {
    expect(checkPrime(1)).to.be.false
    expect(checkPrime(4)).to.be.false
    expect(checkPrime(6)).to.be.false
    expect(checkPrime(8)).to.be.false
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
    expect(nPrimes(10)).to.eql([2,3,5,7,11,13,17,19,23,29])
    expect(nPrimes(14)).to.eql([2,3,5,7,11,13,17,19,23,29,31,37,41,43])
  })

  it('Should return an error message if it receives an invalid input', () => {
    expect(nPrimes(0)).to.eql('nPrimes requires a Positive Integer')
    expect(nPrimes(-4)).to.eql('nPrimes requires a Positive Integer')
    expect(nPrimes(2.5)).to.eql('nPrimes requires a Positive Integer')
    expect(nPrimes('Fish')).to.eql('nPrimes requires a Positive Integer')
  })

})

describe('The timesTable function', () => {
  it('Should print out a multiplication table given an array of numbers', () => {
    expect(timesTable([1,2,3])).to.eql("x 1 2 3 \n 1 1 2 3 \n 2 2 4 6 \n 3 6 9")
    expect(timesTable([1])).to.eql("x 1 \n 1 1")
    expect(timesTable([2,5,7])).to.eql("x 2 5 7 \n 2 4 10 14 \n 5 10 25 35 \n 7 14 35 49")

  })

  it("Displays an error if you don't give it an array of numbers", () => {
    expect(timesTable("bloop")).to.eql('')
    expect(timesTable([1,"a"])).to.eql('')
  })
})

