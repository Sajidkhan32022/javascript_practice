const shape  = {
    name : 'Rectangle',
    sides : 4
}

const Rectangle = {
    length : 3,
    width : 5
}

const sqaure = {
    side : 'same'
}
shape.__proto__ = Rectangle
Rectangle.__proto__ = sqaure
console.log(shape.side)

