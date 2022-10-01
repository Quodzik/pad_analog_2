function analog() {
    let x: number;
    let y: number;
    let x_przedzial: number;
    let y_przedzial: number;
    let x_srodek: any;
    let y_srodek: any;
    let x_procent: any;
    let y_procent: number;
    let x_max = 512
    let y_max = 512
    let x_min = 511
    let y_min = 511
    while (true) {
        x = pins.analogReadPin(AnalogPin.P1)
        y = pins.analogReadPin(AnalogPin.P2)
        if (x_max < x) {
            x_max = x
        }
        
        if (y_max < y) {
            y_max = y
        }
        
        if (x_min > x) {
            x_min = x
        }
        
        if (y_min > y) {
            y_min = y
        }
        
        x_przedzial = x_max - x_min
        //  jak daleko jest od maxa do mina
        y_przedzial = y_max - y_min
        x_srodek = x_min + x_przedzial / 2
        //  jaka jest wartosc po srodku
        y_srodek = y_min + y_przedzial / 2
        x_procent = Math.trunc((x - x_min) / x_przedzial * 100)
        y_procent = Math.trunc((y - y_min) / y_przedzial * 100)
        poziom(y_procent / 4)
    }
}

//  basic.show_number(x)
function poziom(level: number) {
    basic.clearScreen()
    let x = 0
    let y = 0
    let cur = 0
    while (y < 5) {
        if (cur >= level) {
            break
        }
        
        x = 0
        while (x < 5) {
            led.plot(x, y)
            x += 1
            cur += 1
            if (cur >= level) {
                break
            }
            
        }
        y += 1
    }
}

analog()
