input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    a = BitArray(22)
    bit.plot25LEDn(0, a)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let Index = 0; Index <= 2 ** 6 - 1; Index++) {
        bit.plot25LEDn(3, BitArray(Index))
        basic.pause(500)
    }
})
function BitArray (dezParameter: number) {
    list = []
    d = Math.trunc(dezParameter)
    while (d > 0) {
        rest = d % 2
        list.push(rest)
        d = Math.trunc(d / 2)
    }
    return list
}
let rest = 0
let d = 0
let list: number[] = []
let a: number[] = []
bit.comment("elssner/sim-dez-bin")
bit.comment("Erweiterung laden:")
bit.comment("calliope-net/bit")
