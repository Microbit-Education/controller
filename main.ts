input.onButtonPressed(Button.AB, function () {
    radio.sendString("stop")
    basic.showIcon(IconNames.Sad)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "copy") {
        basic.showIcon(IconNames.Happy)
    }
})
basic.showLeds(`
    . . . . .
    . . . . .
    # . # . #
    . . . . .
    . . . . .
    `)
radio.setGroup(33)
basic.showIcon(IconNames.Yes)
