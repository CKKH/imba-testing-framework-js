describe('Descriptions of tests added like this', () => {
})

describe('Use it blocks after descriptions to make it obvious what specific tests are doing', () => {
  it('I provide more information about the specific functionality I am testing', () => {
  })
})

describe('Square', () => {
  it('.area calulates surface area', () => {
    let square = new Square(5)
    let surfaceArea = square.area()
    expect(surfaceArea).toEqual(25)
  })

  it('throws an error if instantiated with a non number argument', () => {
    let square = function () { new Square("I'm not a number, throw error")}
    expect(square).toThrowError('argument is not a number')
  })

  it('throws an error if instantiated with a negative number', () => {
    let square = function () { new Square(-10)}
    expect(square).toThrowError('size should be a positive number')
  })

  it('contains an array with a message', () => {
    let square = new Square(5)
    expect(square.array).toContain("I'm contained in an array!")
  })
})
