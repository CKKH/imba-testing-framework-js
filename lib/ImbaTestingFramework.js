const describe = (description, fn) => {
  console.log(description)
  fn()
}

const it = (message, fn) => {
  console.log('     ' + message)
  fn()
}

const expect = (expectation) => matchers(expectation)

const matchers = (expectation) => ({
  toEqual: (assertion) => {
    if (expectation === assertion) {
      console.log('%c Pass || Expected: ' + expectation + ' Returned: ' + assertion, 'color:#808000')
      return true
    } else {
      console.log('%c Fail || Expected: ' + expectation + ' Returned: ' + assertion, 'color:#8b0000')
      return false
    }
  }
})
