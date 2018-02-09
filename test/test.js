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
    expect(timesTable([1,2,3])).to.eql("x\t1\t2\t3\t\n\n1\t1\t2\t3\t\n\n2\t2\t4\t6\t\n\n3\t3\t6\t9\t\n\n")
    expect(timesTable([4])).to.eql("x\t4\t\n\n4\t16\t\n\n")
    expect(timesTable([2,5,7])).to.eql("x\t2\t5\t7\t\n\n2\t4\t10\t14\t\n\n5\t10\t25\t35\t\n\n7\t14\t35\t49\t\n\n")
  })

  it("Displays an error if you don't give it an array of numbers", () => {
    expect(timesTable("bloop")).to.eql('')
    expect(timesTable([1,"a"])).to.eql('')
  })
})

