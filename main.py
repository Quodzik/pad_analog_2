def analog():
    x_max = 512
    y_max = 512
    x_min = 511
    y_min = 511

    while True:
        x = pins.analog_read_pin(AnalogPin.P1)
        y = pins.analog_read_pin(AnalogPin.P2)

        if x_max < x:
            x_max = x
        if y_max < y:
            y_max = y
        if x_min > x:
            x_min = x
        if y_min > y:
            y_min = y

        x_przedzial = x_max - x_min  # jak daleko jest od maxa do mina
        y_przedzial = y_max - y_min

        x_srodek = x_min + (x_przedzial / 2)  # jaka jest wartosc po srodku
        y_srodek = y_min + (y_przedzial / 2)

        x_procent = int((x - x_min) / x_przedzial * 100)
        y_procent = int((y - y_min) / y_przedzial * 100)
        poziom(y_procent/4)
        # basic.show_number(x)

def poziom(level):
    basic.clear_screen()
    x = 0
    y = 0
    cur = 0
    while y < 5:
        if cur >= level:
            break
        x = 0
        while x < 5:
            led.plot(x,y)
            x += 1
            cur += 1
            if cur >= level:
                break
        y += 1

analog()

