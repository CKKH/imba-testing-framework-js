const describe = (description, fn) => {
  console.log(description)
  fn()
}

const it = (message, fn) => {
  console.log('     ' + message)
  fn()
}
