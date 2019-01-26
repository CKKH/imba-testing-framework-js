// class Square {
//   constructor(size) {
//     if (isNaN(size)) {
//       throw new Error('argument is not a number');
//     }
//     if (size < 0) {
//         throw new Error('size should be a positive number');
//     }
//     this.size = size;
// this.array = ["I'm contained in an array!"]
//   }

//   area() {
//     return this.size * this.size;
//   }
// }

function Square (size) {
  if (isNaN(size)) {
    throw new Error('argument is not a number');
  }
  if (size < 0) {
      throw new Error('size should be a positive number');
  }
  this.size = size
  this.array = ["I'm contained in an array!"]
}

Square.prototype.area = function () {
  return this.size * this.size
}
