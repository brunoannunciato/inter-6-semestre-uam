import infos from './letters';

if(localStorage.getItem('economicMode') == "false") {
	$('.economic-mode').addClass('hide');
	console.log('teste');
}

$('.trigger').click(() => {
	$('.economic-mode').toggleClass('active');
});

export class Game {

	results() {
		$('.done.active').click(function() { alert(0) })

		// $('.done.active').click(function() {
		// 	console.log('teste');
		// 	$('section.panel').addClass('hide');
		// 	$('section.result').removeClass('hide');
		// });
	}

	leds() {
		const leds = [$('#1'), $('#2'), $('#3'), $('#4'), $('#5'), $('#6'), $('#7'), $('#8'),$('#9'), $('#10'), $('#11'), $('#12'), $('#13'), $('#14'), $('#15'), $('#16'), $('#17'), $('#18'), $('#19'), $('#20'), $('#21'), $('#22'), $('#23'), $('#24'), $('#25'), $('#26'), $('#27'), $('#28'), $('#29'), $('#30'), $('#31'), $('#32'), $('#33'), $('#34'), $('#35'), $('#36'), $('#37'), $('#38'), $('#39'), $('#40'), $('#41'), $('#42'), $('#43'), $('#44'), $('#45'), $('#46'), $('#47'), $('#48'), $('#49'), $('#50'), $('#51'), $('#52'), $('#53'), $('#54'), $('#55'), $('#56'), $('#57'), $('#58'), $('#59'), $('#60'), $('#61'), $('#62'), $('#63'), $('#64') ]
		const infoIndex = Math.floor(Math.random() * Math.floor(infos.length));
		const sortedObj = infos[infoIndex];
		let sortedTotal = 0, clickedTotal = 0;
		console.log()

		if (window.location.pathname.includes('panel')) {
			fetch('http://192.168.43.45/MATRIZ=' + sortedObj.letter.toUpperCase(), {mode: 'no-cors', method: 'GET'});
		}

		/** Append what letter is sorted */
		$('.letter').text(sortedObj.letter);

		/** Append each word to the list of words */
		sortedObj.words.forEach(element => $('.word-list').append(`<li class="list-item">${element}</li>`));

		/** Append each object name and figure to the list of figures */
		for (let item in sortedObj.objects) {
			$('.object-list').append(`
				<li class="object">
					<figure class="image">
						<img src="${sortedObj.objects[item]}" alt="${item}">
					</figure>
					<p class="obj-name">${item}</p>
				</li>
			`);
		}
		
		/** Count how many positions have a number different from 0 */
		for (let value in sortedObj.values) {
			if (sortedObj.values[value] > 0) sortedTotal++;
		}
		
		console.log('sortedTotal', sortedTotal, sortedObj);

		for (let led of leds) {
			// led.text(led.attr('id'))
			
			let color = 0;
			
			led.click(function() {
				let self = $(this);

				color++;
				
				if (color > 1) {
					color = 0;
				}
				
				self.attr('data-color', color);
				
				switch (color) {
					case 1:
						this.style.background = localStorage.getItem('wrongColor');
					break;
				}
				
				let itemColor = Number(self.attr('data-color'));
				let itemId = Number(self.attr('id'));

				if (itemColor === sortedObj.values[itemId] && sortedObj.values[itemId] !== 0) {
					led.addClass('right');
					led.css('background-color', localStorage.getItem('rightColor'))
					clickedTotal++;

					if (clickedTotal === sortedTotal) {
						$('.button.done').removeClass('disable').addClass('active');
						$(leds).each((i, obj) => {
							obj.addClass('disable');
						})
						$('.done.active').click(() => { 
							$('section.panel').addClass('hide');
							$('section.result').removeClass('hide');

							$('.result .slider').slick({
								arrows: false,
								dots: true
							});
						 })

						$(leds).each((i, obj) => obj.addClass('disable'));
					} else {
						console.log(`${clickedTotal} is smaller than ${sortedTotal}`);
					}
				} else {
					console.log(`${itemColor} is not equal ${sortedObj.values[itemId]}`);
				}
			});
		}

		let panelSimulator = $('.panel-simulator'),
			url = `./images/economic-mode/letra-${sortedObj.letter}.png`;

		panelSimulator.attr('src', url);
	}
}