describe('fizzBuzz', function() {
  it("returns a number", function() {
    var a = 1
    expect(a).toEqual(1)
  })

  it("tests a variable's return value", function() {

    expect(fizzBuzz(2)).toEqual(2)
  })

  it("tests for a different value", function() {
    expect(fizzBuzz(10)).toEqual(10)
  })

  it("tests for a different value", function() {
    expect(fizzBuzz(100)).toEqual(100)
  })


})