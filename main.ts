input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    a = BitArray(31)
    bit.plot25LED(1, a)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let Index = 0; Index <= 2 ** 6 - 1; Index++) {
        bit.plot25LED(3, BitArray2(Index))
        basic.pause(500)
    }
})
function BitArray (dezParameter: number) {
    list = []
    d = Math.trunc(dezParameter)
    while (d > 0) {
        rest = d % 2
        boolean = rest == 1
        list.push(boolean)
        d = Math.trunc(d / 2)
    }
    return list
}
function BitArray2 (dezParameter: number) {
    list = []
    d = Math.trunc(dezParameter)
    while (d > 0) {
        list.push(d % 2 == 1)
        d = bit.bitwise(d, bit.eBit.RIGHT, 1)
    }
    return list
}
let boolean = false
let rest = 0
let d = 0
let list: boolean[] = []
let a: boolean[] = []
bit.comment("Erweiterung laden:")
bit.comment("calliope-net/bit")
