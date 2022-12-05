hummingbird.startHummingbird()
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Light, ThreePort.One) < 10 || hummingbird.getSensor(SensorType.Dial, ThreePort.Two) > 1) {
        hummingbird.setPositionServo(FourPort.One, 0)
    } else {
        hummingbird.setPositionServo(FourPort.One, 180)
        basic.pause(300)
        hummingbird.setPositionServo(FourPort.One, 20)
        basic.pause(300)
    }
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Light, ThreePort.One) < 10) {
        hummingbird.setPositionServo(FourPort.Two, 0)
    } else {
        hummingbird.setPositionServo(FourPort.Two, 180)
    }
})
