#Javascript fizzBuzz

The aim of this project was to demonstrate my ability to test-drive a small application in a new language.
Using my knowledge of Ruby and gaining undertstanding of basic JS syntax from the docs, I was able to recreate the fizzbuzz challenge which I have done in Ruby previously.

##Approach
* Download the desired Jasmine release https://github.com/jasmine/jasmine/releases
* Pick out relevant parts from the docs https://jasmine.github.io/tutorials/your_first_suite
* Write test to pass in the easiest way and build from there.

Only 3 tests are needed to do this but I wrote first, the first two just to check that the framework was doing what I needed.

`describe('fizzBuzz', function() {
  it("returns a number", function() {
    var a = 1
    expect(a).toEqual(1)
  })

  it("tests a variable's return value", function() {

    expect(fizzBuzz(2)).toEqual(2)
  })

  it("checks that multiples of 3 return fizz", function() {
    expect(fizzBuzz(3)).toEqual('fizz')
  })

  it("checks that multiples of 5 return fizz", function() {
    expect(fizzBuzz(5)).toEqual('buzz')
  })

  it("checks that multiples of 3 and 5 return fizzbuzz", function() {
    expect(fizzBuzz(15)).toEqual('fizzbuzz')
  })

})`

##Challenges
* Trying to understand the different ways that JS syntax differs from Ruby.
* Similar to above, trying to figure out how to test in a new framework.


##Important Notes to Self
* Unlike RSpec in Ruby, Jasmine needs to be manually added to all repos that it will be used to test. I have not yet come across the equivalent of a 'gem' that does this automatically but I will research further.
