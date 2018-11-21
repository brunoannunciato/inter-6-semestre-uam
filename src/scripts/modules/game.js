export class Game {
    results() {
        $('.result .slider').slick({
            arrows: false,
            dots: true
        });
    }

    leds() {
        const leds = [$('#1'), $('#2'), $('#3'), $('#4'), $('#5'), $('#6'), $('#7'), $('#8'),$('#9'), $('#10'), $('#11'), $('#12'), $('#13'), $('#14'), $('#15'), $('#16'), $('#17'), $('#18'), $('#19'), $('#20'), $('#21'), $('#22'), $('#23'), $('#24'), $('#25'), $('#26'), $('#27'), $('#28'), $('#29'), $('#30'), $('#31'), $('#32'), $('#33'), $('#34'), $('#35'), $('#36'), $('#37'), $('#38'), $('#39'), $('#40'), $('#41'), $('#42'), $('#43'), $('#44'), $('#45'), $('#46'), $('#47'), $('#48'), $('#49') ]
        

        for (let led of leds) {
            let color = 0;
            led.click(function() {
                color++;
                if (color > 4) {
                    color = 0;
                }

                this.setAttribute('data-color', color);

                switch (color) {
                    case 1:
                        this.style.background = '#ff4343';
                    break;

                    case 2:
                        this.style.background = '#4388ff';
                    break;

                    case 3:
                        this.style.background = '#43ff75';
                    break;

                    case 4:
                        this.style.background = '#ffe043';
                    break;


                    default:
                        this.style.background = 'none';
                    break;
                }
            });
        }
    }
}