input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.X))
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(1000)
    basic.clearScreen()
})
