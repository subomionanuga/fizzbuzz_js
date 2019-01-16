describe('fizzBuzz', function() {

  describe('multiples of 3 returns fizz', function() {
    it("checks that 3 returns fizz", function() {
      expect(fizzBuzz(3)).toEqual('fizz')
    })
    it("checks that 9 returns fizz", function() {
      expect(fizzBuzz(9)).toEqual('fizz')
    })
  })

  describe('multiples of 5 returns buzz', function() {
    it("checks that 5 returns buzz", function() {
      expect(fizzBuzz(5)).toEqual('buzz')
    })
    it("checks that 10 returns buzz", function() {
      expect(fizzBuzz(10)).toEqual('buzz')
    })
  })

  describe("checks that multiples of 3 and 5 return fizzbuzz", function() {
    it("checks that 15 returns fizzbuzz", function() {
      expect(fizzBuzz(15)).toEqual('fizzbuzz')
    })
    it("checks that 30 returns fizzbuzz", function() {
      expect(fizzBuzz(30)).toEqual('fizzbuzz')
    })
  })
})
