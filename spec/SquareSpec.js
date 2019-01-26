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
    console.log(surfaceArea)
    expect(surfaceArea).toEqual(25)
  })
})
